import html from "../../../.storybook/helpers/html";
import { useEffect } from "@storybook/client-api";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import AudioPlayer from "./audio-player.js";
import greekHall1x1 from "../../../.storybook/assets/images/greek-hall/1x1";
import icons from "../../../.storybook/assets/svg";

export default { title: "Media/Audio Player", decorators: [withKnobs] };

const { playIcon, pauseIcon, rewindTenSecondsIcon, forwardTenSecondsIcon, upCaretIcon } = icons;

const exampleResponse = [{"id":"C0276F7DFD034191B37BB04E9048BB03","title":"Jumping Jehoshaphat","description":"TIL Jehoshaphat is in the Chrome spell checker. 123456","stopNumber":"6611","rank":"1","image":{"alt":"","height":674,"width":1200,"xlarge":"/-/media/cauliflower_roasted.jpg?h=674&amp;la=en&amp;mw=2400&amp;w=1200&amp;hash=ACDB9082199115342909831E388C11F7","large":"/-/media/cauliflower_roasted.jpg?h=674&amp;la=en&amp;mw=1600&amp;w=1200&amp;hash=3E27038FEFC8D2989B81B4B65F5C4E84","medium":"/-/media/cauliflower_roasted.jpg?h=674&amp;la=en&amp;mw=1200&amp;w=1200&amp;hash=5D285A06ED3282014D5B9C3178AAB3D1","small":"/-/media/cauliflower_roasted.jpg?h=449&amp;la=en&amp;mw=800&amp;w=800&amp;hash=8E7A57681A0A90DAE3349D8D458E6885"},"audio":"/-/media/audio/ipop-primer/doty_primercast.mp3?la=en","transcript":"[00:01:17] Až pomašírujem tøi sta mil za Prahu,\r\n[00:01:24] tam spatøím, má milá, tureckou armádu."}];
const example = exampleResponse[0];

const initializeAudioPlayers = () => {
	const audioPlayers = document.querySelectorAll(".js-marble-audio-player");
	audioPlayers.forEach((player) => new AudioPlayer({wrapperEl: player}));	
};

const defaultTrack = () => {
	return {
		id: 1,
		hasImage: boolean ("Has Image", true),
		audioFileURL:	text("Audio File URL", "https://images.metmuseum.org/CRDImages/ad/audio/5TH-3865-ENG-134-1.mp3"),
		coverImage: greekHall1x1,
		subtitle: text("Subtitle", "Praise Songs about Javascript"),
		title: text("Title", "Track 1. Title"),
		transcript: text(
			"Transcript",
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpaqui officia deserunt mollit anim id est laborum."
		)
	};
};

const track = (overrides={}) => {
	return {
		...defaultTrack(),
		...overrides,
	};
};

const playlist = (tracks=[]) => {
	return {
		title: text("Playlist Title", "Playlist"),
		tracks: tracks,
	};
};

const data = () => {
	
	let options = {
		id: example.id,
		audioFileUrl: "https://www.metmuseum.org" + example.audio,
		title: example.title,
		subtitle: example.description,
		transcript: example.transcript
	};

	let currentPlaylist = playlist([
		track({title: "Track 1"}),
		track(options),
		track({title: "Track 3", id: 3})]);

	return {
		darkMode: boolean("Dark Mode", false),
		playlist: currentPlaylist,
		track: track()
	};
};

const audioPlayerMarkUp = (model, playerMode = "") => {
	console.dir(example);
	const isDark = model.darkMode ? "inverted-colors" : "";
	const breathingRoom = boolean("Give it some breathing room?", false) ? "padding: 40px; background-color: #eee" : "";

	return html`
		<div style="${breathingRoom}">
			<section class="audio-player js-marble-audio-player ${playerMode} ${isDark}">
				<div class="audio-player__media-section">
					<div class="audio-player__image-section">
						${model.track.hasImage ? html`<div class="audio-player__image-wrapper">
								<img
									class="audio-player__cover-image"
									alt="${model.track.coverImage.alt}"
									width="${model.track.coverImage.width}"
									height="${model.track.coverImage.height}"
									src="${model.track.coverImage.srcSet.fallback}"
								/>
							</div>` : ""}

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
				<ol class="js-audio-player__playlist-container">
					${model.playlist.tracks.map(track => { return html`
						<li class="js-audio-player__playlist-track audio-player__playlist-track" data-track=${JSON.stringify(track)}>
							${track.title}
						</li>
					`;}).join("")}
				</ol>
				</div>
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
};
