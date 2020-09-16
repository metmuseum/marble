// this is the main entry point for Marble. :)

// TODO: consider if we want to bundle everything into this object or use a) subpath exports or b) more named exports?
//       examples:
//         a) import jumpLinkBanner from "marble/jump-link-banner"
//         b) import { jumpLinkBanner } from "marble"
// TODO: consider bundling at all? we'd get better tree-shaking if we used  "module: './src/index.mjs'" but all clients then need webpack.

import "./marble.scss";
import global from "./global/global.mjs";
import jumpLinkBanner from "./components/jumplink-banner/jumplink-banner";
import vimeoPlayToggle from "./components/vimeo-player/vimeo-controls";
import carousel from "./components/carousel/carousel";
import videoSlide from "./components/carousel/slide/video-slide";

const marble = { global, jumpLinkBanner, vimeoPlayToggle, carousel, videoSlide }

export default marble;
