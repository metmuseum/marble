function browseBy() {
	if (document.querySelector(".js-browseby")) {
		const browseBys = document.querySelectorAll(".js-browseby");
		const mobileBreakpoint = "500";
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
				if (windowWidth <= mobileBreakpoint) {
					handleDropDownModeClick(tabClicked);
				} else {
					openTabPanel(tabClicked);
				}
			};

			const closeAllTabPanels = () => {
				allTabPanels.forEach((tabPanel) => {
					tabPanel.setAttribute("hidden", true);
				});
			};

			const handleDropDownModeClick = (tabClicked) => {
				if (tabsContainer.classList.contains("browseby-tab-controls--open")) {
					openTabPanel(tabClicked);
				} else {
					tabsContainer.classList.add("browseby-tab-controls--open");
				}
			};

			const reorderDropDown = (tabClicked) => {
				if (tabsContainer.classList.contains("browseby-tab-controls--open")) {
					tabsContainer.classList.remove("browseby-tab-controls--open");
					deHighlightAllTabContainers();
					tabClicked.parentNode.classList.add("highlighted-tab");
				}
			};
			
			const deHighlightAllTabContainers = () => {
				tabControls.forEach((tabControl) => {
					tabControl.classList.remove("highlighted-tab");
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