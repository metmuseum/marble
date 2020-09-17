import html from "../../../.storybook/helpers/html";
import withKnobs from "@storybook/addon-knobs";
export default { title: "Components/Byline" };

// export default {
// 	title: "Byline",
// 	addons: [withKnobs],
// };

const data = {
	name: "Jeanie Choi",
	date: "January 1, 1957",
	link: {
		url: "http://metmuseum.org",
	},
};

const cardMarkup = (model) => {
	return html`<div class="byline">
		<span class="byline__author">
			<a href="${model.link.url}">${model.name}</a>
		</span>
		<span class="byline__date"> ${model.date} </span>
	</div>`;
};

const Byline = () => {
	return cardMarkup(data);
};

export { Byline };
