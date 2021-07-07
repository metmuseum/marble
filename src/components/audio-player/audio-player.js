import scssExports from "../../global/exports.scss";
import timeFormatter from "./time-formatter.js";

// TODO: 
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
// HTMLMediaElement.seekable Read only
// Returns a TimeRanges object that contains the time ranges that the user is able to seek to, if any.



// audio: "/-/media/audio/ipop-primer/doty_primercast.mp3?la=en"
// description: "TIL Jehoshaphat is in the Chrome spell checker. 123456"
// id: "C0276F7DFD034191B37BB04E9048BB03"
/// image: Object { height: 674, width: 1200, xlarge: "/-/media/cauliflower_roasted.jpg?h=674&amp;la=en&amp;mw=2400&amp;w=1200&amp;hash=ACDB9082199115342909831E388C11F7", … }
/// rank: "1"
/// stopNumber: "6611"
/// title: "Jumping Jehoshaphat"
/// transcript: "[00:01:17] Až pomašírujem tøi sta mil za Prahu,\r\n[00:01:24] tam spatøím, má milá, tureckou armádu."

const defaultOptions = () => ({
	darkMode: false,
	seekHelperDuration: 10,
});

class AudioPlayer {
	constructor({wrapperEl, playlist={}, track={},  options={}}) {
		this.wrapperEl = wrapperEl;
		this.playlist = playlist;
		this.currentTrack = track;
		this.options = {...defaultOptions, ...options};

		this.audioEl = this.wrapperEl.querySelector(".js-audio-player__audio");
		this.progressBarCanvasEl = this.wrapperEl.querySelector(".js-audio-player__progress-bar");
		this.progressBarCanvas = this.progressBarCanvasEl.getContext("2d");
		this.transcriptSection = wrapperEl.querySelector(".js-audio-player__transcript-section");
		this.playButtonEl = this.wrapperEl.querySelector(".js-audio-player__play");
		this.playlistTracks = this.wrapperEl.querySelectorAll(".js-audio-player__playlist-track");
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

		this.isDarkMode = this.options.darkMode || this.wrapperEl.classList.contains("inverted-colors");
		this.seekHelperDuration = 10;
		this.isScrubbing = false;

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

		this.initializeListeners();
		this.setMetaData();
	}

	initializeListeners() {
		// Initialize
		this.audioEl.addEventListener("loadedmetadata", this.handleTimeChange);

		// Playback
		this.playButtonEl.addEventListener("touchstart", this.togglePlaying, { passive: false });
		this.playButtonEl.addEventListener("click", this.togglePlaying);
		this.audioEl.addEventListener("timeupdate", this.handleTimeChange);
		this.audioEl.addEventListener("ended", this.handleEnd);

		// Playlist
		this.playlistTracks.forEach(trackEl => {
			trackEl.addEventListener("click", this.handleTrackChange);
		});

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

	handleTrackChange(e) {
		// alert("Running!");
		console.log("running track change");
		let newTrack = e.target.dataset.track;
		console.log(newTrack);
		// stop the old track
		this.setPause();
		// clean up?
		// set the new track 
		this.setTrack(newTrack);
		
		
		// play it
		this.setPlay();
	}

	setTrack(track) {
		this.currentTrack = track;
		this.audioEl.querySelector("source").src = track.audioFileUrl;
		this.audioEl.load(); // load the new track
		// set the artwork, title, etc.
		this.setMetaData();
	}


	handleTimeChange() {
		// requestAnimationFrame(this._handleTimeChange);
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
		if (!("mediaSession" in navigator)) {
			return false;
		}

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

export default AudioPlayer;
