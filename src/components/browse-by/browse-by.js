function browseBy() {
	if (document.querySelector(".js-browseby")) {
		const browseBys = document.querySelectorAll(".js-browseby");
		const mobileBreakpoint = "500";
		browseBys.forEach((browseBy)=> {
			let tabsContainer = browseBy.querySelector(".js-tabs-control-container");
			let tabs = tabsContainer.querySelectorAll(".js-browseby-tab");
	
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
				let allTabPanels = browseBy.querySelectorAll(".js-browseby-tabpanel");
				allTabPanels.forEach((tabPanel) => {
					tabPanel.setAttribute("hidden", true);
				});
			};

			const handleDropDownModeClick = (tabClicked) => {
				if (tabsContainer.classList.contains("tab-controls--open")) {
					openTabPanel(tabClicked);
				} else {
					tabsContainer.classList.add("tab-controls--open");
				}
			};

			const openTabPanel = (tabClicked) => {
				let clickedID = tabClicked.id;
				let IDofTabPanelToOpen = clickedID.substring(0, clickedID.length - 4);
				let tabPanelToOpen = document.getElementById(IDofTabPanelToOpen);
				closeAllTabPanels();
				tabPanelToOpen.removeAttribute("hidden");
			};
		});
	}
}

export default browseBy;