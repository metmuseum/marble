import html from "../../../../.storybook/helpers/html";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import sizeVariables from "../../../global/exports.scss";

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

const Heading = (index) => {
	return html` ${text(
		` ${index} Heading`,
		"Heading Text That Can Extend to Three Lines Maximum, Character Count 100"
	)}`;
};

const HeadingWithLink = (index) => {
	return html` <a class="content-card__heading-link" href="#some-link"
		>${Heading(index)}</a
	>`;
};

const srcSet = `${image768} 768w,
${image960}  960w,
${image1440} 1440w,
${image2160} 2160w`;

const ContentCardTemplate = (cardMode = "", index = "") => {
	return html` <div class="content-card ${cardMode}">
		<a href="anywhere" class="card-image__wrapper" tabindex="-1">
			<img
				class="card-image"
				alt="An image alt, for accessibility"
				width="${imageWidth}"
				height="${imageHeight}"
				src="${image768}"
				srcset="${srcSet}"
				sizes="(min-width: ${sizeVariables.bp900}) 720px, 90vw"
			/>
		</a>

		<div class="content-card__body">
			<div class="content-card__eyebrow">
				${text(`${index} Tag Text`, "tag text")}
			</div>
			<h3 class="content-card__heading">
				${boolean(`${index} Heading Is A Link?`, true)
					? HeadingWithLink(index)
					: Heading(index)}
			</h3>
			<p>
				${text(
					`${index} Description`,
					"This illustrated volume presents a comprehensive overview of the Sahel's diverse cultural traditions. Order yours today."
				)}
			</p>
		</div>
	</div>`;
};

const ContentCard = () => {
	return ContentCardTemplate();
};

const ContentCards = () => {
	const cardCount = number("Card Count", 2, { range: true, min: 2, max: 4 });
	const cards = Array.apply(null, Array(cardCount)).map((card, index) =>
		ContentCardTemplate("has-border", index + 1)
	);
	return html` <section class="card-container card-container--auto-fit">
		${cards.reduce((total, card) => total + card, "")}
	</section>`;
};

const TwoUpContentCard = () => {
	return ContentCardTemplate("two-up");
};

const ThreeUpContentCard = () => {
	return ContentCardTemplate("three-up");
};

const ProductiveContentCard = () => {
	return ContentCardTemplate("content-card--productive");
};

export {
	ContentCard,
	ContentCards,
	ThreeUpContentCard,
	TwoUpContentCard,
	ProductiveContentCard,
};
