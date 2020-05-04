import html from "../../../.storybook/helpers/html";
import he from "he";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text } from "@storybook/addon-knobs";
import { fullWidth } from "../image-container/image-container.stories.js";
import "./featured-module.scss";

export default {
	title: "Featured",
	decorators: [withA11y, withKnobs],
};

export const featuredModule = () => {
	const header = text("Header", "Contribute to the Future");
	const bodyCopyDefault =
		"Care about art and wondering how to keep it safe from moths?<br />Support our mission in a new way.";
	const bodyCopy = text("Body Copy", bodyCopyDefault);

	return html`
		<div class="featured-module">
			<h1>${header}</h1>
			<p>${he.decode(bodyCopy)}</p>
			<div>
				<a class="" href="#">Become A Member</a>
				<a class="" href="#">Give A Gift</a>
				<a class="" href="#">Third Link</a>
			</div>
		</div>
		${fullWidth()}
	`;
};
