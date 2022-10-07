function browseBy() {
	if (document.querySelector(".js-browseby")) {
		const browseBys = document.querySelectorAll(".js-browseby");
		browseBys.forEach((browseBy)=> {
			let tabsContainer = browseBy.querySelector(".js-tabs-control-container");
			let tabs = tabsContainer.querySelectorAll(".js-browseby-tab");
	
			tabs.forEach((tab) => {
				tab.addEventListener("click", function () {
					handleTabClick(tab);
				});
			});

			const handleTabClick = (tabClicked) => {
				let clickedID = tabClicked.id;
				let IDofTabPanelToOpen = clickedID.substring(0, clickedID.length - 4);//remove the "-tab" from the tab id to get the panel id
				let tabPanelToOpen = document.getElementById(IDofTabPanelToOpen);
				selectTab(tabClicked);
				closeAllTabPanels();
				openTabPanel(tabPanelToOpen);
			};

			const selectTab = (tabToSelect) => {
				tabsContainer.querySelector('[aria-selected="true"]').setAttribute("aria-selected", false);
				tabToSelect.parentNode.setAttribute("aria-selected", true);
			};

			const closeAllTabPanels = () => {
				let allTabPanels = browseBy.querySelectorAll(".js-browseby-tabpanel");
				allTabPanels.forEach((tabPanel) => {
					tabPanel.setAttribute("hidden", true);
					tabPanel.setAttribute("aria-expanded", false);
				});
			};

			const openTabPanel = (tabPanelToOpen) => {
				tabPanelToOpen.removeAttribute("hidden");
				tabPanelToOpen.setAttribute("aria-expanded", true);
			};
		});
	}
}

export default browseBy;