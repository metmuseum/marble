import html from "../../../../.storybook/helpers/html";
import { withKnobs, text, boolean, radios } from "@storybook/addon-knobs";

import image600 from "../../../../.storybook/assets/images/misc/150Hub_SimpleCard2_600w.jpg";
import image1200 from "../../../../.storybook/assets/images/misc/150Hub_SimpleCard2_1200w.jpg";

export default {
	title: "Cards",
	decorators: [withKnobs],
};

const defaultHeader = "Simple Card";
const defaultDescription =
	"Have you ever heard a museum love story? Did you know that art has the power to heal? Met visitors share their personal stories in this new series.";
const defaultImageSrc = `${image1200} 2x, ${image600} 1x`;
const defaultImageAlt = "Image Alt Text";
const defaultLinkUrl = "http://metmuseum.org";
const defaultLinkText = "Watch Episode 1";

const cardMarkup = (model) => {
	return html`
		<section
			class="js-scroll-effect component js-waypoint simple-card__wrapper productive-component  ${model.leftText
				? "left-text"
				: ""}"
		>
			<div class="simple-card">
				<div class="simple-card__item-wrapper">
					<a
						class="simple-card__image-link gtm-homepage-simple-card-img"
						href="${model.link.url}"
						title="${model.images.alt}"
					>
						<figure class="simple-card__image-wrapper">
							<img
								class="lazy simple-card__image"
								data-low-res="@Html.GetSrcLowRes(Model.Images)"
								srcset="${model.images.src}"
								alt="${model.images.alt}"
							/>
						</figure>
					</a>
				</div>
				<div class="simple-card__copy-wrapper">
					<div class="simple-card__copy">
						<h2 class="alt simple-card__heading">${model.header}</h2>
						<div class="simple-card__body short-body">${model.description}</div>
						<a
							class="button tertiary-button gtm-homepage-simple-card-cta"
							href="${model.link.url}"
							>${model.link.text}</a
						>
					</div>
				</div>
			</div>
		</section>
	`;
};

export const SimpleCard = () => {
	let isLoaded = boolean("Image Loaded", true);
	let imageUrl = isLoaded ? defaultImageSrc : "";

	console.log(imageUrl);

	const data = {
		header: text("Header", defaultHeader),
		images: {
			src: imageUrl,
			alt: text("Alt Text", defaultImageAlt),
		},
		link: { url: defaultLinkUrl, text: text("CTA text", defaultLinkText) },
		description: text("Description", defaultDescription),
		leftText: boolean("Left Align", true),
	};

	return cardMarkup(data);
};
