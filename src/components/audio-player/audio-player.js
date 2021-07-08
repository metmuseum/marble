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
		this.transcriptSection 				= wrapperEl.querySelector(".js-audio-player__transcript-section");
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
		this.transcriptToggle					= this.transcriptSection?.querySelector(".js-audio-player__transcript-toggle");
		this.transcriptToggleText 		= this.transcriptSection?.querySelector(".js-transcript__toggle-text");
		this.transcriptWrapper 				= this.transcriptSection?.querySelector(".js-audio-player__transcript-wrapper");
		this.quoteExpanderDefaultText = this.transcriptToggleText?.innerHTML;

		// Options
		this.options = {...defaultOptions, ...options};
		this.isDarkMode = this.options.darkMode || this.wrapperEl.classList.contains("inverted-colors");
		this.seekHelperDuration = this.options.seekHelperDuration;

		// State
		this.isScrubbing = false;
		this.currentTrack = JSON.parse(this.audioEl.dataset.track);

		// bind listeners to this object and save the returned function reference, so they can be added/removed in the right scope
		["_handleTimeChange",
			"beginScrubbing",
			"endScrubbing",
			"handleTrackChange",
			"handleEnd",
			"handleTimeChange",
			"handleTranscriptToggle",
			"quickSeekBack",
			"quickSeekForward",
			"scrub",
			"setMetaData",
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
		this.audioEl.addEventListener("timeupdate", () => { console.log("timeupdate fired"); });
		this.audioEl.addEventListener("ended", this.handleEnd);

		// Playlist 💿
		this.playlistTracks.forEach(trackEl => {
			trackEl.addEventListener("click", this.handleTrackChange);
		});

		// Quickseek 🔎
		this.seekBackHelperEl.addEventListener("click", this.quickSeekBack);
		this.seekForwardHelperEl.addEventListener("click", this.quickSeekForward);
		
		// Scrubbing 🧽
		this.scrubStartAreaEl.addEventListener("touchstart", this.beginScrubbing, { passive: false });
		this.scrubStartAreaEl.addEventListener("mousedown", this.beginScrubbing);
		
		// Transcript 📜
		// TODO: switch this to always there, just hidden
		if (this.transcriptSection) {
			if (this.transcriptToggle && this.transcriptWrapper) {
				this.transcriptToggle?.addEventListener("click", this.handleTranscriptToggle);
			}
		}
	}

	handleTrackChange(e) {
		console.log("running track change");
		// TODO: nothing/skip if same track.
		// TODO: analytics
		let newTrack = JSON.parse(e.target.dataset.track);
		console.dir(newTrack);
		
		
		this.setTrack(newTrack);
		this.setPlay();
	}

	setTrack(track) {
		this.currentTrack = track;
		this.audioEl.dataset.track = track;
		this.audioEl.querySelector("source").src = track.audioFileURL;
		this.titleEl.innerHTML = track.title;
		this.subtitleEl.innerHTML = track.subtitle;
		this.coverImageWrapperEl.innerHTML = coverImageTemplate(track.image);
		this.audioEl.load(); // load the new track, this will fire metadataloaded, btw
		// update the transcript container
	}


	handleTimeChange() {
		requestAnimationFrame(this._handleTimeChange);
	}

	_handleTimeChange() {
		console.log("currentSrc is: " + this.audioEl.currentSrc);
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
		console.log("setMetadData fired");
		if (!("mediaSession" in navigator)) {
			return false;
		}
		console.log("and setMetaData actually running");

		// TODO: use this.currentTrack data instead
		this.metaImage = this.wrapperEl
			.querySelector(".audio-player__cover-image")
			?.src;

		navigator.mediaSession.metadata = new MediaMetadata({
			title: this.currentTrack.title,
			artist: this.wrapperEl.querySelector(".audio-player__subtitle").innerHTML,
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

export default AudioPlayer;
