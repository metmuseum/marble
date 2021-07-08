import html from "../../../.storybook/helpers/html";
import { useEffect } from "@storybook/client-api";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import { playIcon, pauseIcon, rewindTenSecondsIcon, forwardTenSecondsIcon, upCaretIcon } from "../../../.storybook/assets/svg";
import coverImageTemplate from "./cover-image-template";
import { initializeAudioPlayers, track, example } from "./story-helpers";

export default { title: "Media/Audio Player", decorators: [withKnobs] };

const data = ({hasImage=true, numberOfTracks="single", darkMode=false, breathingRoom=false, playerMode=""}) => {
	
	const options = {
		hasImage: boolean("Has Image", hasImage),
		numberOfTracks: select("Single Track or Playlist?", {Single: "single", Playlist: "playlist"}, numberOfTracks),
		isDark: boolean("Dark mode?", darkMode) ? "inverted-colors" : "",
		breathingRoom: boolean("Give it some breathing room?", breathingRoom) ? "padding: 40px; background-color: #eee" : "",
		playerMode: select("Player Mode", {Default: "", "Mini Player": "mini-player", "Micro Player": "micro-player"}, playerMode)
	};

	let playlist = options.numberOfTracks == "playlist" ? { tracks: [
		track({title: "Track 1"}),
		track({
			id: example.id,
			audioFileURL: example.audio,
			title: example.title,
			subtitle: example.description, // TODO: change to description?
			transcript: example.transcript,
			image: example.image
		}),
		track({title: "Track 3", id: 3})
	]} : { tracks: [] };

	return {
		options,
		model: {
			playlist: playlist,
			track: track()
		}
	};
};

const audioPlayerMarkUp = ({model, options}) => html`
	<div style="${options.breathingRoom}">
		<section class="audio-player js-marble-audio-player ${options.playerMode} ${options.isDark}">
			<div class="audio-player__media-section">
				<div class="audio-player__image-section">
					${options.hasImage ? html`<div class="audio-player__image-wrapper js-audio-player__image-wrapper">
							${coverImageTemplate(model.track.image)}
						</div>` : ""}
				</div>
				<div class="audio-player__body">
					<div class="audio-player__headings">
						<h1 class="audio-player__title js-audio-player__title">${model.track.title}</h1>
						<h2 class="audio-player__subtitle js-audio-player__subtitle">${model.track.subtitle}</h2>
					</div>
					<div class="audio-player__controls-wrapper">
						<div class="audio-controls">
							<div class="audio-controls__play-wrapper">
								<button class="js-audio-player__play audio-controls__play">
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
								data-track='${JSON.stringify(model.track)}'
								title="${model.track.title}"
								style="width: 100%; height: 36px;"
								controls
							>
								<source src="${model.track.audioFileURL}" />
								<!-- TODO: playlist links, too!! -->
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
			<ol class="js-audio-player__playlist-container audio-player__playlist">${model.playlist.tracks.map(track => { return html`
					<li class="js-audio-player__playlist-track audio-player__playlist-track" data-track='${JSON.stringify(track)}'>
						<div>
							<img 
								class="audio-player__playlist-track-thumbnail"
								alt="${track.image.alt}" 
								src="${track.image.small}"/>
						</div>
						<div class="audio-player__playlist-track-title">${track.title}</div>
						<div>duration?</div>
					</li>
				`;}).join("")}</ol> <!-- no whitespace! :empty needs to work to hide it -->
			<!-- TODO: keep this in the DOM as a target, but hide it if no transcript --> 
			${model.track.transcript.length > 0 ? html `<div
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
						<span class="transcript__toggle-icon"> ${upCaretIcon}</span>
						<span class="transcript__toggle-text js-transcript__toggle-text"> View Transcript </span>
					</a>
				</div>` : ""}
		</section>
	</div>
`;

const FullPlayer = () => {
	useEffect(initializeAudioPlayers);
	return audioPlayerMarkUp(data({}));
};

const FullPlayerWithPlaylist = () => {
	useEffect(initializeAudioPlayers);
	return audioPlayerMarkUp(data({numberOfTracks: "playlist"}));
};


const MiniPlayer = () => {
	useEffect(initializeAudioPlayers);
	return audioPlayerMarkUp(data({playerMode: "mini-player"}));
};

const MicroPlayer = () => {
	useEffect(initializeAudioPlayers);
	return audioPlayerMarkUp(data({playerMode: "micro-player"}));
};

export {
	FullPlayer,
	FullPlayerWithPlaylist,
	MiniPlayer,
	MicroPlayer
};
