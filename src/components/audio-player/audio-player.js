import scssExports from "../../global/exports.scss";
import timeFormatter from "./time-formatter.js";
import coverImageTemplate from "./cover-image-template";

const defaultOptions = () => ({
	darkMode: false,
	seekHelperDuration: 10,
});

class AudioPlayer {
	constructor({wrapperEl, options={}}) {
		this.wrapperEl								= wrapperEl;
		this.audioEl									=	wrapperEl.querySelector(".js-audio-player__audio");
		this.coverImageWrapperEl     	= wrapperEl.querySelector(".js-audio-player__image-wrapper");
		this.progressBarCanvasEl 			= wrapperEl.querySelector(".js-audio-player__progress-bar");
		this.progressBarCanvas				= this.progressBarCanvasEl.getContext("2d");
		this.playButtonEl 						= wrapperEl.querySelector(".js-audio-player__play");
		this.playlistTracks 					= wrapperEl.querySelectorAll(".js-audio-player__playlist-track");
		this.currentTimeEl 						= wrapperEl.querySelector(".js-audio-player__current-time");
		this.timeRemainingEl 					= wrapperEl.querySelector(".js-audio-player__remaining");
		this.seekBackHelperEl 				= wrapperEl.querySelector(".js-audio-player__seek-back-helper");
		this.seekForwardHelperEl 			= wrapperEl.querySelector(".js-audio-player__seek-forward-helper");
		this.scrubStartAreaEl 				= wrapperEl.querySelector(".js-audio-player__scrubbing-start-area");
		this.scrubbableAreaEl 				= wrapperEl.querySelector(".js-audio-player__scrubbable-area");
		this.subtitleEl 							= wrapperEl.querySelector(".js-audio-player__subtitle");
		this.titleEl									= wrapperEl.querySelector(".js-audio-player__title");
		this.transcriptEl							= wrapperEl.querySelector(".js-audio-player__transcript");
		this.transcriptSection 				= wrapperEl.querySelector(".js-audio-player__transcript-section");
		this.transcriptToggle					= this.transcriptSection?.querySelector(".js-audio-player__transcript-toggle");
		this.transcriptToggleText 		= this.transcriptSection?.querySelector(".js-transcript__toggle-text");
		this.transcriptWrapper 				= this.transcriptSection?.querySelector(".js-audio-player__transcript-wrapper");
		this.quoteExpanderDefaultText	= this?.transcriptToggleText?.innerHTML;

		// Options
		this.options = {...defaultOptions, ...options};
		this.isDarkMode = this.options.darkMode || this.wrapperEl.classList.contains("inverted-colors");
		this.seekHelperDuration = this.options.seekHelperDuration;

		// State
		this.isScrubbing = false;
		console.dir(this.audioEl.dataset.track);
		this.currentTrack = JSON.parse(this.audioEl.dataset.track);

		// bind listeners to this object and save the returned function reference, so they can be added/removed in the right scope
		["_handleTimeChange",
			"beginScrubbing",
			"endScrubbing",
			"handleTrackChange",
			"handleEnd",
			"handleTimeChange",
			"handleTranscriptToggle",
			"hasTranscript",
			"quickSeekBack",
			"quickSeekForward",
			"scrub",
			"setMetaData",
			"setTranscript",
			"togglePlaying"].forEach((listener) => {
			this[listener] = this[listener].bind(this);
		});

		this.applyListeners();
	}

	applyListeners() {
		// Initialize 💁‍♂️
		this.audioEl.addEventListener("loadedmetadata", this.setMetaData);

		// Playback ⏯
		this.playButtonEl.addEventListener("touchstart", this.togglePlaying, { passive: false });
		this.playButtonEl.addEventListener("click", this.togglePlaying);
		this.audioEl.addEventListener("timeupdate", this.handleTimeChange);
		this.audioEl.addEventListener("ended", this.handleEnd);

		//For when play/pause is initiated from elsewhere (phone lock screen, task bar, etc...)
		this.audioEl.addEventListener("play", () => this.handlePlay());
		this.audioEl.addEventListener("pause", () => this.handlePause());

		// Playlist 💿
		this.playlistTracks.forEach(trackEl => {
			trackEl.addEventListener("click", this.handleTrackChange);
		});

		this.playlistTracks[0]?.classList.add("is-active-track");

		// Quickseek 🔎
		this.seekBackHelperEl.addEventListener("click", this.quickSeekBack);
		this.seekForwardHelperEl.addEventListener("click", this.quickSeekForward);

		// Scrubbing 🧽
		this.scrubStartAreaEl.addEventListener("touchstart", this.beginScrubbing, { passive: false });
		this.scrubStartAreaEl.addEventListener("mousedown", this.beginScrubbing);

		// Transcript 📜
		this.transcriptToggle?.addEventListener("click", this.handleTranscriptToggle);
	}

	handleTrackChange(e) {
		const newTrackEl = e.currentTarget;

		//If already active track, ignore.
		if (newTrackEl.classList.contains("is-active-track")) {
			return;
		} else {
			this.wrapperEl.querySelector(".is-active-track").classList.remove("is-active-track");
		}

		// TODO: analytics
		newTrackEl.classList.add("is-active-track");

		let newTrack = JSON.parse(newTrackEl.dataset.track);
		console.dir(newTrack);
		this.setTrack(newTrack);
		this.setTranscript();
		this.audioEl.play();
	}

	setTrack(track) {
		this.currentTrack = track;
		this.audioEl.dataset.track = track;
		this.audioEl.querySelector("source").src = track.audioFileURL;
		this.titleEl.innerHTML = track.title;
		this.subtitleEl.innerHTML = track.subtitle;
		this.coverImageWrapperEl.innerHTML = coverImageTemplate(track.image);
		this.audioEl.load(); // load the new track, this will fire metadataloaded, btw
	}

	hasTranscript() {
		return !!this.currentTrack?.transcript?.length;
	}

	setTranscript() {
		this.transcriptSection.classList.remove(`audio-player__transcript-section--transcript-${!this.hasTranscript()}`);
		this.transcriptSection.classList.add(`audio-player__transcript-section--transcript-${this.hasTranscript()}`);
		this.transcriptEl.innerHTML = this.hasTranscript() ? this.currentTrack.transcript : "";
	}

	handleTimeChange() {
		requestAnimationFrame(this._handleTimeChange);
	}

	_handleTimeChange() {
		const duration = this.audioEl.duration || 0;
		const elapsed = this.audioEl.currentTime || 0;
		this.setDisplayTime(elapsed, duration);
		this.drawProgress(elapsed, duration);
	}

	handleEnd() {
		this.handleTimeChange();
		this.audioEl.pause();
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
		if (!("mediaSession" in navigator)) {
			return false;
		}
		let artwork = [];
		let src = this.currentTrack?.image?.small;

		if (src) {
			artwork.push({src});
		}

		navigator.mediaSession.metadata = new MediaMetadata({
			title: this.currentTrack.title,
			artist: this.currentTrack.description,
			artwork
		});
	}

	togglePlaying(e) {
		e.preventDefault();
		this.audioEl.paused ? this.audioEl.play() : this.audioEl.pause();
	}

	handlePlay() {
		this.wrapperEl.classList.add("is-playing");
	}

	handlePause() {
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

export default AudioPlayer;
