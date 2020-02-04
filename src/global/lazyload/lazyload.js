require(`intersection-observer`);
import LazyLoad from "vanilla-lazyload";

export default function lazyload() {

	const lazyLoadObj = new LazyLoad({
		elements_selector: ".lazy",
		callback_loaded: (el) => { el.dispatchEvent(new CustomEvent("image-loaded", { bubbles: true })); }
	});

	document.querySelector("body").addEventListener("flickity-change", () => {
		lazyLoadObj.update();
	});
	//on scroll load all below the fold Images
	window.addEventListener("scroll", loadImages, true);
	//After they load unbind the scroll listener.
	function loadImages() {
		lazyLoadObj.loadAll();
		window.removeEventListener("scroll", loadImages, true);
	}
}
