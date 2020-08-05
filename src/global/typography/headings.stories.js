import html from "../../../.storybook/helpers/html";
import { withKnobs, text, radios } from "@storybook/addon-knobs";

export default {
	title: "Elements/Typography/Headings",
	decorators: [withKnobs],
};

const pangram = "Grumpy Wizards Make a Toxic Brew for the Jovial Queen";

const scalingRuleSelector = () => {
	return radios("Scaling Rule", ["Fluid", "Fixed-width"], "Fluid");
};

const scalingRuleWrapper = (innerStory) => {
	const scalingRule = scalingRuleSelector();
	return scalingRule == "Fluid"
		? innerStory()
		: scalingRule == "Fixed-width"
		? html`<div class="fixed-width">${innerStory()}</div>`
		: "No scaling rule selected";
};

export const h1Masthead = () => {
	return html`<h1 class="masthead">${text("Text", pangram)}</h1>`;
};

const h1Markup = () => {
	return html`<h1>${text("Text", pangram)}</h1>`;
};

export const H1 = () => {
	return scalingRuleWrapper(h1Markup);
};

const h2Markup = () => {
	return html`<h2>${text("Text", pangram)}</h2>`;
};

export const H2 = () => {
	return scalingRuleWrapper(h2Markup);
};

const h3Markup = () => {
	return html`<h3>${text("Text", pangram)}</h3>`;
};

export const h3 = () => {
	return scalingRuleWrapper(h3Markup);
};

const h4Markup = () => {
	return html`<h4>${text("Text", pangram)}</h4>`;
};

export const h4 = () => {
	return scalingRuleWrapper(h4Markup);
};
