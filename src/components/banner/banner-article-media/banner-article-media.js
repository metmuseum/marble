import Flickity from "flickity";
require('flickity-imagesloaded');

const componentClass = `.js-marble-article__banner-images`;
export default function articleMediaSlider() {

	const mediaSlider = new Flickity(componentClass, {
		accessibility: true,
		autoPlay: false,
		cellAlign: 'left',
		contain: true,
		friction: 0.4,
		imagesLoaded: true,
		pageDots: false,
		prevNextButtons: true,
		resize: true,
		wrapAround: false,
		arrowShape: {
			x0: 0,
			x1: 50, y1: 45,
			x2: 55, y2: 44,
			x3: 6
		}
	});
}