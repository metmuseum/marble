export default (image) => {
	let html = String.raw;
	return html`<img
		class="audio-player__cover-image"
		alt="${image.alt}"
		width="${image.width}"
		height="${image.height}"
		src="${image.small}"
		srcset=
			${image.xlarge} 2400w,
			${image.large} 1600w,
			${image.medium} 1200w,
			${image.small} 800w"
		sizes="(max-width: 600px 100vw, 200px)"
	/>`;
};