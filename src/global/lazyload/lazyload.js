require(`intersection-observer`);
import LazyLoad from "vanilla-lazyload";

export default function lazyload() {
	// console.log("global lazy load temporarily disabled");
	const lazyLoadObj = new LazyLoad({
		elements_selector: ".lazy",
		callback_loaded: el => {
			el.dispatchEvent(new CustomEvent("image-loaded", { bubbles: true }));
		}
	});

	//on scroll load all below the fold Images
	window.addEventListener("scroll", loadImages, true);
	//After they load unbind the scroll listener.
	function loadImages() {
		lazyLoadObj.loadAll();
		window.removeEventListener("scroll", loadImages, true);
	}
}
