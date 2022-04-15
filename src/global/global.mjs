// use .mjs extension to force Node to use ESM sytnax:
// https://stackoverflow.com/a/57492606/3633109

import lazyLoad from "./lazyload/lazyload.js";

function global() {
  // alert("this is the locally linked marble");
	lazyLoad();
}

export default global;
