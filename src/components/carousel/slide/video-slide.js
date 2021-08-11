import SETTINGS from "../../../global/settings";

export default function videoSlide() {
	const selectorString = `.js-carousel-slide__video:not(.${SETTINGS.initializedClassName})`;
	const videoSlides = [...document.querySelectorAll(selectorString)];

	const videosInCarouselSlides = videoSlides.map((videoElement)=> {
		//Handles the case of some video libraries that nest the video element inside the container.
		return videoElement.nodeName === "VIDEO" ? videoElement : videoElement.querySelector("video");
	});

	const handlePlay = (videoToPlay) => {
		//Bubbles up to Carousel/any other component that might care about a video starting
		videoToPlay.dispatchEvent(new CustomEvent("video-playing", { bubbles: true}));

		//Pause all other videos within *ALL* carousels on the page
		videosInCarouselSlides.forEach((video) => {
			videoToPlay !== video && video.pause();
		});
	};

	videosInCarouselSlides.forEach( (videoElement) => {
		videoElement.onplay = () => handlePlay(videoElement);
		videoElement.addEventListener("click", () => {
			videoElement.play();
		});
		videoElement.classList.add(SETTINGS.initializedClassName);
	});
}
