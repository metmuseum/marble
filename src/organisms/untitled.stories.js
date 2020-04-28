// Batson, Evander added a comment - 04 / 23 / 20 4: 13 PM - edited
// FIELDS
// Header: 32 char limit, optional
// Description: 128 char limit, optional
// Link1: 16 char limit, optional
// Link2: 16 char limit, optional
// Link3: 16 char limit, optional

// Batson, Evander added a comment - 04 / 23 / 20 4: 14 PM - edited
// Image Guidelines:
// 16: 9 preferred, ratio variable.
// Should accept any image ratio, matching width to 100 % of the container width and the height automatically

// Cardona, Jessica added a comment - 04 / 24 / 20 5: 37 PM - edited
// Sitecore fields(in order):
// Header(32 char)
// Description(128 char)
// CTA 1(16 char)
// URL Link 1
// CTA 2(16 char)
// URL Link 2
// CTA 3(16 char)
// URL Link 3
// Image

import html from "../../.storybook/helpers/html";
import { withA11y } from "@storybook/addon-a11y";
import { fullWidth } from "../components/image-container/image-container.stories.js";
import "./untitled.scss";

export default {
	title: "Featured Module",
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
