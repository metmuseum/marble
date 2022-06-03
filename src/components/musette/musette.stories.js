import { html } from ".storybook/helpers";
import { initialize } from "./musette.js";
import { useEffect } from "@storybook/client-api";
import greekHallImages from ".storybook/assets/images/greek-hall";

export default { title: "Carousel/Musette" };

const titles = ["Musette de Cour",
	"Reverse copy of The Companions of Ulysses arriving at Circe's dwelling",
	"From a series of twenty-two plates",
	"Girodet and His Students",
	"Relief of the Betrayal and Arrest of Jesus",
	"Evening Dress",
	"Column Statue of a King",
	"Vertical Panel with Design for a Mirror",
	"Merced River, Yosemite Valley",
	"Vertical Panel with a Pear Shaped Design",
	"Her Daughter, María Agustina",
	"Suzanna and Her Elders",
	"Condesa de Altamira",
	"A Banquet",
	"Elizabeth Cholmley (1769–1788)"
];

const images = [greekHallImages.image1x1, greekHallImages.image4x3, greekHallImages.image16x9];

const slideTemplate = (args) => {
	return html`<div class="musette-fold">
	<a href="http://www.metmuseum.org/art/collection/search/459090">
		<img src="${args.imageURL}" alt="example image alt">
		<h5>
			${args.title}
		</h5>
	</a>
</div>`;
};

const Musette = () => {
	useEffect(() => { initialize(); });
	return html`
	<div class="la-musette la-musette-no-scrollbar js-la-musette">
		${titles.map((title, index) => slideTemplate({ title: title, imageURL: images[index % 3].srcSet.fallback })).join("")}
	</div>`;
};

export { Musette };
