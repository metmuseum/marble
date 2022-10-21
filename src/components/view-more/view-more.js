function viewMore() {

	if (document.querySelector(".js-view-more-panel")) {
		const viewMores = document.querySelectorAll(".js-view-more-panel");

		viewMores.forEach((viewMore)=> {
			let showMoreCTAs = viewMore.querySelectorAll(".js-view-more-panel-cta");

			const checkTabpanelHeight = (tabpanelToCheck) => {
				let tabpanelToCheckInner = tabpanelToCheck.querySelector(".js-view-more-panel-body");
				if (tabpanelToCheckInner.clientHeight < tabpanelToCheckInner.scrollHeight) {
					tabpanelToCheck.classList.add("view-more-panel--cropped");
				} else {
					tabpanelToCheck.classList.remove("view-more-panel--cropped");
				}
			};
			checkTabpanelHeight(viewMore);
			

			const expandTabpanelText = (tabToExpand, CTAclicked) => {
				tabToExpand.addEventListener("transitionend", function () {
					CTAclicked.querySelector(".js-view-more-panel-cta-text").innerHTML = "View less";
				}, {
					once: true
				});
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