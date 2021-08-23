import SETTINGS from "../../global/settings";
import smoothscroll from "smoothscroll-polyfill";

function jumpLinkBanner() {
	smoothscroll.polyfill();
	document.querySelectorAll(`.js-jump-link:not(.${SETTINGS.initializedClassName})`).forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault();
			//Scroll to the next section
			document.querySelector(link.getAttribute("href")).scrollIntoView({
				behavior: "smooth",
			});
		});
		link.classList.add(SETTINGS.initializedClassName);
	});
}

export default jumpLinkBanner;
