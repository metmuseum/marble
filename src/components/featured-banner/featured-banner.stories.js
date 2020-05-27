import html from "../../../.storybook/helpers/html";
import he from "he";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import sizeStyles from "../../base/_sizes.scss";
import "./featured-banner.scss";

import image768 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow.jpg";
import image960 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-960.jpg";
import image1440 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-1440.jpg";
import image2160 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-2160.jpg";
import image3240 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-3240.jpg";

export default {
	title: "Featured",
	decorators: [withA11y, withKnobs],
};

const bp1200 = sizeStyles.bp1200;
const width = 3920;
const height = 2621;

export const featuredBanner = () => {
	const inSitu = boolean("In Situ", false);
	const header = text("Header", "Contribute to the Future");
	const bodyCopyDefault =
		"Care about art and wondering how to keep it safe from moths?<br />Support our mission in a new way.";
	const bodyCopy = text("Body Copy", bodyCopyDefault);
	let ctaDefaults = ["Become A Member", "Give A Gift", "Third Link"];
	const CTA1 = text("CTA 1", ctaDefaults.shift());
	const CTA2 = text("CTA 2", ctaDefaults.shift());
	const CTA3 = text("CTA 3", ctaDefaults.shift());

	return html`
		<div class="featured-banner ${inSitu ? "productive-component" : ""}">
			<div class="featured-banner-heading-container">
				<h2>${header}</h2>
			</div>
			<div class="featured-banner-body-container">
				<p>${he.decode(bodyCopy)}</p>
				<a
					role="button"
					href="#"
					tabindex="0"
					class="button--tertiary featured-banner__link"
				>
					${CTA1}
				</a>
				<a
					role="button"
					href="#"
					tabindex="0"
					class="button--tertiary featured-banner__link"
				>
					${CTA2}
				</a>
				<a
					role="button"
					href="#"
					tabindex="0"
					class="button--tertiary featured-banner__link"
				>
					${CTA3}
				</a>
			</div>
			<div class="featured-banner-image-container">
				<img
					class="featured-banner__image"
					alt="An image alt, for acacessibility"
					width="${width}"
					height="${height}"
					src="${image768}"
					srcset="
						${image768}   768w,
						${image960}  960w,
						${image1440} 1440w,
						${image2160} 2160w,
						${image3240} 3240w
					"
					sizes="100vw, (min-width: ${bp1200}) 30vw"
				/>
			</div>
		</div>
	`;
};
