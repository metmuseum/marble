import html from "../../../.storybook/helpers/html";
import { useEffect } from "@storybook/client-api";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import initializeAudioPlayers from "./audio-player.js";
import greekHall1x1 from "../../../.storybook/assets/images/greek-hall/1x1";

import { playIcon, pauseIcon, rewindTenSecondsIcon, forwardTenSecondsIcon, upCarrotIcon } from './helper-icons/helper-icons.js';

export default { title: "Media/Audio Player", decorators: [withKnobs] };

const data = () => {
 return {
		darkMode: boolean("Dark Mode", false),
		track: {
			hasImage: boolean ("Has Image", true),
			audioFileURL:
				text("Audio File URL", "https://cdn.bitdegree.org/learn/I_Cactus_-_05_-_ruby_cactus.mp3?raw=true"),
			coverImage: greekHall1x1,
			subtitle: text("Subtitle", "Praise Songs about Javascript"),
			title: text("Title", "Track 1. Title"),
			transcript: text(
				"Transcript",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpaqui officia deserunt mollit anim id est laborum."
			),
		}
	};
};

const audioPlayerMarkUp = (model, playerMode = "") => {
	const isDark = model.darkMode ? "inverted-colors" : "";

	return html`
		<div style="padding: 40px; background-color: #eee">
			<section class="audio-player js-marble-audio-player ${playerMode} ${isDark}">
				<div class="audio-player__media-section">
					<div class="audio-player__image-section">
						${model.track.hasImage ? html
							`<div class="audio-player__image-wrapper">
								<img
									class="audio-player__cover-image"
									alt="${model.track.coverImage.alt}"
									width="${model.track.coverImage.width}"
									height="${model.track.coverImage.height}"
									src="${model.track.coverImage.srcSet.fallback}"
								/>
							</div>` : ""
						}

					</div>

					<div class="audio-player__body">
						<div class="audio-player__headings">
							<h1 class="audio-player__title">${model.track.title}</h1>
							<h2 class="audio-player__sub-title">${model.track.subtitle}</h2>
						</div>
						<div class="audio-player__controls-wrapper">
							<div class="audio-controls">
								<div class="audio-controls__play-wrapper">
									<button class="js-audio-player__play audio-controls__play">
										<span class="js-play-icon audio-controls__play-icon"> ${playIcon()} </span>
										<span class="js-pause-icon audio-controls__pause-icon"> ${pauseIcon()} </span>
									</button>
								</div>
								<div class="audio-controls__time-controls js-audio-player__scrubbable-area">
									<div class="js-audio-player__scrubbing-start-area audio-controls__scrubber-wrapper">
										<canvas
											width="10000"
											height="6"
											class="js-audio-player__progress-bar audio-player__progress-bar"
										>
										</canvas>
									</div>
									<div class="audio-controls__time-buttons">
										<div class="audio-controls__back-controls">
											<span class="js-audio-player__current-time">0:00</span>
											<button
												class="js-audio-player__seek-back-helper audio-controls__seek-back"
											>
												${rewindTenSecondsIcon()}
											</button>
										</div>
										<div class="audio-controls__forward-controls">
											<button
												class="js-audio-player__seek-forward-helper audio-controls__seek-forward"
											>
												${forwardTenSecondsIcon()}
											</button>
											<span class="js-audio-player__remaining">0:00</span>
										</div>
									</div>
								</div>

								<audio
									class="js-audio-player__audio audio-player__audio-element"
									title="${model.track.title}"
									style="width: 100%; height: 36px;"
									controls
								>
									<source src="${model.track.audioFileURL}" />
									<p>
										Your browser doesn't support HTML5 audio. Here is a
										<a href="${model.track.audioFileURL}"
											>link to download the audio</a
										>
										instead.
									</p>
								</audio>
							</div>
						</div>
					</div>
				</div>
				${model.track.transcript.length > 0 ? html
					`<div
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
							<span class="transcript__toggle-icon"> ${upCarrotIcon()}</span>
							<spacn class="transcript__toggle-text js-transcript__toggle-text"> View Transcript </span>
						</a>
					</div>` : ``
				}
			</section>
		</div>
	`;
};

const FullPlayer = () => {
	const model = data();
	useEffect(initializeAudioPlayers);
	return audioPlayerMarkUp(model);
};

const MiniPlayer = () => {
	const model = data();
	useEffect(initializeAudioPlayers);
	return audioPlayerMarkUp(model, "mini-player");
};

const MicroPlayer = () => {
	const model = data();
	useEffect(initializeAudioPlayers);
	return audioPlayerMarkUp(model, "micro-player");
};

export {
	FullPlayer,
	MiniPlayer,
	MicroPlayer
}
