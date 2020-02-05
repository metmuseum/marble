import lazyLoad from "./lazyload/lazyload.js";

function global() {
	lazyLoad();
}

exports.global = global;
