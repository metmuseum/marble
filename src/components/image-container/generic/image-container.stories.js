import { html, srcSet } from ".storybook/helpers";
import defaultImage from ".storybook/assets/images/full-width-image";

export default {
	title: "Image Containers/Generic",
	includeStories: ["fullWidth", "halfWidth", "lazyLoaded"]
};


const fullWidth = () => {
	// Don't forget alt attribute.
	// Use width= and height= to prevent jank.
	// References: https://css-tricks.com/what-if-we-got-aspect-ratio-sized-images-by-doing-almost-nothing/
	let image = defaultImage;
	return html`
		<div class="image-container image-container--full-width">
			<img
				class="image-container__image"
				alt="${image.alt}"
				width="${image.width}"
				height="${image.height}"
				src="${image.srcSet.fallback}"
				srcset="${srcSet(image.srcSet)}"
				sizes="100vw"
			/>
		</div>
	`;
};

const halfWidth = () => {
	// note sizes attribute is just 50vw
	let image = defaultImage;
	return html`
		<div class="image-container image-container--half-width">
			<img
				class="image-container__image"
				alt="${image.alt}"
				width="${image.width}"
				height="${image.height}"
				src="${image.srcSet.fallback}"
				srcset="${srcSet(image.srcSet)}"
				sizes="50vw"
			/>
		</div>
	`;
};

halfWidth.story = {
	parameters: {
		// disable because Chrome tests don't have deterministic 50vw (600x401px vs 600x402px fails)
		chromatic: { disable: true },
	},
};

const lazyLoaded = () => {
	let image = defaultImage;

	return html`
		<div style="margin-bottom: 200vh;">
			<h2 style="margin: 5% 25%;">The image below should lazy load.</h2>
		</div>
		<div class="image-container image-container--full-width">
			<img
				class="lazy image-container__image"
				alt="${image.alt}"
				width="${image.width}"
				height="${image.height}"
				data-src="${image.srcSet.fallback}"
				data-srcset="${srcSet(image.srcSet)}"
				data-sizes="100vw"
			/>
		</div>
	`;
};

export { fullWidth, halfWidth, lazyLoaded };
