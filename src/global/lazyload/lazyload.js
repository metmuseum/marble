require(`intersection-observer`);
import LazyLoad from "vanilla-lazyload";

export default function lazyload() {
	const LazyloadableClasNames = [".lazy", ".marble-js-lazy"];

	const lazyLoadObj = new LazyLoad({
		elements_selector: LazyloadableClasNames.join(", "),
		callback_loaded: (el) => {
			el.dispatchEvent(new CustomEvent("image-loaded", { bubbles: true }));
		},
	});

	document
		.querySelector("body")
		.addEventListener("flickity-change", lazyLoadObj.update);

	// document.querySelector("body").classList.add("TESTING");
	// alert(document.querySelector("img"));
	console.log("well lazyload is running at least");

	//on scroll load all below the fold Images
	window.addEventListener("scroll", loadImages, true);
	//After they load unbind the scroll listener.
	function loadImages() {
		console.log("running load images ");
		lazyLoadObj.loadAll();
		window.removeEventListener("scroll", loadImages, true);
	}
}
