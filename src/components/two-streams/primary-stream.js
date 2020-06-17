import Flickity from "flickity";

const componentClass = `.js-primary-stream-items`;
export default function primaryStreamFlickity() {

	const primaryStreamFlickity = new Flickity(componentClass, {
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
	});
}