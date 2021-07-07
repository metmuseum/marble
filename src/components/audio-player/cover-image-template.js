export default (image) => {
	return `<img
		class="audio-player__cover-image"
		alt="${image.alt}"
		width="${image.width}"
		height="${image.height}"
		src="${image.srcSet.fallback}"
		srcSet=""
	/>`;
};