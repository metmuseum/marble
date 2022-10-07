function browseBy() {
	if (document.querySelector(".js-browseby")) {
		const browseBys = document.querySelectorAll(".js-browseby");
		browseBys.forEach((browseBy)=> {
			let tabs = browseBy.querySelectorAll(".js-browseby-tab");
	
			tabs.forEach((tab) => {
				tab.addEventListener("click", function () {
					handleTabClick(tab);
				});
			});

			const handleTabClick = (tabClicked) => {
				let clickedID = tabClicked.id;
				let IDofTabPanelToOpen = clickedID.substring(0, clickedID.length - 4); //remove the "-tab" from the name
				let tabPanelToOpen = document.getElementById(IDofTabPanelToOpen);
				closeAllTabPanels();
				openTabPanel(tabPanelToOpen);
			};

			const closeAllTabPanels = () => {
				let allTabPanels = browseBy.querySelectorAll(".js-browseby-tabpanel");
				allTabPanels.forEach((theTabPanel) => {
					theTabPanel.classList.remove("selected");
					theTabPanel.setAttribute("hidden", "true");
					theTabPanel.setAttribute("aria-expanded", "false");
				});
			};

			const openTabPanel = (tabPanelToOpen) => {
				tabPanelToOpen.classList.add("selected");
				tabPanelToOpen.removeAttribute("hidden");
				tabPanelToOpen.setAttribute("aria-expanded", "true");
			};
		});
	}
}

export default browseBy;