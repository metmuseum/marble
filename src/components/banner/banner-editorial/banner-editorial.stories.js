import vimeoTemplate from "../../vimeo-player/vimeo-player";
import vimeoControls from "../../vimeo-player/vimeo-controls";
import { useEffect } from "@storybook/client-api";

import image448 from "../../../../.storybook/assets/images/misc/The-Met_150th_Events_Promo_448w.jpg";
import image896 from "../../../../.storybook/assets/images/misc/The-Met_150th_Events_Promo_896w.jpg";

export default { title: "Banner" };

const data = {
	backgroundColor: "#84b8ff",
	imageBorderColor: "#cfe4ff",
	color: "#333333",
	header: "Join The Celebration",
	description:
		"<p>Celebrate The Met's 150th Anniversary all year long in 2020, but be sure to mark one very special weekend on your calendar now.</p>",
	backgroundImages: `${image896} 2x, ${image448} 1x`,
	imageAlt: "Celebrating 150 Years",
	link: {
		url: "http://metmuseum.org",
	},
};

const bannerMarkup = (model) => {
	return `
		<section class="marble-banner marble-banner-@Model.Name marble-banner--editorial">
			<div class="marble-banner__image-wrapper" style="border-color: ${
	model.imageBorderColor
}; background-color: ${model.imageBorderColor};">
				<a class="marble-banner__image-link"
					tabindex="-1"
					href="${model.link.url}"
					title="${model.imageAlt}">

					<img class="marble-banner__image" srcset="${model.backgroundImages}">
					${model.video === true ? vimeoTemplate : ""}
				</a>
			</div>

			<div class="marble-banner__subject" style="background-color: ${
	model.backgroundColor
}; color: ${model.color}">
				<div class="marble-banner__subject-body">
					<h1 class="expressive">
						<a href="${model.link.url}" class="marble-banner__header-link">${
	model.header
}</a>
					</h1>
					<div class="marble-banner__meta-description expressive-body">
						<a href="${model.link.url}" tabindex="-1">${model.description}</a>
					</div>
				</div>
			</div>
		</section>
	`;
};

export const BannerEditorial = () => {
	const model = Object.assign(data, { video: false });
	return bannerMarkup(model);
};

export const BannerEditorialWithVideo = () => {
	useEffect(vimeoControls);
	const model = Object.assign(data, { video: true });
	return bannerMarkup(model);
};
