function browseBy() {
	if (document.querySelector(".js-browseby")) {
		const browseBys = document.querySelectorAll(".js-browseby");
		const mobileBreakpoint = 499;

		browseBys.forEach((browseBy)=> {
			let tabsContainer = browseBy.querySelector(".js-tabs-control-container");
			let tabs = tabsContainer.querySelectorAll(".js-browseby-tab");
			let allTabPanels = browseBy.querySelectorAll(".js-browseby-tabpanel");
			let tabControls = tabsContainer.querySelectorAll(".js-tab-controls");
			let isMobileOnly = tabsContainer.classList.contains("js-view-more-panel--mobile-only") ? true : false;
	
			tabs.forEach((tab) => {
				tab.addEventListener("click", function () {
					handleTabClick(tab);
				});
			});

			const handleTabClick = (tabClicked) => {
				let windowWidth = window.innerWidth;
				if (windowWidth <= mobileBreakpoint) { //in "dropdown mode" for mobile only
					handleDropDownModeClick(tabClicked);
				} else {
					highlightTabContainer(tabClicked);
					openTabPanel(tabClicked);
				}
			};

			const handleDropDownModeClick = (tabClicked) => {
				//if dropdown is already open, handle it as a normal click to open a panel
				if (tabsContainer.classList.contains("browseby-dropdown--open")) {
					openTabPanel(tabClicked);
				} else {
					tabsContainer.classList.add("browseby-dropdown--open");
				}
			};

			const reorderDropDown = (tabClicked) => {
				if (tabsContainer.classList.contains("browseby-dropdown--open")) {
					tabsContainer.classList.remove("browseby-dropdown--open");
					highlightTabContainer(tabClicked);
				}
			};
			
			const deHighlightAllTabContainers = () => {
				tabControls.forEach((tabControl) => {
					tabControl.classList.remove("browseby-highlighted-tab");
				});
			};

			const highlightTabContainer = (tabClicked) => {
				deHighlightAllTabContainers();
				tabClicked.parentNode.classList.add("browseby-highlighted-tab");
			};

			const closeAllTabPanels = () => {
				allTabPanels.forEach((tabPanel) => {
					tabPanel.setAttribute("hidden", true);
				});
			};

			const checkTabpanelHeight = (tabpanelToCheck) => {
				let windowWidth = window.innerWidth;
				if (!isMobileOnly || (windowWidth <= mobileBreakpoint)) {
					let tabpanelToCheckInner = tabpanelToCheck.querySelector(".js-view-more-panel-body");
					if (tabpanelToCheckInner.clientHeight < tabpanelToCheckInner.scrollHeight) {
						tabpanelToCheck.classList.add("view-more-panel--cropped");
					} else {
						tabpanelToCheck.classList.remove("view-more-panel--cropped");
					}
				}
			};

			const openTabPanel = (tabClicked) => {
				let clickedID = tabClicked.id;
				let IDofTabPanelToOpen = clickedID.substring(0, clickedID.length - 4);
				let tabPanelToOpen = document.getElementById(IDofTabPanelToOpen);
				reorderDropDown(tabClicked);
				closeAllTabPanels(tabClicked);
				tabPanelToOpen.removeAttribute("hidden");
				checkTabpanelHeight(tabPanelToOpen);
			};
		});
	}
}

export default browseBy;