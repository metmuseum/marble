import Flickity from "flickity";

const componentClass = `.js-topics-slider-list`;
export default function topicsSlider() {

	const topicsSlider = new Flickity(componentClass, {
		accessibility: true,
		autoPlay: false,
		cellAlign: 'left',
		contain: true,
		friction: 0.4,
		imagesLoaded: false,
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