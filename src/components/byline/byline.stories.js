import { html, repeat } from "../../../.storybook/helpers";
import { number, withKnobs } from "@storybook/addon-knobs";

export default { title: "Components/Byline", decorators: [withKnobs] };

const authors = () => repeat(
	number("Number of Authors", 2),
	authorMarkup(),
	", "
);

const authorMarkup = (author = "Jeanie Choi") =>
	html`<a href="/">${author}</a>`;

const bylineMarkup = (model) => html`<div class="byline">
		<span class="byline__authors">${model.authors()}</span>
		<span class="byline__date">${model.date}</span>
	</div>`;

const data = {
	authors,
	date: "January 1, 1957",
};

const Byline = () => bylineMarkup(data);

export { Byline };
