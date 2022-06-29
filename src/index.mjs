import global from "./global/global.mjs";
import AudioPlayer from "./components/audio-player/audio-player.js";
import carousel from "./components/carousel/carousel.js";
import initializeAlert from "./components/alert/index.js";
import jumpLinkBanner from "./components/jumplink-banner/jumplink-banner.js";
import Musette from "./components/musette/musette.js";
import videoSlide from "./components/carousel/slide/video-slide.js";
import vimeoPlayToggle from "./components/vimeo-player/vimeo-controls.js";


const marble = {
	global,
	AudioPlayer,
	carousel,
	initializeAlert,
	jumpLinkBanner,
	Musette,
	videoSlide,
	vimeoPlayToggle,
};

export default marble;

export {
	global,
	AudioPlayer,
	carousel,
	initializeAlert,
	jumpLinkBanner,
	Musette,
	videoSlide,
	vimeoPlayToggle,
};
