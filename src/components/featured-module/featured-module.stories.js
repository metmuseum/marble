import html from "../../../.storybook/helpers/html";
import he from "he";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { fullWidth } from "../image-container/image-container.stories.js";
import "./featured-module.scss";

export default {
	title: "Featured",
	decorators: [withA11y, withKnobs],
};

export const featuredModule = () => {
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
		<div
			class="featured-module-container ${inSitu ? "productive-component" : ""}"
		>
			<div class="featured-module">
				<h2>${header}</h2>
				<p>${he.decode(bodyCopy)}</p>
				<div>
					<a class="" href="#">${CTA1}</a>
					<a class="" href="#">${CTA2}</a>
					<a class="" href="#">${CTA3}</a>
				</div>
			</div>
			${fullWidth()}
		</div>
	`;
};
