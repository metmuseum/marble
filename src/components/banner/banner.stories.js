import { html } from "../../../.storybook/helpers";
import vimeoTemplate from "../vimeo-player/vimeo-player";
import vimeoControls from "../vimeo-player/vimeo-controls.js";
import { useEffect } from "@storybook/client-api";
import { withKnobs, color, text } from "@storybook/addon-knobs";
import he from "he";
import image712 from "../../../.storybook/assets/images/misc/150HubBannerMobile_712w.jpg";
import image1231 from "../../../.storybook/assets/images/misc/150HubBannerMobile_1231w.jpg";

export default { title: "Banner", decorators: [withKnobs] };

const data = {
	backgroundColor: () => color("Background Color", "#ECDFD7"),
	color: () => color("Text Color", "#333333"),
	header: () => text("Header", "Celebrating 150 Years"),
	description: () => text("Description", "<p>A storied past. A dynamic present. An exciting future. It's just the beginning!</p><p> Celebrate The Met's anniversary throughout 2020 with exhibitions, events, and new ways to connect with art. Highlights include Making The Met, 1870–2020, the reimagined British Galleries, and a three-day celebration in June.</p>"),
	backgroundImages: `${image1231} 2x, ${image712} 1x`,
	imageAlt: "Celebrating 150 Years",
	link: {
		url: "http://metmuseum.org",
	},
	name: "my-sitecore-model-name",
	video: false
};

const bannerMarkup = (model) => html`
	<section class="marble-banner marble-banner-${model.name}">
		<div class="marble-banner__image-wrapper">
			<a
				class="marble-banner__image-link"
				tabindex="-1"
				href="${model.link.url}"
				title="${model.imageAlt}"
			>
				<img
					class="marble-banner__image"
					srcset="${model.backgroundImages}"
					alt="${model.imageAlt}"
				/>
				${model.video === true ? vimeoTemplate : ""}
			</a>
		</div>
		<div
			class="marble-banner__subject"
			style="background-color: ${model.backgroundColor()}; color: ${model.color()}"
		>
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


export const Banner = () => bannerMarkup(data);

export const BannerWithVideo = () => {
	useEffect(vimeoControls);
	return bannerMarkup({ ...data, ...{ video: true } });
};
