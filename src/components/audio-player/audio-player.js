import scssExports from "../../global/exports.scss";
import timeFormatter from "./time-formatter.js";

class AudioPlayer {
	constructor(wrapperEl) {
		this.wrapperEl = wrapperEl;
		this.audioEl = this.wrapperEl.querySelector(".js-audio-player__audio");
		this.progressBarCanvasEl = this.wrapperEl.querySelector(
			".js-audio-player__progress-bar"
		);
		this.progressBarCanvas = this.progressBarCanvasEl.getContext("2d");
		this.transcriptSection = wrapperEl.querySelector(
			".js-audio-player__transcript-section"
		);
		this.transcriptToggle = this.transcriptSection.querySelector(
			".js-audio-player__transcript-toggle"
		);
		this.transcriptWrapper = this.transcriptSection.querySelector(
			".js-audio-player__transcript-wrapper"
		);
		this.playButtonEl = this.wrapperEl.querySelector(".js-audio-player__play");
		this.currentTimeEl = this.wrapperEl.querySelector(
			".js-audio-player__current-time"
		);
		this.timeRemainingEl = this.wrapperEl.querySelector(
			".js-audio-player__remaining"
		);
		this.seekBackHelperEl = this.wrapperEl.querySelector(
			".js-audio-player__seek-back-helper"
		);
		this.seekForwardHelperEl = this.wrapperEl.querySelector(
			".js-audio-player__seek-forward-helper"
		);
		this.scrubbableAreaEl = this.wrapperEl.querySelector(
			".js-audio-player__scrubbable-area"
		);

		this.isDarkMode = this.wrapperEl.classList.contains("inverted-colors");

		this.seekHelperDuration = 10;
		this.isScrubbing = false;

		this.lerp = this.lerp.bind(this);

		this.initializeListeners();

		if ("mediaSession" in navigator) {
			this.setMetaData();
		}
	}

	// prettier-ignore
	initializeListeners = () => {
		// Initialize
		this.audioEl.addEventListener("loadedmetadata", this.handleTimeChange);

		// Playback
		this.playButtonEl.addEventListener("touchstart", this.togglePlaying, { passive: false });
		this.playButtonEl.addEventListener("click", this.togglePlaying);
		this.audioEl.addEventListener("timeupdate", this.handleTimeChange);
		this.audioEl.addEventListener("ended", this.handleEnd);

		// Quickseek
		// this.seekBackHelperEl.addEventListener("touchstart", this.quickSeekBack, { passive: false });
		this.seekBackHelperEl.addEventListener("click", this.quickSeekBack);
		// this.seekForwardHelperEl.addEventListener("touchstart", this.quickSeekForward, { passive: false });
		this.seekForwardHelperEl.addEventListener("click", this.quickSeekForward);

		// Scrubbing
		// The Start scrub needs to be very intentional or weird things might happen
		this.scrubbableAreaEl.addEventListener("touchstart", this.beginScrubbing, { passive: false });
		this.scrubbableAreaEl.addEventListener("mousedown", this.beginScrubbing);
		this.scrubbableAreaEl.addEventListener("touchmove", this.scrub, { passive: false });
		this.scrubbableAreaEl.addEventListener("mousemove", this.scrub);
		this.scrubbableAreaEl.addEventListener("touchend", this.endScrubbing, { passive: false }); // wait the seek buttons are inside this, too? 
		this.scrubbableAreaEl.addEventListener("touchcancel", this.endScrubbing, { passive: false });
		this.scrubbableAreaEl.addEventListener("mouseup", this.endScrubbing);
		this.scrubbableAreaEl.addEventListener("mouseleave", this.endScrubbing);

		if (this.transcriptToggle && this.transcriptWrapper) {
			this.transcriptToggle.addEventListener("click", this.handleTranscriptToggle);
		}
	};

	handleTimeChange = (e) => {
		console.log("handling time change", e.type)
		const duration = this.audioEl.duration;
		const elapsed = this.audioEl.currentTime;
		this.setDisplayTime(elapsed, duration);
		this.canUpdateAuotmatically() && this.drawProgress(elapsed, duration);
	};

	handleEnd = () => {
		this.handleTimeChange();
		this.setPause();
	};

