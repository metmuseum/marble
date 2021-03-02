function exhibitionTabs() {
	const exhibitionSections = document.querySelectorAll(".js-exhibition-section");

	document.querySelectorAll(".js-edp-tabs").forEach((exhibitionTabComponent) => {
		const showActiveTab = (activeTab) => {
			exhibitionSections.forEach((section) => {
				section.dataset.name === activeTab ? section.classList.add("is-active") : section.classList.remove("is-active");
			});

			exhibitionTabComponent.scrollIntoView({behavior: "smooth", inline: "nearest"});
		};
		const exhibitionTabs = exhibitionTabComponent.querySelectorAll(".js-edp-tabs__tab");

		exhibitionTabs.forEach((tab)=> {
			tab.addEventListener("click", (e) => {
				e.preventDefault();
				const sectionToOpen = tab.getAttribute("href");

				history.pushState({}, '', `?section=${sectionToOpen}`);

				exhibitionTabs.forEach((tab) => tab.classList.remove("is-active"));

				tab.classList.add("is-active");

				showActiveTab(sectionToOpen);
			});
		});
	});
}

export default exhibitionTabs;
