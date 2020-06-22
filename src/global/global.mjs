// use .mjs extension to force Node to use ESM sytnax:
// https://stackoverflow.com/a/57492606/3633109

import lazyLoad from "./lazyload/lazyload.js";

function global() {
	lazyLoad();
}

export default global;
