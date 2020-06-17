import html from "../../../.storybook/helpers/html";
import he from "he";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { fullWidth } from "../image-container/image-container.stories.js";
import "./jumplink-banner.scss";
//import jumpLinkBanner from "./jumplink-banner.js";

export default { title: "Banner", decorators: [withA11y, withKnobs] };

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
				url: "http://metmuseum.org",
				text: text("Button One Text", "Primary Link"),
			},
			{
				url: "http://metmuseum.org",
				text: text("Button Two Text", "Component two"),
			},
			{
				url: "http://metmuseum.org",
				text: text("Button Three Text", "Footer"),
			}
		]
	};
};

const jumplinkBannerMarkup = (model) => {
	return html` <div
		class="jumplink-banner
			${model.inSitu ? "productive-component" : ""}
			${model.leftAlign ? "align--left" : ""}
			${model.bottomAlign ? "align--bottom" : ""}
	">
		<div class="jumplink-banner__content">
			<h1 class="expressive">${model.header}</h1>
			<h3 class="jumplink-banner__description">${he.decode(model.description)}</h3>
			<div class="jumplink-banner__links">
			${model.links.map((link) => html`
				<a
					href="${link.url}"
					class="js-jump-link button--wide jumplink-banner__link button button--pill inverse--opaque">
					${link.text}
				</a>
			 `).join('')}
			</div>
		</div>
		<div class="jumplink-banner__image-wrapper">
			${fullWidth()}
		</div>
	</div>`;
};

export const JumpLinkBanner = () => {
	return jumplinkBannerMarkup(data());
};