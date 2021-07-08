import { text } from "@storybook/addon-knobs";
import AudioPlayer from "./audio-player.js";
import greekHall1x1 from "../../../.storybook/assets/images/greek-hall/1x1";

const exampleResponse = [{
	id: "C0276F7DFD034191B37BB04E9048BB03",
	title: "Jumping Jehoshaphat",
	description: "TIL Jehoshaphat is in the Chrome spell checker. 123456",
	stopNumber: "6611",
	rank: "1",
	image: {
		alt: "",
		height: 674,
		width: 1200,
		xlarge: "https://www.metmuseum.org/-/media/cauliflower_roasted.jpg?h=674&amp;la=en&amp;mw=2400&amp;w=1200&amp;hash=ACDB9082199115342909831E388C11F7",
		large: "https://www.metmuseum.org/-/media/cauliflower_roasted.jpg?h=674&amp;la=en&amp;mw=1600&amp;w=1200&amp;hash=3E27038FEFC8D2989B81B4B65F5C4E84",
		medium: "https://www.metmuseum.org/-/media/cauliflower_roasted.jpg?h=674&amp;la=en&amp;mw=1200&amp;w=1200&amp;hash=5D285A06ED3282014D5B9C3178AAB3D1",
		small: "https://www.metmuseum.org/-/media/cauliflower_roasted.jpg?h=449&amp;la=en&amp;mw=800&amp;w=800&amp;hash=8E7A57681A0A90DAE3349D8D458E6885"
	},
	audio: "https://www.metmuseum.org/-/media/audio/ipop-primer/doty_primercast.mp3?la=en",
	transcript: "[00:01:17] Až pomašírujem tøi sta mil za Prahu,\r\n" +
    "[00:01:24] tam spatøím, má milá, tureckou armádu."
}];

const example = exampleResponse[0];

const initializeAudioPlayers = () => {
	const audioPlayers = document.querySelectorAll(".js-marble-audio-player");
	audioPlayers.forEach((player) => new AudioPlayer({wrapperEl: player}));	
};

const defaultTrack = () => {
	return {
		id: 1,
		audioFileURL:	text("Audio File URL", "https://images.metmuseum.org/CRDImages/ad/audio/5TH-3865-ENG-134-1.mp3"),
		image: { ...greekHall1x1,
			xlarge: greekHall1x1.srcSet.sizes["2440w"],
			large: greekHall1x1.srcSet.sizes["1920w"],
			medium: greekHall1x1.srcSet.sizes["1240w"],
			small: greekHall1x1.srcSet.sizes["1240w"],
		},
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

export { initializeAudioPlayers, track, example };