require(`intersection-observer`);
import LazyLoad from "vanilla-lazyload";

export default function lazyload() {
	const imageLoadedEvent = new CustomEvent("image-loaded", { bubbles: true });

	const lazyLoadObj = new LazyLoad({
		elements_selector: ".lazy",
		callback_loaded: (el) => {
			el.dispatchEvent(imageLoadedEvent);
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
}
