function viewMore() {
	if (document.querySelector(".js-view-more-panel")) {
		const viewMores = document.querySelectorAll(".js-view-more-panel");
		const mobileBreakpoint = 499;

		viewMores.forEach((viewMore)=> {
			let showMoreCTAs = viewMore.querySelectorAll(".js-view-more-panel-cta");
			let isMobileOnly = viewMore.classList.contains("js-view-more-panel--mobile-only") ? true : false;
			let windowWidth = window.innerWidth;

			const checkTabpanelHeight = (tabpanelToCheck) => {
				let tabpanelToCheckInner = tabpanelToCheck.querySelector(".js-view-more-panel-body");
				console.log("clientHeight", tabpanelToCheckInner.clientHeight);
				console.log("scrollHeight", tabpanelToCheckInner.scrollHeight);
				if (tabpanelToCheckInner.clientHeight < tabpanelToCheckInner.scrollHeight) {
					tabpanelToCheck.classList.add("view-more-panel--cropped");
				} else {
					tabpanelToCheck.classList.remove("view-more-panel--cropped");
				}
			};
			if (!isMobileOnly || (windowWidth <= mobileBreakpoint)) {
				checkTabpanelHeight(viewMore);
			}
			
			const expandTabpanelText = (tabToExpand, CTAclicked) => {
				CTAclicked.querySelector(".js-view-more-panel-cta-text").innerHTML = "Less";
				tabToExpand.classList.remove("view-more-panel--cropped");
				tabToExpand.classList.add("view-more-panel--expanded");
			};
	
			const contractTabpanelText  = (tabToContract, CTAclicked) => {
				window.scrollTo({
					behavior: "smooth",
					top: viewMore.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 80,
				});
				tabToContract.addEventListener("transitionend", function () {
					CTAclicked.querySelector(".js-view-more-panel-cta-text").innerHTML = "View more";
				}, {
					once: true
				});
				tabToContract.classList.add("view-more-panel--cropped");
				tabToContract.classList.remove("view-more-panel--expanded");
			};

			const handleCTAclick = (CTAclicked) => {
				let theTab = CTAclicked.closest(".js-view-more-panel");
				if (theTab.classList.contains("view-more-panel--cropped")) {
					expandTabpanelText(theTab, CTAclicked);
				} else {
					contractTabpanelText(theTab, CTAclicked);
				}
			};

			showMoreCTAs.forEach((showMoreCTA) => {
				showMoreCTA.addEventListener("click", function (e) {
					e.preventDefault();
					handleCTAclick(showMoreCTA);
				});
			});
		});
	}
}

export default viewMore;