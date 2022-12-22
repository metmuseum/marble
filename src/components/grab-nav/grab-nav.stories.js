import { html } from ".storybook/helpers";
import { initialize } from "./grab-nav.js";
import { useEffect } from "@storybook/client-api";
import greekHallImages from ".storybook/assets/images/greek-hall";

export default { title: "Navigation/GrabNav" };

const titles = ["Le Nav de Grab",
	"Based on Musette",
	"Ulysses",
	"Twenty-two plates",
	"Girodet",
	"Relief",
	"Evening Dress",
	"Column Statue of a King"
];

const images = [greekHallImages.image1x1, greekHallImages.image4x3, greekHallImages.image16x9];

const slideTemplate = (args) => {
	return html`<div class="grab-nav-tab">
	<a class="grab-nav-link" href="http://www.metmuseum.org/art/collection/search/459090">
		${args.title}
	</a>
</div>`;
};

const GrabNav = () => {
	useEffect(() => { initialize(); });
	return html`
	<div class="grab-nav js-grab-nav">
		${titles.map((title, index) => slideTemplate({ title: title, imageURL: images[index % 3].srcSet.fallback })).join("")}
	</div>`;
};

export { GrabNav };
