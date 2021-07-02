import scssExports from "../../global/exports.scss";
import timeFormatter from "./time-formatter.js";

class AudioPlayer {
	constructor(wrapperEl) {
		this.wrapperEl = wrapperEl;
		this.audioEl = this.wrapperEl.querySelector(".js-audio-player__audio");
		this.progressBarCanvasEl = this.wrapperEl.querySelector(".js-audio-player__progress-bar");
		this.progressBarCanvas = this.progressBarCanvasEl.getContext("2d");
		this.transcriptSection = wrapperEl.querySelector(".js-audio-player__transcript-section");
		this.playButtonEl = this.wrapperEl.querySelector(".js-audio-player__play");
		this.currentTimeEl = this.wrapperEl.querySelector(".js-audio-player__current-time");
		this.timeRemainingEl = this.wrapperEl.querySelector(".js-audio-player__remaining");
		this.seekBackHelperEl = this.wrapperEl.querySelector(".js-audio-player__seek-back-helper");
		this.seekForwardHelperEl = this.wrapperEl.querySelector(".js-audio-player__seek-forward-helper");
		this.scrubStartAreaEl = this.wrapperEl.querySelector(".js-audio-player__scrubbing-start-area");
		this.scrubbableAreaEl = this.wrapperEl.querySelector(".js-audio-player__scrubbable-area");
		if (this.transcriptSection) {
			this.transcriptToggle = this.transcriptSection.querySelector(".js-audio-player__transcript-toggle");
			this.transcriptToggleText = this.transcriptSection.querySelector(".js-transcript__toggle-text");
			this.transcriptWrapper = this.transcriptSection.querySelector(".js-audio-player__transcript-wrapper");
			this.quoteExpanderDefaultText = this.transcriptToggleText.innerHTML;
		}

		this.isDarkMode = this.wrapperEl.classList.contains("inverted-colors");
		this.seekHelperDuration = 10;
		this.isScrubbing = false;

		// bind listeners to this object and save the returned function reference, so they can be added/removed in the right scope
		["_handleTimeChange",
			"beginScrubbing",
			"endScrubbing",
			"handleEnd",
			"handleTimeChange",
			"handleTranscriptToggle",
			"quickSeekBack",
			"quickSeekForward",
			"scrub",
			"togglePlaying"].forEach((listener) => {
			this[listener] = this[listener].bind(this);
		});

		this.initializeListeners();

		if ("mediaSession" in navigator) {
			this.setMetaData();
		}
	}

	initializeListeners() {
		// Initialize
		this.audioEl.addEventListener("loadedmetadata", this.handleTimeChange);

		// Playback
		this.playButtonEl.addEventListener("touchstart", this.togglePlaying, { passive: false });
		this.playButtonEl.addEventListener("click", this.togglePlaying);
		this.audioEl.addEventListener("timeupdate", this.handleTimeChange);
		this.audioEl.addEventListener("ended", this.handleEnd);
		
		// Quickseek
		this.seekBackHelperEl.addEventListener("click", this.quickSeekBack);
		this.seekForwardHelperEl.addEventListener("click", this.quickSeekForward);
		
		// Scrubbing
		this.scrubStartAreaEl.addEventListener("touchstart", this.beginScrubbing, { passive: false });
		this.scrubStartAreaEl.addEventListener("mousedown", this.beginScrubbing);
		
		// Transcript
		if (this.transcriptSection) {
			if (this.transcriptToggle && this.transcriptWrapper) {
				this.transcriptToggle.addEventListener("click", this.handleTranscriptToggle);
			}
		}
	}


	handleTimeChange() {
		requestAnimationFrame(this._handleTimeChange);
	}

	_handleTimeChange() {
		const duration = this.audioEl.duration;
		const elapsed = this.audioEl.currentTime;
		this.setDisplayTime(elapsed, duration);
		this.drawProgress(elapsed, duration);
	}

	handleEnd() {
		this.handleTimeChange();
		this.setPause();
	}

	setDisplayTime(elapsed, duration) {
		this.currentTimeEl.innerHTML = timeFormatter(elapsed);
		this.timeRemainingEl.innerHTML = timeFormatter(duration - elapsed);
	}

	canUpdateAuotmatically() {return !this.isScrubbing;}

	drawProgress(elapsed, duration, width = 10000) {
		this.progressBarCanvas.save();
		this.progressBarCanvas.clearRect(0, 0, width, 6);
		this.progressBarCanvas.fillStyle = "transparent";
		this.progressBarCanvas.fillRect(0, 0, width, 6);
		this.progressBarCanvas.fillStyle = this.isDarkMode
			? scssExports.colorWhite
			: scssExports.colorGrey900;
		this.progressBarCanvas.fillRect(0, 0, (elapsed / duration) * width, 6);
		this.progressBarCanvas.restore();
	}

