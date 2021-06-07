export default (seconds) =>
	new Date(seconds * 1000).toISOString().substr(11, 8).replace(/^00:0/i, "");
