import { html, srcSet} from ".storybook/helpers";
import scssExports from "../../../global/exports.scss";
import image from ".storybook/assets/images/full-width-image";

export default {
	title: "Cards/Content Card",
	args: {
		cardMode: "",
		index: 0,
		heading: {
			withHeading: true,
			headingLink: true,
			headingText: "Heading Text That Can Extend to Three Lines Maximum, Character Count 100",
		},
		tagText: "",
		description: "This illustrated volume presents a comprehensive overview of the Sahel's diverse cultural traditions.Order yours today."
	}
};

const ContentCardTemplate = (args) => html`
	<div class="content-card ${args.cardMode}">
		<div class="card-image__wrapper card-image__wrapper--has-invisible-link">
			<a href="anywhere" class="invisible-redundant-link" aria-hidden="true" tabindex="-1"></a>
			<img class="card-image" alt="An image alt, for accessibility" width="${image.width}" height="${image.height}"
				src="${image.srcSet.fallback}" srcset="${srcSet(image.srcSet)}" sizes="(min-width: ${scssExports.bp900}) 720px, 90vw" />
		</div>
		<div class="content-card__body">
			<div class="content-card__eyebrow">
				${args.tagText ? args.tagText : `Card ${args.index}`}
			</div>
			${args.heading.withHeading ? html`
			<h3 class="content-card__heading">
				${args.heading.headingLink ? html`<a class="content-card__heading-link" href="#some-link">${args.heading.headingText}</a>` : args.heading.headingText}
			</h3>
			` : ""}
			<p>
				${args.description ? args.description : `Card ${args.index} description.`}
			</p>
		</div>
	</div>`;


export const ContentCard = (args) => ContentCardTemplate(args);

export const ContentCards = (args) => html`
	<section class="card-container card-container--auto-fit">
		${	[...Array(args.cardCount).keys()]
		.map((index) => ContentCardTemplate({ ...args, index: (index + 1) }))
		.join("\n")
}
	</section>`;

ContentCards.args = {
	cardCount: 2,
	cardMode: "has-border"
};

export const TwoUpContentCard = (args) => ContentCardTemplate(args);
TwoUpContentCard.args = {cardMode: "two-up"};

export const TwoUpContentCardMixedHeadings = (args) => html`
<section class="card-container card-container--auto-fit">
	${ContentCardTemplate({...args, index: 1, heading: {withHeading: false}})}
	${ContentCardTemplate({...args, index: 2})}
</section>
`;

export const ThreeUpContentCard = (args) => ContentCardTemplate(args);
ThreeUpContentCard.args = {
	cardMode: "three-up"
};

export const ProductiveContentCard = (args) =>  ContentCardTemplate(args);
ProductiveContentCard.args = {
	cardMode: "content-card--productive"
};