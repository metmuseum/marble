import html from "../../../.storybook/helpers/html";
import defaultImage from "../../../.storybook/assets/images/full-width-image";
import portraitImage from "../../../.storybook/assets/images/greek-hall/1x1";
import landscapeImage from "../../../.storybook/assets/images/greek-hall/16x9";

export default {
	title: "Image Containers",
};

const sizesTemplate = (srcSet) => {
	const widths = Object.keys(srcSet.sizes);
	return widths
		.map((width) => {
			return `${srcSet.sizes[width]} ${width},`;
		})
		.join("\n");
};

const fullWidth = (image) => {
	// ugh, for some reason default params broke because storybook will call our stories with an empty object as an argument!?
	if (Object.keys(image).length < 1) {
		image = defaultImage;
	}
	// Don't forget alt attribute.
	// Use width= and height= to prevent jank.
	// References: https://css-tricks.com/what-if-we-got-aspect-ratio-sized-images-by-doing-almost-nothing/
	return html`
		<div class="image-container image-container--full-width">
			<img
				class="image-container__image"
				alt="${image.alt}"
				width="${image.width}"
				height="${image.height}"
				src="${image.srcSet.fallback}"
				srcset="${sizesTemplate(image.srcSet)}"
				sizes="100vw"
			/>
		</div>
	`;
};

const fullWidthOrientationResponsive = (images, className = "") => {
	if (Object.keys(images).length < 1) {
		images = { portrait: portraitImage, landscape: landscapeImage };
	}

	const { portrait, landscape } = images;

	return html`
		<div class="image-container image-container--full-width ${className}">
			<img
				class="image-container__image image-container__image--portrait"
				alt="${portrait.alt}"
				width="${portrait.width}"
				height="${portrait.height}"
				src="${portrait.srcSet.fallback}"
				srcset="${sizesTemplate(portrait.srcSet)}"
				sizes="100vw"
			/>
			<img
				class="image-container__image image-container__image--landscape"
				alt="${landscape.alt}"
				width="${landscape.width}"
				height="${landscape.height}"
				src="${landscape.srcSet.fallback}"
				srcset="${sizesTemplate(landscape.srcSet)}"
				sizes="100vw"
			/>
		</div>
	`;
};

const halfWidth = (image) => {
	// note sizes attribute is just 50vw
	if (Object.keys(image).length < 1) {
		image = defaultImage;
	}
	return html`
		<div class="image-container image-container--half-width">
			<img
				class="image-container__image"
				alt="${image.alt}"
				width="${image.width}"
				height="${image.height}"
				src="${image.srcSet.fallback}"
				srcset="${sizesTemplate(image.srcSet)}"
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

const lazyLoaded = (image = defaultImage) => {
	if (Object.keys(image).length < 1) {
		image = defaultImage;
	}
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
				srcset="${sizesTemplate(image.srcSet)}"
				data-sizes="100vw"
			/>
		</div>
	`;
};

export { fullWidth, halfWidth, lazyLoaded, fullWidthOrientationResponsive };
