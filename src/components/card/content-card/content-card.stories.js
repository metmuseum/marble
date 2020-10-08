import html from "../../../../.storybook/helpers/html";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import sizeVariables from "../../../base/_sizes.scss";

import image768 from "../../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow.jpg";
import image960 from "../../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-960.jpg";
import image1440 from "../../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-1440.jpg";
import image2160 from "../../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-2160.jpg";

const imageWidth = 3920;
const imageHeight = 2621;

export default {
	decorators: [withKnobs],
	title: "Cards/Content Card",
};

const Heading = () => {
	return html`<h3 class="content-card__heading">
		${text(
			"Heading",
			"Heading Text That Can Extend to Three Lines Maximum, Character Count 100"
		)}
	</h3>`;
};

const HeadingWithLink = () => {
	return html`
		<a class="content-card__link" href="#some-link">${Heading()}</a>
	`;
};

const ContentCard = () => {
	// linkable heading
	return html`<div class="content-card">
		<img
			class="content-card__image"
			alt="An image alt, for accessibility"
			width="${imageWidth}"
			height="${imageHeight}"
			src="${image768}"
			srcset="
				${image768}  768w,
				${image960}  960w,
				${image1440} 1440w,
				${image2160} 2160w
			"
			sizes="(min-width: ${sizeVariables.bp900}) 720px, 90vw"
		/>
		<span class="tag content-card__eyebrow"
			>${text("Tag Text", "tag text")}</span
		>
		${boolean("Heading Is A Link?", true) ? HeadingWithLink() : Heading()}
		<p>
			${text(
				"Description",
				"This illustrated volume presents a comprehensive overview of the Sahel's diverse cultural traditions. Order yours today."
			)}
		</p>
	</div>`;
};

export { ContentCard };
