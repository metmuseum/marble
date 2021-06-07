class AudioPlayer {
	constructor(audioPlayerEl) {
		this.audioPlayerEl = audioPlayerEl;
		this.transcriptSection = audioPlayerEl.querySelector(
			".js-audio-player__transcript-section"
		);
		this.transcriptToggle = this.transcriptSection.querySelector(
			".js-audio-player__transcript-toggle"
		);
		this.transcriptWrapper = this.transcriptSection.querySelector(
			".js-audio-player__transcript-wrapper"
		);

		this.initializeListeners();
	}

	initializeListeners = () => {
		if (this.transcriptToggle && this.transcriptWrapper) {
			this.transcriptToggle.addEventListener("click", this.handleTranscriptToggle);
		}
	}

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
