import global from "./global/global.mjs";
import AudioPlayer from "./components/audio-player/audio-player.js";
import carousel from "./components/carousel/carousel.js";
import browseBy from "./components/browse-by/browse-by.js";
import viewMore from "./components/view-more/view-more.js";
import initializeAlert from "./components/alert/index.js";
import jumpLinkBanner from "./components/jumplink-banner/jumplink-banner.js";
import Musette from "./components/musette/musette.js";
import videoSlide from "./components/carousel/slide/video-slide.js";
import vimeoPlayToggle from "./components/vimeo-player/vimeo-controls.js";
import Flickity from "flickity-imagesloaded"; // import Marble's resolved version of Flickity to pass to Rodan for David


const marble = {
	global,
	AudioPlayer,
	carousel,
	browseBy,
	viewMore,
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
	browseBy,
	viewMore,
	initializeAlert,
	jumpLinkBanner,
	Musette,
	videoSlide,
	vimeoPlayToggle,
	Flickity
};
