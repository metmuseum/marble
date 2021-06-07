import html from "../../../.storybook/helpers/html";
import { useEffect } from "@storybook/client-api";
import initializeAudioPlayers from "./audio-player.js";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import greekHall1x1 from "../../../.storybook/assets/images/greek-hall/1x1";


export default { title: "Media/Audio Player", decorators: [withKnobs] };

const audioPlayerMarkUp = (model) => {
	const isDark = model.darkMode ? "inverted-colors" : "";
	const isMini = model.miniPlayer ? "mini-player" : "";
	const playerModes = `${isDark} ${isMini}`;

	return html`
		<div style="padding: 40px; background-color: #eee">
			<section class="audio-player js-marble-audio-player ${playerModes}">
				<div class="audio-player__media-section">
					<div class="audio-player__image-section">
						<div class="audio-player__image-wrapper">
							<img
								class="audio-player__cover-image"
								alt="${model.track.coverImage.alt}"
								width="${model.track.coverImage.width}"
								height="${model.track.coverImage.height}"
								src="${model.track.coverImage.srcSet.fallback}"
							/>
						</div>
					</div>

					<div class="audio-player__body">
						<div class="audio-player__headings">
							<h1 class="audio-player__title">${model.track.title}</h1>
							<h2 class="audio-player__sub-title">${model.track.subtitle}</h2>
						</div>
						<div class="audio-player__controlls-wrapper">
							<div class="audio-controls">
								<canvas width="600" height="6" class="audio-player__progress-bar"></canvas>
								<audio
									style="width: 100%; height: 36px;"
									controls
									src="${model.track.audioFileURL}"
								></audio>
							</div>
						</div>
					</div>
				</div>

				<div
					class="audio-player__transcript-section js-audio-player__transcript-section"
				>
					<div
						class="audio-player__transcript-wrapper js-audio-player__transcript-wrapper"
					>
						<div class="audio-player__transcript">
							<p>${model.track.transcript}</p>
						</div>
					</div>
					<a
						href="#"
						class="audio-player__transcript-toggle js-audio-player__transcript-toggle"
					>
						<span class="transcript__toggle-icon"> &#9660;</span>
						View Transcript
					</a>
				</div>
			</section>
		</div>
	`;
};

export const AudioPlayer = () => {

	const data = {
		darkMode: boolean("Dark Mode", false),
		miniPlayer: boolean("Mini Player", false),
		track: {
			audioFileURL:
				text("Audio File URL", "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"),
			coverImage: greekHall1x1,
			subtitle: text("Subtitle", "Praise Songs about Javascript"),
			title: text("Title", "Track 1. Title"),
			transcript: text(
				"Transcript",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpaqui officia deserunt mollit anim id est laborum."
			),
		},
	};

	useEffect(initializeAudioPlayers);
	return audioPlayerMarkUp(data);
};