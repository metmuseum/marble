import html from "../../.storybook/helpers/html";
import paragraph from "../../.storybook/helpers/audienceIpsum";

export default {
	title: "Lorem Ipsum",
	parameters: {
		chromatic: { disable: true },
	},
};


export const LoremIpsum = (args) => {
	const results = [];
	for (var i = 0; i < args.numberOfParagraphs; i++) {
		results.push(paragraph());
	}
	let paragraphs = results
		.map((paragraph) => {
			return `<p style="text-indent: 1em;">${paragraph}</p>`;
		})
		.join(" ");
	return html`<p>${paragraphs}</p>`;
};

LoremIpsum.args = {
	numberOfParagraphs: 3
};
