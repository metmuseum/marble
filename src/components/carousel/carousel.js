import Flickity from "flickity";
import arrowShape from "./arrowShape";

require('flickity-imagesloaded');

const flickityDefaults = {
	accessibility: true,
	autoPlay: false,
	cellAlign: "left",
	prevNextButtons: true,
	imagesLoaded: false,
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

		const handler = () => {
			carousel.classList.add("is-loading");
			const allImagesAreLoaded = !carousel.querySelector(".loading");
			if (allImagesAreLoaded) {
				flickityInstance.resize();
				carousel.classList.remove("is-loading");
			}
		};

		// This event is bubbled up when our lazyload library loads an image (see lazyload.js)
		carousel.addEventListener("image-loaded", handler, false);
		carousel.addEventListener("image-errored", handler, false);
	});
};

export default carousel;
export { flickityDefaults };
