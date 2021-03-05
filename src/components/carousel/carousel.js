import Flickity from "flickity";
import arrowShape from "./arrowShape";

const flickityDefaults = {
	accessibility: true,
	autoPlay: false,
	cellAlign: "left",
	prevNextButtons: true,
	pageDots: false,
	friction: 0.4,
	contain: true,
	resize: true,
	wrapAround: false,
	arrowShape,
};

const carousel = (options = {}) => {
	let { selectorString } = options;
	selectorString = selectorString || ".js-carousel";

	let finalOptions = { ...flickityDefaults, ...options };

	const carousels = document.querySelectorAll(selectorString);

	carousels.forEach((carousel) => {
		const flickityInstance = new Flickity(carousel, finalOptions).on(
			`change`,
			function () {
				this.cells.forEach((cell) => {
					const firstVideo = cell.element.querySelector("video");
					if (firstVideo !== null) {
						firstVideo.pause();
					}
				});

				const firstVideo = this.selectedElements[0].querySelector("video");
				if (firstVideo !== null) {
					firstVideo.play();
				}
			}
		);

		function handleImagesLoaded() {
			flickityInstance.resize();
			carousel.removeEventListener("image-loaded", handleImageLoad, false);
			carousel.classList.remove("is-loading");
		};

		//This event is bubbled up when our lazyload library kicks off.
		carousel.addEventListener("image-loaded", handleImageLoad, false);
		//If images within the carousel have been loaded after the carousel initiated, re-calcute the size.

		function handleImageLoad() {
			carousel.classList.add("is-loading");
			//If there are no more images loading - handle the fully loaded carousel.
			!carousel.querySelector(".lazy-loading") && handleImagesLoaded();
		}
	});
};

export default carousel;
export { flickityDefaults };
