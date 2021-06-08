import scssExports from "../../global/exports.scss";
import timeFormatter from "./time-formatter.js";

class AudioPlayer {
	constructor(wrapperEl) {
		this.wrapperEl = wrapperEl;
		this.audioEl = this.wrapperEl.querySelector(".js-audio-player__audio");
		this.progressBarCanvas = this.wrapperEl
			.querySelector(".js-audio-player__progress-bar")
			.getContext("2d");
		this.transcriptSection = wrapperEl.querySelector(
			".js-audio-player__transcript-section"
		);
		this.transcriptToggle = this.transcriptSection.querySelector(
			".js-audio-player__transcript-toggle"
		);
		this.transcriptWrapper = this.transcriptSection.querySelector(
			".js-audio-player__transcript-wrapper"
		);
		this.playButtonEl = this.wrapperEl.querySelector(
			".js-audio-player__play"
		);
		this.durationEl = this.wrapperEl.querySelector(
			".js-audio-player__duration"
		);
		this.currentTimeEl = this.wrapperEl.querySelector(
			".js-audio-player__current-time"
		);
		this.seekBackHelperEl = this.wrapperEl.querySelector(
			".js-audio-player__seek-back-helper"
		);
		this.seekForwardHelperEl = this.wrapperEl.querySelector(
			".js-audio-player__seek-forward-helper"
		);
		this.seekHelperDuration = 10;

		this.initializeListeners();
	}

	setTime = () => {
		const duration = this.audioEl.duration;
		const elapsed = this.audioEl.currentTime;
		const width = 1000;

		this.durationEl.innerHTML = timeFormatter(duration);
		this.currentTimeEl.innerHTML = timeFormatter(elapsed);

		this.progressBarCanvas.clearRect(0, 0, width, 6);
		this.progressBarCanvas.fillStyle = scssExports.colorGrey500;
		this.progressBarCanvas.fillRect(0, 0, width, 6);
		this.progressBarCanvas.fillStyle = scssExports.colorGrey900; //TODO use currentColor but its not supported rn so lets get creative?
		this.progressBarCanvas.fillRect(0, 0, (elapsed / duration) * width, 6);
	};

	initializeListeners = () => {
		this.audioEl.addEventListener("loadedmetadata", this.setTime);
		this.audioEl.addEventListener("timeupdate", this.setTime);
		this.audioEl.addEventListener("ended", this.setTime);

		this.playButtonEl.addEventListener("click", this.togglePlaying);

		this.seekBackHelperEl.addEventListener("click", this.quickSeekBack);
		this.seekForwardHelperEl.addEventListener("click", this.quickSeekForward);

		if (this.transcriptToggle && this.transcriptWrapper) {
			this.transcriptToggle.addEventListener(
				"click",
				this.handleTranscriptToggle
			);
		}
	};

	togglePlaying = () => {
		this.audioEl.paused ? this.setPlay() : this.setPause();
	};

	setPlay = () => {
		this.audioEl.play();
		this.playButtonEl.innerHTML = `&#10074&#10074`;
	}

	setPause = () => {
		this.audioEl.pause();
		this.playButtonEl.innerHTML = `&#9654;`;
	}

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
