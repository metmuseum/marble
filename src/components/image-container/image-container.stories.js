import html from "../../../.storybook/helpers/html";
import { withA11y } from "@storybook/addon-a11y";
import "./image-container.scss";

import image768 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow.jpg";
import image960 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-960.jpg";
import image1440 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-1440.jpg";
import image2160 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-2160.jpg";
import image3240 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-3240.jpg";
import image4860 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-4860.jpg";
import image5760 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-5760.jpg";

export default {
	title: "Image Containers",
	decorators: [withA11y]
};

const width = 3920;
const height = 2621;

export const fullWidth = () =>
	// Example of srcsets using arbitrary 1.5 multiples of 960px
	// Goes to just above 5k (5120px, @ 1x density).
	// Don't forget alt attribute.
	// Use width= and height= to prevent jank.
	// References: https://css-tricks.com/what-if-we-got-aspect-ratio-sized-images-by-doing-almost-nothing/
	html`
		<div class="image-container image-container--full-width">
			<img
				class="image-container__image"
				alt="An image alt, for accessibility"
				width="${width}"
				height="${height}"
				src="${image768}"
				srcset="
					${image768}  768w,
					${image960}  960w,
					${image1440} 1440w,
					${image2160} 2160w,
					${image3240} 3240w,
					${image4860} 4860w,
					${image5760} 5760w
				"
				sizes="100vw"
			/>
		</div>
	`;

export const halfWidth = () =>
	// note sizes attribute is just 50vw
	html`
		<div class="image-container image-container--half-width">
			<img
				class="image-container__image"
				alt="An image alt, for accessibility"
				width="${width}"
				height="${height}"
				src="${image768}"
				srcset="
					${image768}  768w,
					${image960}  960w,
					${image1440} 1440w,
					${image2160} 2160w,
					${image3240} 3240w
				"
				sizes="50vw"
			/>
		</div>
	`;

export const lazyLoaded = () =>
	html`
		<div style="margin-bottom: 200vh;">
			<h2 style="margin: 5% 25%;">The image below should lazy load.</h2>
		</div>
		<div class="image-container image-container--full-width">
			<img
				class="lazy image-container__image"
				alt="An image alt, for accessibility"
				width="${width}"
				height="${height}"
				data-src="${image768}"
				data-srcset="
					${image768}  768w,
					${image960}  960w,
					${image1440} 1440w,
					${image2160} 2160w,
					${image3240} 3240w,
					${image4860} 4860w,
					${image5760} 5760w
				"
				data-sizes="100vw"
			/>
		</div>
	`;
