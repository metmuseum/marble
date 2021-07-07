export default (seconds) => {
	// console.log("seconds", seconds);
	return new Date(seconds * 1000).toISOString().substr(11, 8).replace(/^00:0/i, "");
};
