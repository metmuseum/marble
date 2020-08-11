import html from "../../../.storybook/helpers/html";
import { withKnobs, text, radios } from "@storybook/addon-knobs";

// hopefully this remains self-documenting
const permutations = {
	elementTags: ["Button", "Anchor"],
	// states: ["Active", "Inactive"], not designed yet
};

const StoriesToExport = {};

permutations.elementTags.forEach((elementTag) => {
	let storyName = elementTag;

	StoriesToExport[storyName] = () => {
		return buttonStoryTemplate({
			elementTag,
		});
	};
});

const elementTagSelector = (defaultValue) => {
	const label = "Element Tag";
	return radios(label, permutations.elementTags, defaultValue);
};

const buttonStoryTemplate = (options) => {
	// reassign the options based on knobs
	const elementTag = elementTagSelector(options.elementTag);

	const finalOptions = {
		elementTag,
	};

	return html`
		${backgroundOverride}
		${finalOptions.elementTag === "Anchor"
			? anchorTagTemplate(finalOptions)
			: finalOptions.elementTag === "Button"
			? buttonTagTemplate(finalOptions)
			: "Error: no element tag selected"}
	`;
};

const backgroundOverride = html`<style>
	body {
		background: #c5c7c7;
	}
</style>`;

const anchorTagTemplate = (options) => {
	return html`
		${backgroundOverride}
		<a class="button secondary-button" role="button">
			${text("Label", "Secondary Button")}
		</a>
	`;
};

const buttonTagTemplate = (options) => {
	return html`
		<button class="button secondary-button">
			${text("Label", "Secondary Button")}
		</button>
	`;
};

export default {
	decorators: [withKnobs],
	title: "Elements/Buttons/Secondary",
};

export const { Button, Anchor } = StoriesToExport;
