import html from "../../../.storybook/helpers/html";
import { number, withKnobs } from "@storybook/addon-knobs";

export default { title: "Components/Byline", decorators: [withKnobs] };

const authors = () => {
	const numberOfAuthors = number("Number of Authors", 2); // get 2 authors from our numbers knob
	let authors = [...Array(numberOfAuthors).keys()].map(() => {
		return "Jeanie Choi";
	}); // just make an array that just says "Jeanie Choi" that many times

	return authors
		.map((author) => {
			return authorMarkup(author);
		})
		.join(", "); // return all the tags as 1 html string
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