	beginScrubbing(e) {
		e.preventDefault(); // don't fire redundant mouse event, if this was a touch
		this.isScrubbing = true;
		this.initializeScrubbingListeners();
		this.scrub(e);
	}

	initializeScrubbingListeners() {
		// touch
		this.scrubbableAreaEl.addEventListener("touchmove", this.scrub, { passive: false });
		this.scrubbableAreaEl.addEventListener("touchend", this.endScrubbing, { passive: false });
		this.scrubbableAreaEl.addEventListener("touchcancel", this.endScrubbing, { passive: false });
		// mouse
		this.scrubbableAreaEl.addEventListener("mousemove", this.scrub);
		this.scrubbableAreaEl.addEventListener("mouseup", this.endScrubbing);
		this.scrubbableAreaEl.addEventListener("mouseleave", this.endScrubbing);
	}

	scrub(e) {
		e.preventDefault();

		if (this.isScrubbing) {
			let canvasRectangle = this.progressBarCanvasEl.getBoundingClientRect();
			let offsetX;

			if (["touchstart", "touchmove"].includes(e.type)) {
				offsetX = e.touches[0].clientX - canvasRectangle.left;
			} else {
				offsetX = e.offsetX;
			}

			let currentSecond =
				(offsetX / canvasRectangle.width) * this.audioEl.duration;
			this.audioEl.currentTime = currentSecond;
		}
	}

	endScrubbing(e) {
		e.preventDefault();
		this.isScrubbing = false;
		this.cleanUpScrubListeners();
	}

	cleanUpScrubListeners() {
		// touch
		this.scrubbableAreaEl.removeEventListener("touchmove", this.scrub, { passive: false });
		this.scrubbableAreaEl.removeEventListener("touchend", this.endScrubbing, { passive: false });
		this.scrubbableAreaEl.removeEventListener("touchcancel", this.endScrubbing, { passive: false });
		// mouse
		this.scrubbableAreaEl.removeEventListener("mousemove", this.scrub);
		this.scrubbableAreaEl.removeEventListener("mouseup", this.endScrubbing);
		this.scrubbableAreaEl.removeEventListener("mouseleave", this.endScrubbing);
	}

	setMetaData() {
		this.metaImage = this.wrapperEl.querySelector(".audio-player__cover-image") ?
			this.wrapperEl.querySelector(".audio-player__cover-image").src :
			null;


		navigator.mediaSession.metadata = new MediaMetadata({
			title: this.wrapperEl.querySelector(".audio-player__title").innerHTML,
			artist: this.wrapperEl.querySelector(".audio-player__sub-title").innerHTML,
			artwork: [
				{ src: this.metaImage },
			],
		});
	}

	togglePlaying(e) {
		e.preventDefault();
		this.audioEl.paused ? this.setPlay() : this.setPause();
	}

	setPlay() {
		this.audioEl.play();
		this.wrapperEl.classList.add("is-playing");
	}

	setPause() {
		this.audioEl.pause();
		this.wrapperEl.classList.remove("is-playing");
	}

	quickSeekBack(e) {
		e.preventDefault();
		const newPosition = Math.max(
			0,
			this.audioEl.currentTime - this.seekHelperDuration
		);
		this.audioEl.currentTime = newPosition; // setting this fires timeupdate event ;)
	}

	quickSeekForward(e) {
		e.preventDefault();
		const newPosition = Math.min(
			this.audioEl.duration,
			this.audioEl.currentTime + this.seekHelperDuration
		);
		this.audioEl.currentTime = newPosition; // setting this fires timeupdate event ;)
	}

	handleTranscriptToggle(e) {
		e.preventDefault();
		if (this.transcriptSection.classList.contains("transcript-is-open")) {
			this.transcriptToggleText.innerHTML = this.quoteExpanderDefaultText;
			this.transcriptSection.classList.remove("transcript-is-open");
		} else {
			this.transcriptSection.classList.add("transcript-is-open");
			this.transcriptToggleText.innerHTML = "Hide Transcript";
		}
	}
}

const initializeAudioPlayers = () => {
	const audioPlayers = document.querySelectorAll(".js-marble-audio-player");
	audioPlayers.forEach((player) => new AudioPlayer(player));
};

export default initializeAudioPlayers;
