import html from "../../../.storybook/helpers/html";
import { withKnobs, text, radios } from "@storybook/addon-knobs";
import backgroundOverride from "../../../.storybook/helpers/backgroundOverride";

export default {
	decorators: [withKnobs],
	title: "Elements/Buttons/Secondary",
	parameters: {
		backgrounds: null, // TODO: hopefully Chromatic supports backgrounds soon
	},
};

const permutations = {
	elementTags: ["Button", "Anchor"],
	styles: ["Ghost-Light", "Ghost-Dark"],
};

const StoriesToExport = {
	Anchor: () => buttonStoryTemplate({ elementTag: "Anchor", styleMode: null }),
	Button: () => buttonStoryTemplate({ elementTag: "Button", styleMode: null }),
};

permutations.elementTags.forEach((elementTag) => {
	permutations.styles.forEach((styleMode) => {
		let storyName = [elementTag, styleMode.replace("-", "")].join("");

		StoriesToExport[storyName] = () => {
			return buttonStoryTemplate({
				elementTag,
				styleMode,
			});
		};
	});
});

const elementTagSelector = (defaultValue) => {
	const label = "Element Tag";
	return radios(label, permutations.elementTags, defaultValue);
};

const styleSelector = (defaultValue) => {
	const label = "Style Modes";
	return radios(label, permutations.styles, defaultValue);
};

const buttonStoryTemplate = (options) => {
	// reassign the options based on knobs
	const elementTag = elementTagSelector(options.elementTag);
	const styleMode = styleSelector(options.styleMode);

	const finalOptions = {
		elementTag,
		styleMode,
	};

	return html`
		${finalOptions.elementTag === "Anchor"
			? anchorTagTemplate(finalOptions)
			: finalOptions.elementTag === "Button"
			? buttonTagTemplate(finalOptions)
			: "Error: no element tag selected"}
	`;
};

const anchorTagTemplate = (options) => {
	let styleModifier = options?.styleMode
		? `secondary-button--${options.styleMode.toLowerCase()}`
		: "";

	return html`
		<a class="button secondary-button ${styleModifier}" role="button">
			${text("Label", "Secondary Button")}
		</a>
	`;
};

const buttonTagTemplate = (options) => {
	let styleModifier = options?.styleMode
		? `secondary-button--${options.styleMode.toLowerCase()}`
		: "";
	return html`
		${backgroundOverride()}
		<button class="button secondary-button ${styleModifier}">
			${text("Label", "Secondary Button")}
		</button>
	`;
};

export const {
	Button,
	ButtonGhostLight,
	ButtonGhostDark,
	Anchor,
	AnchorGhostLight,
	AnchorGhostDark,
} = StoriesToExport;
