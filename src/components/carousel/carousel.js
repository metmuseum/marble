import Flickity from "flickity";
require('flickity-imagesloaded');

export default function carouselComponent() {
	const componentClass = `.js-carousel`;
	const carousels = document.querySelectorAll(componentClass);
	carousels.forEach((carousel) => {
		const flickityInstance = new Flickity(carousel, {
			accessibility: true,
			autoPlay: false,
			cellAlign: "left",
			contain: true,
			friction: 0.4,
			imagesLoaded: true,
			pageDots: false,
			prevNextButtons: true,
			resize: true,
			watchCSS: true,
			wrapAround: false,
			arrowShape: {
				x0: 15,
				x1: 65,
				y1: 45,
				x2: 70,
				y2: 40,
				x3: 27,
			},
		}).on(`change`, function () {
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
		});

		//This event is bubbled up when our lazyload library kicks off.
		carousel.addEventListener("image-loaded", handleImageLoad, false);
		//If images within the carousel have been loaded after the carousel initiated, re-calcute the size.
		function handleImageLoad() {
			flickityInstance.resize();
			carousel.removeEventListener("image-loaded", handleImageLoad, false);
		}
	});
}
