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
		prevNextButtons: false,
		resize: true,
        wrapAround: false
	});
}