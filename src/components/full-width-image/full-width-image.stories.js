import html from "../../../.storybook/helpers/html";
import { withA11y } from "@storybook/addon-a11y";
import "./full-width-image.scss";

import image768 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow.jpg";
import image960 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-960.jpg";
import image1440 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-1440.jpg";
import image2160 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-2160.jpg";
import image3240 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-3240.jpg";
import image4860 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-4860.jpg";
import image5760 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-5760.jpg";

export default {
	title: "Full-Width Image",
	decorators: [withA11y],
};

export const anyRatio = () =>
	// Example shown for up to 5k Retina (2880w native, 5760px @ 2x).
	// Don't forget alt attribute.
	// Use width= and height= to prevent jank.
	// References: https://css-tricks.com/what-if-we-got-aspect-ratio-sized-images-by-doing-almost-nothing/
	html`
		<div class="full-width-image-container">
			<img
				class="full-width-image"
				alt="An image alt, for accessibility"
				width="3920"
				height="2621"
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
