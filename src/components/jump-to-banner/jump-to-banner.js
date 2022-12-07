const jumpToBanner = () => {
	if (document.querySelector(".js-jump-to")) {
		const jumpToBanners = document.querySelectorAll(".js-jump-to");

		jumpToBanners.forEach((jumpToBanner)=> {
			let jumpToLinks = jumpToBanner.querySelectorAll(".js-jump-to__link");
	
			jumpToLinks.forEach((jumpToLink) => {
				jumpToLink.addEventListener("click", function (e) {
					e.preventDefault();
					handleLinkClick(jumpToLink);
				});
			});

			const handleLinkClick = (jumpToLink) => {
				console.log("link clicked", jumpToLink);
				let urlFromLink = new URL(jumpToLink.href);
				let idFromURL = urlFromLink.hash.substring(1);
				let sectionToScrollTo = document.getElementById(idFromURL);
				window.scrollTo({
					behavior: "smooth",
					top: sectionToScrollTo.getBoundingClientRect().top - document.body.getBoundingClientRect().top,
				});
			};
		});
	}
};

export default jumpToBanner;