import html from "../../.storybook/helpers/html";
import paragraph from "../../.storybook/helpers/audienceIpsum";
import { withKnobs, number } from "@storybook/addon-knobs";

export default {
	title: "Helpers/Lorem Ipsum",
	decorators: [withKnobs],
	parameters: {
		chromatic: { disable: true },
	},
};

const label = "Number of Paragraphs";
const defaultValue = 3;
const options = {
	range: true,
	min: 1,
	max: 12,
	step: 1,
};

export const LoremIpsum = () => {
	const numberOfParagraphs = number(label, defaultValue, options);
	const results = [];
	for (var i = 0; i < numberOfParagraphs; i++) {
		results.push(paragraph());
	}
	let paragraphs = results
		.map((paragraph) => {
			return `<p style="text-indent: 1em;">${paragraph}</p>`;
		})
		.join(" ");
	return html` <div style="margin: 2em">${paragraphs}</div> `;
};
