export default (image) => {
	let html = String.raw;
	return image ? html`<img
		class="audio-player__cover-image"
		alt="${image.alt}"
		width="${image.width}"
		height="${image.height}"
		src="${image.w560}"
		srcset=
			${image.w2400} 2400w,
			${image.w1600} 1600w,
			${image.w1200} 1200w,
			${image.w840} 840w,
			${image.w560} 560w,
			${image.w280} 280w"
		sizes="(max-width: 600px 100vw, 200px)"
	/>` : "";
};