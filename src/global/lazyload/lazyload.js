require("intersection-observer");
import LazyLoad from "vanilla-lazyload";

const imageLoadedEvent = new CustomEvent("image-loaded", { bubbles: true });
const imageErrorEvent = new CustomEvent("image-errored", { bubbles: true });

const lazyload = () => {
	const lazyLoadObj = new LazyLoad({
		elements_selector: ".lazy",
		callback_loaded: (el) => {
			el.dispatchEvent(imageLoadedEvent);
		},
		callback_error: (el) => {
			el.dispatchEvent(imageErrorEvent);
		},
	});

	function loadImages() {
		lazyLoadObj.loadAll();
		// After they load unbind the scroll listener.
		window.removeEventListener("scroll", loadImages, true);
	}

	//on scroll load all below the fold Images
	window.addEventListener("scroll", loadImages, {
		once: true,
		passive: true,
		capture: true,
	});

	// make this object available globally for future calls
	window.marbleLazyLoadObj = lazyLoadObj;
};

export default lazyload;
