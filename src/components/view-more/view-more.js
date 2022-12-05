import SETTINGS from "../../global/settings";

const viewMore = () => {
	if (document.querySelector(".js-view-more-panel")) {
		initialize();
	}
};

const checkTabpanelHeight = (tabpanelToCheck) => {
	let tabpanelToCheckInner = tabpanelToCheck.querySelector(".js-view-more-panel-body");
	if ((tabpanelToCheckInner.clientHeight + 95) < tabpanelToCheckInner.scrollHeight) {
		tabpanelToCheck.classList.add("view-more-panel--cropped");
	} else {
		tabpanelToCheck.classList.remove("view-more-panel--cropped");
	}
};

const expandTabpanelText = (tabToExpand, buttonClicked) => {
	buttonClicked.querySelector(".js-view-more-panel-cta-text").innerHTML = "View less";
	tabToExpand.classList.remove("view-more-panel--cropped");
	tabToExpand.classList.add("view-more-panel--expanded");
};

const contractTabpanelText  = (viewMore, tabToContract, buttonClicked) => {
	window.scrollTo({
		behavior: "smooth",
		top: viewMore.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 80,
	});
	tabToContract.addEventListener("transitionend", function () {
		buttonClicked.querySelector(".js-view-more-panel-cta-text").innerHTML = "View more";
	}, {
		once: true
	});
	tabToContract.classList.add("view-more-panel--cropped");
	tabToContract.classList.remove("view-more-panel--expanded");
};

const expandOrContractTabpanel = (viewMore, buttonClicked) => {
	let thePanel = buttonClicked.closest(".js-view-more-panel");
	if (thePanel.classList.contains("view-more-panel--cropped")) {
		expandTabpanelText(thePanel, buttonClicked);
	} else {
		contractTabpanelText(viewMore, thePanel, buttonClicked);
	}
};

const initialize = () => {
	const viewMores = document.querySelectorAll(".js-view-more-panel");

	viewMores.forEach((viewMore)=> {
		let panelButtons = viewMore.querySelectorAll(".js-view-more-panel-cta");
		let isMobileOnly = viewMore.classList.contains("js-view-more-panel--mobile-only");

		if (!isMobileOnly || (window.innerWidth <= SETTINGS.mobileBreakpoint)) {
			checkTabpanelHeight(viewMore);
		}

		panelButtons.forEach((panelButton) => panelButton.addEventListener("click", function(){
			expandOrContractTabpanel(viewMore, panelButton);
		}));
	});
};

export default viewMore;