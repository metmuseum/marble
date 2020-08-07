import html from "../../../.storybook/helpers/html";
import scalingRuleWrapper from "../../../.storybook/helpers/scalingRuleWrapper";
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

export { H1Masthead, H1, H1Expressive, H2, H3, H4 };
