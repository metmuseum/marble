// this is the main entry point for Marble. :)

// TODO: consider if we want to bundle everything into this object or use a) subpath exports or b) more named exports?
//       examples:
//         a) import jumpLinkBanner from "marble/jump-link-banner"
//         b) import { jumpLinkBanner } from "marble"

import global from "./global/global.mjs";
import jumpLinkBanner from "./components/jumplink-banner/jumplink-banner.js";
import vimeoPlayToggle from "./components/vimeo-player/vimeo-controls.js";
import carousel from "./components/carousel/carousel.js";
import videoSlide from "./components/carousel/slide/video-slide.js";

const marble = {
	global,
	carousel,
	jumpLinkBanner,
	videoSlide,
	vimeoPlayToggle,
};

export default marble;
