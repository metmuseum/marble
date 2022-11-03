import SETTINGS from "../../global/settings";

const viewMore = () => {
	if (document.querySelector(".js-view-more-panel")) {
		initialize();
	}
};

const initialize = () => {
	const viewMores = document.querySelectorAll(".js-view-more-panel");
	const mobileBreakpoint = SETTINGS.mobileBreakpoint;

	viewMores.forEach((viewMore)=> {
		let panelButton = viewMore.querySelectorAll(".js-view-more-panel-cta");
		let isMobileOnly = viewMore.classList.contains("js-view-more-panel--mobile-only") ? true : false;
		let windowWidth = window.innerWidth;

		const checkTabpanelHeight = (tabpanelToCheck) => {
			let tabpanelToCheckInner = tabpanelToCheck.querySelector(".js-view-more-panel-body");
			if (tabpanelToCheckInner.clientHeight < tabpanelToCheckInner.scrollHeight) {
				tabpanelToCheck.classList.add("view-more-panel--cropped");
			} else {
				tabpanelToCheck.classList.remove("view-more-panel--cropped");
			}
		};
		if (!isMobileOnly || (windowWidth <= mobileBreakpoint)) {
			checkTabpanelHeight(viewMore);
		}
		
		const expandTabpanelText = (tabToExpand, buttonClicked) => {
			buttonClicked.querySelector(".js-view-more-panel-cta-text").innerHTML = "Less";
			tabToExpand.classList.remove("view-more-panel--cropped");
			tabToExpand.classList.add("view-more-panel--expanded");
		};

		const contractTabpanelText  = (tabToContract, buttonClicked) => {
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

		const handleCTAclick = (buttonClicked) => {
			let theTab = buttonClicked.closest(".js-view-more-panel");
			if (theTab.classList.contains("view-more-panel--cropped")) {
				expandTabpanelText(theTab, buttonClicked);
			} else {
				contractTabpanelText(theTab, buttonClicked);
			}
		};

		panelButton.forEach((showMoreCTA) => {
			showMoreCTA.addEventListener("click", function (e) {
				e.preventDefault();
				handleCTAclick(showMoreCTA);
			});
		});
	});
};

export default viewMore;