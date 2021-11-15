import { html, repeat } from "../../../.storybook/helpers";
import { withKnobs, number, text } from "@storybook/addon-knobs";
export default {
	title: "Exhibition/Quotes List",
	decorators: [withKnobs],
};

const data = () => ({
	allPressCTA: text("All Press CTA", "All Press"),
	allPressLink: text("All Press Link", "#some-link"),
	heading: text("Heading", "Quotes List"),
	id: "quotes-module",
	numberOfQuotes: number("Number of Quotes", 5),
	quote: {
		quoteText: text("Quote Text", "But web browsers aren’t like web servers. If your back-end code is getting so big that it’s starting to run noticably slowly, you can throw more computing power at it by scaling up your server. That’s not an option on the front-end where you don’t really have one run-time environment—your end users have their own run-time environment with its own constraints around computing power and network connectivity."),
		citationName: text("Citation Name", "The New York Times"),
		citationLink: text("Citation Link", "https://www.nytimes.com")
	}
});

const quoteMarkup = (quote) => {
	return html`<figure class="quotes-module__quote js-quotes-module__quote">
		<blockquote cite="#" class="quotes-module__quote-text">
			${quote.quoteText}
		</blockquote>
		<figcaption class="quotes-module__quote-citation">
			<a class="quotes-module__quote-link" href="${quote.citationLink}">
				${quote.citationName}
			</a>
		</figcaption>
	</figure>`;
};

const markup = (model) => {
	return html`
		<div class="quotes-module js-quotes-module" id="${model.id}">
			<div class="quotes-module__contents">
				<div class="quotes-module__header">
					<h2>${model.heading}</h2>
					<h4><a href="${model.allPressLink}" class="button tertiary-button">${model.allPressCTA}</a></h4>
				</div>
				<div class="quotes-module__quotes">
					${repeat(number("Number of Quotes", numberOfQuotes), quoteMarkup(model.quote))}
				</div>
			</div>
		</div>
	`;
};

const quotesList = () => {
	const storyData = data();
	return markup(storyData);
};

export { quotesList };
