import Flickity from "flickity";

const componentClass = `.js-secondary-stream-items`;
export default function secondaryStreamFlickity() {

	const secondaryStreamFlickity = new Flickity(componentClass, {
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