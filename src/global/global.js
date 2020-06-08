import lazyload from "./lazyload/lazyload.js";

function global() {
	lazyload();
	console.debug("Marble Global Javascript Initialized");
}

export default global;
