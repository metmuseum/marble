// this is the main entry point for Marble. :)

// TODO: consider if we want to bundle everything into this object or use a) subpath exports or b) more named exports?
//       examples:
//         a) import jumpLinkBanner from "marble/jump-link-banner"
//         b) import { jumpLinkBanner } from "marble"

import global from "./global/global.mjs";

import AudioPlayer from "./components/audio-player/audio-player.js";
import carousel from "./components/carousel/carousel.js";
import jumpLinkBanner from "./components/jumplink-banner/jumplink-banner.js";
import lesMusettes from "./components/musette/musette.js";
import videoSlide from "./components/carousel/slide/video-slide.js";
import vimeoPlayToggle from "./components/vimeo-player/vimeo-controls.js";


const marble = {
	global,
	AudioPlayer,
	carousel,
	jumpLinkBanner,
	lesMusettes,
	videoSlide,
	vimeoPlayToggle,
};

export default marble;
