function exhibitionTabs() {

	//Only one tab control should exist on a page.
	const exhibitionTabComponent = document.querySelector(".js-edp-tabs");
	const exhibitionTabs = Array.from(exhibitionTabComponent.querySelectorAll(".js-edp-tabs__tab"));
	const exhibitionSections = document.querySelectorAll(".js-exhibition-section");

	//Get Initial URL params
	let urlParams = new URLSearchParams(window.location.search);

	//Add a ?section=activeSection to the URL.
	const handleURLupdate = (sectionName) => {
		urlParams.set('section', sectionName);
		const stringifiedUrlParams = urlParams.toString();
		window.history.replaceState(null, null, `?${stringifiedUrlParams}`);
	};

	//Hide deselected sections and show the selected one.
	const handleSectionChange = (activeTab) => {
		exhibitionSections.forEach((section) => {
			section.dataset.name === activeTab ? section.classList.add("is-active") : section.classList.remove("is-active");
		});

		exhibitionTabComponent.scrollIntoView({behavior: "smooth", inline: "nearest"});
		handleURLupdate(activeTab);
	};

	//Show active state on tab. Call section handler.
	const handleTabChange = (tab) => {
		const sectionToOpen = tab.getAttribute("href");
		exhibitionTabs.forEach((tab) => tab.classList.remove("is-active"));
		tab.classList.add("is-active");
		handleSectionChange(sectionToOpen);
	};

	//Check URL for an active section. If none exist select the first section.
	const handleInitialState = () => {

		const sectionName = urlParams.has("section") ?
			urlParams.get("section") :
			exhibitionTabs[0].getAttribute("href");

		handleSectionChange(sectionName);
		const activeTab = exhibitionTabs.find((tab) => tab.getAttribute("href") === sectionName);
		activeTab.classList.add("is-active");
	};

	exhibitionTabs.forEach((tab)=> {
		tab.addEventListener("click", (e) => {
			e.preventDefault();
			handleTabChange(tab);
		});
	});

	handleInitialState();
}

export default exhibitionTabs;
