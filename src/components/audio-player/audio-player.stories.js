import html from "../../../.storybook/helpers/html";
import { useEffect } from "@storybook/client-api";
import { withKnobs, text, boolean, radios } from "@storybook/addon-knobs";
export default { title: "Media/Audio Player" };

const audioPlayerMarkUp = (model) => {
	const isDark = model.darkMode ? "inverted-colors" : "";
	const isMini = model.miniPlayer ? "mini-player" : "";
	const playerModes = `${isDark} ${isMini}`;

	return html`
		<div style="padding: 40px; background-color: #eee">
			<section class="audio-player ${playerModes}">

				<div class="audio-player__media-section">
					<div class="audio-player__image-section">
						<div class="audio-player__image-wrapper">
						</div>
					</div>

					<div class="audio-player__body">
						<div class="audio-player__headings">
							<h1 class="audio-player__title">${model.title}</h1>
							<h2 class="audio-player__sub-title">${model.subtitle}</h2>
						</div>
						<div class="audio-player__controlls-wrapper">
							<div class="audio-controls">
								<audio
									style="width: 100%; height: 36px;"
									controls
									src="${model.audioFile}">
								</audio>
							</div>
						</div>
					</div>

				</div>

				<div class="audio-player__transcript-section">
					<a href="#" class="audio-player__transcript-toggle"> &#9660; View Transcript </a>
				</div>
			</section>
		</div>
	`;
};

export const AudioPlayer = () => {

	const data = {
		darkMode: boolean("Dark Mode", false),
		miniPlayer: boolean("Mini Player", false),
		title: text("Title", "Track 1. Title"),
		subtitle: text("Subtitle","Praise Songs about Javascript"),
		audioFile: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
	};

	return audioPlayerMarkUp(data);
};
