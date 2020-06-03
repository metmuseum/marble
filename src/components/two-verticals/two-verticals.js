import Flickity from "flickity";

var componentClasses = document.querySelectorAll('.js-two-verticals-items');

export default function verticalListFlickity() {
	for ( var i=0, len = componentClasses.length; i < len; i++ ) {
		var componentClass = componentClasses[i];
		const verticalListFlickity = new Flickity(componentClass, {
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
}