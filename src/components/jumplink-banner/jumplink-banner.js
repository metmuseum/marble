import smoothscroll from 'smoothscroll-polyfill';
import { document } from "global";

const jumpLinkBanner = () => {
	document.querySelectorAll(`.js-jump-link`).forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault();
			//Scroll to the next section
			document.querySelector(link.getAttribute("href")).scrollIntoView({
				behavior: "smooth"
			});
		});
	});
}

export default jumpLinkBanner;
