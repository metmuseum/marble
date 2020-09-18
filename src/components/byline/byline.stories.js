import html from "../../../.storybook/helpers/html";
import { number, withKnobs } from "@storybook/addon-knobs";

export default { title: "Components/Byline", decorators: [withKnobs] };

const authors = () => {
	const numberOfAuthors = number("Number of Authors", 2);
	let authors = new Array(numberOfAuthors).fill("Jeanie Choi");

	return authors
		.map((author) => {
			return authorMarkup(author);
		})
		.join(", ");
};

const authorMarkup = (author) => {
	return html`<a class="byline__author-link" href="/">${author}</a>`;
};

const data = {
	authors,
	date: "January 1, 1957",
};

const bylineMarkup = (model) => {
	return html`<div class="byline">
		<span class="byline__authors">${model.authors()}</span>
		<span class="byline__date">${model.date}</span>
	</div>`;
};

const Byline = () => {
	return bylineMarkup(data);
};

export { Byline };
