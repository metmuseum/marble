import html from "../../../.storybook/helpers/html";
import { withKnobs, number } from "@storybook/addon-knobs";
import { useEffect } from "@storybook/client-api";
import quotesModuleJs from "./quotes-module.js";
export default {
	title: "Quotes Module",
	decorators: [withKnobs],
};

const data = {
	id: "quotes-module",
	header: "Quotes Module",
	quoteBody:
		"	But web browsers aren’t like web servers. If your back-end code is getting so big that it’s starting to run noticably slowly, you can throw more computing power at it by scaling up your server. That’s not an option on the front-end where you don’t really have one run-time environment—your end users have their own run-time environment with its own constraints around computing power and network connectivity.",
	quoteAuthor: {
		name: "The New York Times",
		url: "https://www.nytimes.com",
	},
};

const quoteMarkup = (model) => {
	return html`<figure class="quotes-module__quote js-quotes-module__quote">
		<blockquote cite="#" class="quotes-module__quote-text">
			${model.quoteBody}
		</blockquote>
		<figcaption class="quotes-module__quote-citation">
			<a class="quotes-module__quote-link" href="${model.quoteAuthor.url}">
				${model.quoteAuthor.name}
			</a>
		</figcaption>
	</figure>`;
};

const markup = (model, numberOfQuotes = 7) => {
	return html`
		<div class="quotes-module js-quotes-module" id="${model.id}">
			<div class="quotes-module__contents">
				<div class="quotes-module__header">
					<h3>Latest Reviews</h3>
					<h4><a href="#">All press</a></h4>
				</div>
				<div class="quotes-module__quotes">
					${new Array(number("Number of Quotes", numberOfQuotes))
						.fill(quoteMarkup(model))
						.join("\n")}
				</div>
				<a
					href="#${model.id}"
					class="js-quotes-module__expander quotes-module__expander button tertiary-button"
				>
					View more
				</a>
			</div>
		</div>
	`;
};

const quotesModule = () => {
	useEffect(quotesModuleJs);
	return markup(data);
};

const withLessThanFourQuotes = () => {
	useEffect(quotesModuleJs);
	return markup(data, 2);
};

export { quotesModule, withLessThanFourQuotes };
