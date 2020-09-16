export default function videoSlide() {
	const videosInCarouselSlides = document.querySelectorAll(`.js-carousel-slide__video`);

	const handlePlay = (videoToPlay) => {
		//Bubbles up to Carousel/any other component that might care about a video starting
		videoToPlay.dispatchEvent(new CustomEvent("video-playing", { bubbles: true}));

		//Pause all other videos within *ALL* carousels on the page
		videosInCarouselSlides.forEach((video) => {
			(videoToPlay.id !== video.id) && video.pause();
		});
	};

	videosInCarouselSlides.forEach( (videoElement) => {
		videoElement.onplay = () => handlePlay(videoElement);
		videoElement.addEventListener("click", () => {
			videoElement.play();
		});
	});
}
