
const audioPlayer = () => {
	const audioPlayers = document.querySelectorAll(".js-marble-audio-player");

	audioPlayers.forEach((audioPlayer) => {
		const transcriptSection = audioPlayer.querySelector(".js-audio-player__transcript-section");
		const transcriptToggle = transcriptSection.querySelector(".js-audio-player__transcript-toggle");
		const transcriptWrapper = transcriptSection.querySelector(".js-audio-player__transcript-wrapper");

		const handleTranscriptToggle = (e) => {
			e.preventDefault();
			transcriptSection.classList.toggle("transcript-is-open");
		};

		if (transcriptToggle && transcriptWrapper) {
			transcriptToggle.addEventListener("click", handleTranscriptToggle);
		}
	});
};

export default audioPlayer
