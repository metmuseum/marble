import Flickity from "flickity";

const componentClass = `.js-featured-vertical-items`;
export default function featuredVerticalFlickity() {

	const featuredVerticalFlickity = new Flickity(componentClass, {
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

	const posterChangers = document.querySelectorAll('.js-poster-changer');
	const initialPosterChanger = document.querySelector('.js-poster-changer');
	const posterFrame = document.querySelector('#poster-frame');
	const posters = posterFrame.querySelectorAll('.js-poster');

	initialPosterChanger.classList.add('poster-changer-active');

	const deactivateAllPosterChangers = (e) => {
		posterChangers.forEach(posterChanger => {
			posterChanger.classList.remove('poster-changer-active');
		});
	}

	const deactivateAllPosters = () => {
		posters.forEach(poster => {
			poster.classList.remove('image-opaque');
		});
	}

	const changePoster = (theIndex) => {
		deactivateAllPosters();
		posters[theIndex].classList.add('image-opaque');
	}

	posterChangers.forEach((posterChanger) => {

		posterChanger.onmouseover = function(theIndex){
			var thisPosterChangerIndex = [...this.closest('.featured-vertical-items__wrapper').querySelectorAll('.js-poster-changer')].indexOf(this);
			deactivateAllPosterChangers();
			this.classList.add('poster-changer-active');
			changePoster(thisPosterChangerIndex);
		};
	});
}