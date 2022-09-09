import { html } from ".storybook/helpers";
import he from "he";
import vimeoTemplate from "../../vimeo-player/vimeo-player";
import vimeoControls from "../../vimeo-player/vimeo-controls";
import { useEffect } from "@storybook/client-api";
import { withKnobs, color, text } from "@storybook/addon-knobs";

import image448 from ".storybook/assets/images/misc/The-Met_150th_Events_Promo_448w.jpg";
import image896 from ".storybook/assets/images/misc/The-Met_150th_Events_Promo_896w.jpg";
import SETTINGS from "../../../global/settings";

export default {
	title: "Banner", decorators: [withKnobs],
	parameters: {
		chromatic: {
			viewports: SETTINGS.chromatic.extraViewports
		}
	}
};

const data = {
	backgroundColor: () => color("Background Color", "#84b8ff"),
	imageBorderColor: () => color("Image Border Color", "#cfe4ff"),
	color: () => color("Text Color", "#333333"),
	header: () => text("Header", "Join The Celebration"),
	description: () => text("Description", "<p>Celebrate The Met's 150th Anniversary all year long in 2020, but be sure to mark one very special weekend on your calendar now.</p>"),
	backgroundImages: `${image896} 2x, ${image448} 1x`,
	imageAlt: "Celebrating 150 Years",
	link: {
		url: "http://metmuseum.org",
	},
	name: "my-sitecore-model-name",
	video: false
};

const bannerMarkup = (model) => html`
	<section class="marble-banner marble-banner-${model.name} marble-banner--editorial">
		<div class="marble-banner__image-wrapper" style="border-color: ${model.imageBorderColor()}; background-color: ${model.imageBorderColor()};">
			<a class="marble-banner__image-link"
				tabindex="-1"
				href="${model.link.url}"
				title="${model.imageAlt}">
				<img class="marble-banner__image" srcset="${model.backgroundImages}" alt="${model.imageAlt}">
				${model.video ? vimeoTemplate : ""}
			</a>
		</div>
		<div class="marble-banner__subject" style="background-color: ${model.backgroundColor()}; color: ${model.color()}">
			<div class="marble-banner__subject-body">
				<h1 class="expressive">
					<a href="${model.link.url}" class="marble-banner__header-link">
						${model.header()}
					</a>
				</h1>
				<div class="marble-banner__meta-description expressive-body">
					<a href="${model.link.url}" tabindex="-1">${he.decode(model.description())}</a>
				</div>
			</div>
		</div>
	</section>`;

export const BannerEditorial = () => {
	return bannerMarkup(data);
};

export const BannerEditorialWithVideo = () => {
	useEffect(vimeoControls);
	return bannerMarkup({ ...data, ...{ video: true } });
};