	setDisplayTime = (elapsed, duration) => {
		this.currentTimeEl.innerHTML = timeFormatter(elapsed);
		this.timeRemainingEl.innerHTML = timeFormatter(duration - elapsed);
	};

	canUpdateAuotmatically = () => !this.isScrubbing;

	drawProgress = (elapsed, duration, width = 10000) => {
		this.progressBarCanvas.clearRect(0, 0, width, 6);
		this.progressBarCanvas.fillStyle = "transparent";
		this.progressBarCanvas.fillRect(0, 0, width, 6);
		this.progressBarCanvas.fillStyle = this.isDarkMode
			? scssExports.colorWhite
			: scssExports.colorGrey900;
		this.progressBarCanvas.fillRect(0, 0, (elapsed / duration) * width, 6);
	};

	beginScrubbing = (e) => {
		e.preventDefault(); // don't fire redundant mouse event, if this was a touch
		console.log("begin scrubbing", e.type);
		this.isScrubbing = true;
		this.scrub(e);
	};

	scrub = (e) => {
		e.preventDefault();
		console.log("scrub", e.type);

		if (this.isScrubbing) {
			let canvasRectangle = this.progressBarCanvasEl.getBoundingClientRect();
			let offsetX;
	
			if (["touchstart", "touchmove"].includes(e.type)) {
				offsetX = e.touches[0].clientX - canvasRectangle.left;
			} else {
				offsetX = e.offsetX;
			}
	
			this.drawProgress(offsetX, canvasRectangle.width);
			let currentSecond =
				(offsetX / canvasRectangle.width) * this.audioEl.duration;
			this.audioEl.currentTime = currentSecond;
			this.setDisplayTime(currentSecond, this.audioEl.duration);
		}
	};

	endScrubbing = (e) => {
		e.preventDefault();
		console.log("end scrubbing", e.type);
		this.isScrubbing = false;
		this.startLerp();
	};

	setMetaData = () => {
		navigator.mediaSession.metadata = new MediaMetadata({
			title: this.wrapperEl.querySelector(".audio-player__title").innerHTML,
			artist: this.wrapperEl.querySelector(".audio-player__sub-title")
				.innerHTML,
			artwork: [
				{ src: this.wrapperEl.querySelector(".audio-player__cover-image").src },
			],
		});
	};

	togglePlaying = (e) => {
		e.preventDefault();
		this.audioEl.paused ? this.setPlay() : this.setPause();
	};

	setPlay = () => {
		this.audioEl.play();
		this.playButtonEl.innerHTML = `&#10074&#10074`;
		this.startLerp();
	};

	setPause = () => {
		this.audioEl.pause();
		this.playButtonEl.innerHTML = `&#9654;`;
		this.endLerp();
	};

	startLerp() {
		this.lerpAnimation = requestAnimationFrame(this.lerp);
	}

	lerp() {
		if (this.canUpdateAuotmatically()) {
			this.drawProgress(this.audioEl.currentTime, this.audioEl.duration);
			this.lerpAnimation = requestAnimationFrame(this.lerp);
		} else {
			cancelAnimationFrame(this.lerpAnimation);
		}
	}

	endLerp() {
		cancelAnimationFrame(this.lerpAnimation);
	}

	quickSeekBack = (e) => {
		e.preventDefault();
		const newPosition = Math.max(
			0,
			this.audioEl.currentTime - this.seekHelperDuration
		);
		this.audioEl.currentTime = newPosition; // setting this fires timeupdate event ;)
	};

	quickSeekForward = (e) => {
		e.preventDefault();
		const newPosition = Math.min(
			this.audioEl.duration,
			this.audioEl.currentTime + this.seekHelperDuration
		);
		this.audioEl.currentTime = newPosition; // setting this fires timeupdate event ;)
	};

	handleTranscriptToggle = (e) => {
		e.preventDefault();
		this.transcriptSection.classList.toggle("transcript-is-open");
	};
}

const initializeAudioPlayers = () => {
	const audioPlayers = document.querySelectorAll(".js-marble-audio-player");
	audioPlayers.forEach((player) => new AudioPlayer(player));
};

export default initializeAudioPlayers;
