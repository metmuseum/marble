import { html, scalingRuleWrapper } from ".storybook/helpers";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
	title: "Elements/Typography/Headings",
	decorators: [withKnobs],
};

const pangram = "Grumpy Wizards Make a Toxic Brew for the Jovial Queen";

const H1Masthead = () => {
	return html`<h1 class="masthead">${text("Text", pangram)}</h1>`;
};

H1Masthead.story = { name: "H1 Masthead" };

const h1Markup = () => {
	return html`<h1>${text("Text", pangram)}</h1>`;
};

const H1 = () => {
	return scalingRuleWrapper(h1Markup);
};

H1.story = { name: "H1" };

const H1Expressive = () => {
	return scalingRuleWrapper(() => {
		return html`<h1 class="expressive">${text("Text", pangram)}</h1>`;
	});
};

H1Expressive.story = { name: "H1 Expressive" };

const h2Markup = () => {
	return html`<h2>${text("Text", pangram)}</h2>`;
};

const H2 = () => {
	return scalingRuleWrapper(h2Markup);
};

H2.story = { name: "H2" };

const H2Expressive = () => {
	return scalingRuleWrapper(() => {
		return html`<h2 class="expressive">${text("Text", pangram)}</h1>`;
	});
};

H2Expressive.story = { name: "H2Expressive" };

const h3Markup = () => {
	return html`<h3>${text("Text", pangram)}</h3>`;
};

const H3 = () => {
	return scalingRuleWrapper(h3Markup);
};

H3.story = { name: "H3" };

const h4Markup = () => {
	return html`<h4>${text("Text", pangram)}</h4>`;
};

const H4 = () => {
	return scalingRuleWrapper(h4Markup);
};

H4.story = { name: "H4" };

const h5Markup = () => {
	return html`<h5>${text("Text", pangram)}</h5>`;
};

const H5 = () => {
	return scalingRuleWrapper(h5Markup);
};

H5.story = { name: "H5" };

const h6Markup = () => {
	return html`<h6>${text("Text", pangram)}</h6>`;
};

const H6 = () => {
	return scalingRuleWrapper(h6Markup);
};

const allMarkup = () => {
	return html`
		<h1>${text("Text", pangram)}</h1>
		<h2>${text("Text", pangram)}</h2>
		<h3>${text("Text", pangram)}</h3>
		<h4>${text("Text", pangram)}</h4>
		<h5>${text("Text", pangram)}</h5>
		<h6>${text("Text", pangram)}</h6>
	`;
};

const All = () => {
	return scalingRuleWrapper(allMarkup);
};

H6.story = { name: "H6" };

export { H1Masthead, H1, H1Expressive, H2, H2Expressive, H3, H4, H5, H6, All };
