function browseBy() {
	if (document.querySelector(".js-browseby")) {
		const browseBys = document.querySelectorAll(".js-browseby");
		const mobileBreakpoint = "499";

		browseBys.forEach((browseBy)=> {
			let tabsContainer = browseBy.querySelector(".js-tabs-control-container");
			let tabs = tabsContainer.querySelectorAll(".js-browseby-tab");
			let allTabPanels = browseBy.querySelectorAll(".js-browseby-tabpanel");
			let tabControls = tabsContainer.querySelectorAll(".js-tab-controls");
	
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
					tabControl.classList.remove("highlighted-tab");
				});
			};

			const highlightTabContainer = (tabClicked) => {
				deHighlightAllTabContainers();
				tabClicked.parentNode.classList.add("highlighted-tab");
			};

			const closeAllTabPanels = () => {
				allTabPanels.forEach((tabPanel) => {
					tabPanel.setAttribute("hidden", true);
				});
			};

			const openTabPanel = (tabClicked) => {
				let clickedID = tabClicked.id;
				let IDofTabPanelToOpen = clickedID.substring(0, clickedID.length - 4);
				let tabPanelToOpen = document.getElementById(IDofTabPanelToOpen);
				reorderDropDown(tabClicked);
				closeAllTabPanels(tabClicked);
				tabPanelToOpen.removeAttribute("hidden");
			};
		});
	}
}

export default browseBy;