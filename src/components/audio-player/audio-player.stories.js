import { html } from ".storybook/helpers";
import { useEffect } from "@storybook/client-api";
import { playIcon, pauseIcon, rewindTenSecondsIcon, forwardTenSecondsIcon, upCaretIcon } from ".storybook/assets/svg";
import coverImageTemplate from "./cover-image-template";
import { initializeAudioPlayers, track, playlist } from "./audio-player-story-helpers";

const argTypes = {
	breathingRoom: {
		name: "Give it some breathing room?"
	},
	darkMode: { name: "Dark Mode" },
	hasImage: { name: "Has Image?" },
	transcriptIsOpen: { name: "Force Transcript Area To Be Open?", },
	playerMode: {
		options: ["Regular", "Mini", "Micro"],
		mapping: {
			Regular: "",
			Mini: "mini-player",
			Micro: "micro-player"
		},
		type: "Select",
		name: "Player Mode"
	},
	playlist: {
		name: "Playlist Tracks",
		options: ["1", "2", "3", "4", "5"],
		defaultValue: [],
		control: {
			type: "check",
		}
	}
};

const args = {
	breathingRoom: false,
	darkMode: false,
	hasImage: true,
	transcriptIsOpen: false,
	track,
};

export default { title: "Media/Audio Player", argTypes };

const wrapInTranscriptDiv = ({ transcriptIsOpen }, markup) => (
	transcriptIsOpen ?
		html`<div class="transcript-is-open">${markup}</div>` :
		markup);

const audioPlayerMarkUp = (args) => wrapInTranscriptDiv(args, html`
	<div ${args.breathingRoom ? "style=\"padding: 40px; background-color: #eee\"" : ""}">
	<section class="audio-player js-marble-audio-player ${args.playerMode} ${args.darkMode ? " inverted-colors" : ""}">
		<div class="audio-player__media-section">
			<div class="audio-player__image-section">
				<div class="audio-player__image-wrapper js-audio-player__image-wrapper">${args.hasImage ? coverImageTemplate(args.track.image) : "" }</div>
			</div>
			<div class="audio-player__body">
				<div class="audio-player__headings">
					<h1 class="audio-player__title js-audio-player__title">${args.track.title}</h1>
					<h2 class="audio-player__subtitle js-audio-player__subtitle">${args.track.description}</h2>
				</div>
				<div class="audio-player__controls-wrapper">
					<div class="audio-controls">
						<div class="audio-controls__play-wrapper">
							<button class="js-audio-player__play audio-controls__play"
								aria-label="Play/Pause Toggle">
								<span class="js-play-icon audio-controls__play-icon"> ${playIcon} </span>
								<span class="js-pause-icon audio-controls__pause-icon"> ${pauseIcon} </span>
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
										${rewindTenSecondsIcon}
										<span class="screen-reader-only">Skip backwards ten seconds.</span>
									</button>
								</div>
								<div class="audio-controls__forward-controls">
									<button
										class="js-audio-player__seek-forward-helper audio-controls__seek-forward"
									>
										${forwardTenSecondsIcon}
										<span class="screen-reader-only">Skip forwards ten seconds.</span>
									</button>
									<span class="js-audio-player__remaining">0:00</span>
								</div>
							</div>
						</div>

						<audio
							class="js-audio-player__audio audio-player__audio-element"
							data-track='${JSON.stringify(args.track)}'
							title="${args.track.title}"
							style="width: 100%; height: 36px;"
							controls
						>
							<source src="${args.track.audio}" />
							<!-- TODO: playlist links, too!! -->
							<p>
								Your browser doesn't support HTML5 audio. Here is a
									<a href="${args.track.audio}"
									>link to download the audio</a
								>
								instead.
							</p>
						</audio>
					</div>
				</div>
			</div>
		</div>

		<div
			class="audio-player__transcript-section audio-player__transcript-section--transcript-${!!args?.track?.transcript?.length} js-audio-player__transcript-section">
			<div class="audio-player__transcript-wrapper js-audio-player__transcript-wrapper">
				<div class="audio-player__transcript js-audio-player__transcript" tabindex=0>
					${args.track.transcript}
				</div>
			</div>
			<a class="audio-player__transcript-toggle js-audio-player__transcript-toggle" href="#">
				<span class="transcript__toggle-icon"> ${upCaretIcon}</span>
				<span class="transcript__toggle-text js-transcript__toggle-text"> View Transcript </span>
			</a>
		</div>

		<ol class="js-audio-player__playlist-container audio-player__playlist">${ args.playlist?.length ? html`
			<h4 class="audio-player__playlist-title">Playlist</h4>
			${args.playlist.map(playlistTrackIndex => {
				const playlistTrack = playlist.tracks[playlistTrackIndex - 1];
				return html`
				<li class="js-audio-player__playlist-track audio-player__playlist-track" data-track='${JSON.stringify(playlistTrack)}' tabindex="0">
					<img
						class="audio-player__playlist-track-thumbnail"
						alt="${playlistTrack.image.alt}"
						src="${playlistTrack.image.w280}"
					/>
					<div class="audio-player__playlist-track-title">${playlistTrack.title}</div>
					<!-- <div> track length goes here if we have it </div> -->
					</li>`;}).join("")}` : ""}</ol> <!-- no whitespace! :empty needs to work to hide it -->

	</section>
	</div>
`);

const Player = (args) => {
	useEffect(initializeAudioPlayers);
	return audioPlayerMarkUp(args);
};

const FullPlayer = (args) => Player(args);
FullPlayer.args = args;

const MultiplePlayers = (args) => {
	useEffect(initializeAudioPlayers);
	return html`
		<div>
			${audioPlayerMarkUp(args)}
			${audioPlayerMarkUp(args)}
		</div>`;
};
MultiplePlayers.args = args;

const FullPlayerWithOpenTranscript = (args) => Player(args);
FullPlayerWithOpenTranscript.args = {
	...args,
	transcriptIsOpen: true
};

const FullPlayerWithPlaylist = (args) => Player(args);
FullPlayerWithPlaylist.args = {
	...args,
	playlist: ["1", "2", "3", "4", "5"]
};

const MiniPlayer = (args) => Player(args);
MiniPlayer.args = {
	...args,
	playerMode: "mini-player"
};

const MicroPlayer = (args) => Player(args);
MicroPlayer.args = {
	...args,
	playerMode: "micro-player"
};

const FullPlayerDarkModeKitchenSink = (args) => Player(args);
FullPlayerDarkModeKitchenSink.args = {
	...args,
	darkMode: true,
	hasImage: true,
	playlist: ["1", "2", "3", "4", "5"],
	transcriptIsOpen: true,
};

export {
	FullPlayer,
	FullPlayerWithOpenTranscript,
	FullPlayerWithPlaylist,
	FullPlayerDarkModeKitchenSink,
	MiniPlayer,
	MicroPlayer,
	MultiplePlayers,
};
