import html from "../../../.storybook/helpers/html";
import he from "he";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { fullWidth } from "../image-container/image-container.stories.js";
import { useEffect } from "@storybook/client-api";
import jumpLinkBanner from "./jumplink-banner.js";

export default {
	title: "Banner",
	decorators: [withKnobs],
	parameters: {
		chromatic: { delay: 1500 },
	},
};

const data = () => {
	return {
		inSitu: boolean("In Situ", false),
		leftAlign: boolean("Left Align", false),
		bottomAlign: boolean("Bottom Align", false),
		header: text("Header", "Visit Us from Home"),
		description: text(
			"Body Copy",
			"<p>Immerse yourself in 360-degree video of iconic spaces in the Museum. Visit the Great Hall as a ball,  and Greek as a treat!</p>"
		),
		images: "",
		links: [
			{
				url: "#a",
				text: text("Button One Text", "Primary Link"),
			},
			{
				url: "#b",
				text: text("Button Two Text", "Component two"),
			},
			{
				url: "#c",
				text: text("Button Three Text", "Footer"),
			},
		],
		hasBottomLinks: boolean("Has Bottom Links?", true),
		bottomLinks: [
			{
				url: "#a",
				text: text("Link One Text", "Link One"),
			},
			{
				url: "#b",
				text: text("Link Two Text", "Second Link"),
			},
			{
				url: "#c",
				text: text("Link Three Text", "Third"),
			},
		],
	};
};

const jumplinkBannerMarkup = (model) => {
	return html` <div
		class="jumplink-banner
			${model.inSitu ? "productive-component" : ""}
			${model.leftAlign ? "align--left" : ""}
			${model.bottomAlign ? "align--bottom" : ""}
	"
	>
		<div class="jumplink-banner__content">
			<h1 class="expressive">${model.header}</h1>
			<h2 class="jumplink-banner__description">
				${he.decode(model.description)}
			</h2>
			<div class="jumplink-banner__links">
				${model.links
					.map(
						(link) => html`
							<a
								href="${link.url}"
								class="js-jump-link button secondary-button jumplink-banner__link"
							>
								${link.text}
							</a>
						`
					)
					.join("")}
			</div>
			${model.hasBottomLinks
				? html`<ul class="jumplink-banner__bottom-links">
						${model.bottomLinks
							.map(
								(link) => html`
									<li class="jumplink-banner__bottom-link">
										<a href="${link.url}" class="button tertiary-button">
											${link.text}
										</a>
									</li>
								`
							)
							.join("")}
				  </ul>`
				: ``}
		</div>
		<div class="jumplink-banner__image-wrapper">
			${fullWidth()}
		</div>
	</div>`;
};

export const JumpLinkBanner = () => {
	useEffect(jumpLinkBanner);
	const storyData = data();
	return html`
		${jumplinkBannerMarkup(storyData)}
		${storyData.links
			.map(({ url, text }) => {
				let id = url.replace("#", "");
				return html`<div id="${id}" style="margin-top: 50vh;">
					${text}
				</div>`;
			})
			.join("")}
	`;
};
