import Flickity from "flickity";

export default function primaryStreamFlickity() {
	const componentClass = `.js-navigation-bare`;
	const sliders = document.querySelectorAll(componentClass);
	sliders.forEach((slider) => {
		const flickityInstance = new Flickity(slider, {
			accessibility: true,
			autoPlay: false,
			cellAlign: 'left',
			contain: true,
			friction: 0.4,
			imagesLoaded: false,
			pageDots: false,
			prevNextButtons: false,
			resize: true,
			watchCSS: true,
			wrapAround: false
		})
	});
}