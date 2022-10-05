function browseBy() {
	if (document.querySelector(".js-browseby")) {
		const browseBys = document.querySelectorAll(".js-browseby");
		browseBys.forEach((browseBy)=> {
			let tabToggles = browseBy.querySelectorAll(".js-browseby-tab");
	
			tabToggles.forEach((tabToggle) => {
				tabToggle.addEventListener("click", function (e) {
					handleToggleClick(tabToggle, true);
				});
			});

			const handleToggleClick = (toggleClicked, withFocus) => {
				let clickedID = toggleClicked.id;
				let IDofTabToOpen = clickedID.substring(0, clickedID.length - 4);
				let tabToOpen = document.getElementById(IDofTabToOpen);
				closeAllTabs();
				openTab(tabToOpen);
			};

			const closeAllTabs = () => {
				let allTabs = browseBy.querySelectorAll(".js-browseby-tabpanel");
				allTabs.forEach((theTab) => {
					theTab.classList.remove("selected");
					theTab.setAttribute("hidden", "");
				});
			};

			const openTab = (tabToOpen) => {
				tabToOpen.classList.add("selected");
				tabToOpen.removeAttribute("hidden");
			};
		});
	}
}

export default browseBy;