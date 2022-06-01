import LazyLoad from "vanilla-lazyload";

const imageLoadedEvent = new CustomEvent("image-loaded", { bubbles: true });
const imageErrorEvent = new CustomEvent("image-errored", { bubbles: true });

const callLoadAll = () => {
	window.marbleLazyLoadObj.loadAll();
	window.removeEventListener("scroll", callLoadAll, true);
};

const lazyload = () => {
	if (window.marbleLazyLoadObj) {
		window.marbleLazyLoadObj.update();
	} else {
		window.marbleLazyLoadObj =  new LazyLoad({
			elements_selector: ".lazy",
			callback_loaded: (el) => {
				el.dispatchEvent(imageLoadedEvent);
			},
			callback_error: (el) => {
				el.dispatchEvent(imageErrorEvent);
			},
		});

		window.addEventListener("scroll", callLoadAll, {
			once: true,
			passive: true,
			capture: true,
		});
	}
};

export default lazyload;
