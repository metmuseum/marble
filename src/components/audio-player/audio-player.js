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

		this.isDarkMode = this.wrapperEl.classList.contains("inverted-colors");

		this.seekHelperDuration = 10;
		this.isScrubbing = false;

		this.initializeListeners();

		if ("mediaSession" in navigator) {
			this.setMetaData();
		}
	}

	initializeListeners = () => {
		this.audioEl.addEventListener("loadedmetadata", this.handleTimeChange);
		this.audioEl.addEventListener("timeupdate", this.handleTimeChange);
		this.audioEl.addEventListener("ended", this.handleTimeChange);
		this.playButtonEl.addEventListener("click", this.togglePlaying);
		this.seekBackHelperEl.addEventListener("click", this.quickSeekBack);
		this.seekForwardHelperEl.addEventListener("click", this.quickSeekForward);
		this.progressBarCanvasEl.addEventListener("mousedown", this.beginScrubbing);
		this.wrapperEl.addEventListener("mousemove", this.scrub);
		this.wrapperEl.addEventListener("mouseup", this.endScrubbing);
		this.wrapperEl.addEventListener("mouseleave", this.endScrubbing);

		if (this.transcriptToggle && this.transcriptWrapper) {
			this.transcriptToggle.addEventListener(
				"click",
				this.handleTranscriptToggle
			);
		}
	};

	handleTimeChange = () => {
		const duration = this.audioEl.duration;
		const elapsed = this.audioEl.currentTime;
		this.setDisplayTime(elapsed, duration);
		this.canUpdateAuotmatically() && this.drawProgress(elapsed, duration);
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
		this.progressBarCanvas.fillStyle = this.isDarkMode ? scssExports.colorWhite : scssExports.colorGrey900;
		this.progressBarCanvas.fillRect(0, 0, (elapsed / duration) * width, 6);
	};

	beginScrubbing = (e) => {
		this.isScrubbing = true;
		this.drawProgress(e.offsetX, e.target.offsetWidth);
		this.audioEl.currentTime =
			(e.offsetX / e.target.offsetWidth) * this.audioEl.duration;
	};

	scrub = (e) => {
		if (this.isScrubbing) {
			this.drawProgress(e.offsetX, e.target.offsetWidth);
			// todo: debounce this?
			this.audioEl.currentTime =
				(e.offsetX / e.target.offsetWidth) * this.audioEl.duration;
		}
	};

	endScrubbing = () => (this.isScrubbing = false);

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

	togglePlaying = () => {
		this.audioEl.paused ? this.setPlay() : this.setPause();
	};

	setPlay = () => {
		this.audioEl.play();
		this.playButtonEl.innerHTML = `&#10074&#10074`;
	};

	setPause = () => {
		this.audioEl.pause();
		this.playButtonEl.innerHTML = `&#9654;`;
	};

	quickSeekBack = () => {
		const newPosition = Math.max(
			0,
			this.audioEl.currentTime - this.seekHelperDuration
		);
		this.audioEl.currentTime = newPosition;
	};

	quickSeekForward = () => {
		const newPosition = Math.min(
			this.audioEl.duration,
			this.audioEl.currentTime + this.seekHelperDuration
		);
		this.audioEl.currentTime = newPosition;
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
