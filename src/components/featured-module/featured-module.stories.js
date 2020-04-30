import html from "../../../.storybook/helpers/html";
import { withA11y } from "@storybook/addon-a11y";
import { fullWidth } from "../image-container/image-container.stories.js";
import "./featured-module.scss";

export default {
	title: "Featured",
	decorators: [withA11y],
};

export const featuredModule = () => {
	return html`
		<div class="featured-module">
			<h1>Contribute to the Future</h1>
			<p>
				Care about art and wondering how to keep it safe from moths?<br />
				Support our mission in a new way.
			</p>
			<div class="text-center">
				<a class="" href="#">Become A Member</a>
				<a class="" href="#">Give A Gift</a>
				<a class="" href="#">Third Link</a>
			</div>
		</div>
		${fullWidth()}
	`;
};
