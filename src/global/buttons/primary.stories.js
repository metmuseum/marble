import html from "../../../.storybook/helpers/html";
import { withKnobs, text, radios } from "@storybook/addon-knobs";

// hopefully this remains self-documenting
const permutations = {
	elementTags: ["Button", "Anchor"],
	modes: {
		style: ["Filled", "Ghost-Dark", "Ghost-Light"],
		size: ["Small", "Large"],
	},
	states: ["Active", "Inactive"],
};

const StoriesToExport = {};

permutations.elementTags.forEach((elementTag) => {
	permutations.modes.style.forEach((styleMode) => {
		permutations.modes.size.forEach((sizeMode) => {
			permutations.states.forEach((state) => {
				let storyName = [
					elementTag,
					styleMode.replace("-", ""),
					sizeMode,
					state,
				].join("");

				StoriesToExport[storyName] = () => {
					return buttonStoryTemplate({
						elementTag,
						styleMode,
						sizeMode,
						state,
					});
				};
			});
		});
	});
});

const elementTagSelector = (defaultValue) => {
	const label = "Element Tag";
	return radios(label, permutations.elementTags, defaultValue);
};

const styleSelector = (defaultValue) => {
	const label = "Style Modes";
	return radios(label, permutations.modes.style, defaultValue);
};

const sizeSelector = (defaultValue) => {
	const label = "Size Modes";
	return radios(label, permutations.modes.size, defaultValue);
};

const stateSelector = (defaultValue) => {
	const label = "State";
	return radios(label, permutations.states, defaultValue);
};

const buttonStoryTemplate = (options) => {
	// reassign the options based on knobs
	const elementTag = elementTagSelector(options.elementTag);
	const styleMode = styleSelector(options.styleMode);
	const sizeMode = sizeSelector(options.sizeMode);
	const state = stateSelector(options.state);

	const finalOptions = {
		elementTag,
		styleMode,
		sizeMode,
		state,
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
		<a
			class="button primary-button
			primary-button--${options.sizeMode.toLowerCase()}
			primary-button--${options.styleMode.toLowerCase()}"
			role="button"
			${options.state === "Inactive" ? "disabled" : ""}
		>
			${text("Label", "Primary Button")}
		</a>
	`;
};

const buttonTagTemplate = (options) => {
	return html`
		<button
			class="button primary-button
			primary-button--${options.sizeMode.toLowerCase()}
			primary-button--${options.styleMode.toLowerCase()}"
			${options.state === "Inactive" ? "disabled" : ""}
		>
			${text("Label", "Primary Button")}
		</button>
	`;
};

export default {
	decorators: [withKnobs],
	title: "Elements/Buttons/Primary",
};

export const {
	ButtonFilledSmallActive,
	ButtonFilledSmallInactive,
	ButtonGhostLightSmallActive,
	ButtonGhostLightSmallInactive,
	ButtonGhostDarkSmallActive,
	ButtonGhostDarkSmallInactive,
	ButtonFilledLargeActive,
	ButtonFilledLargeInactive,
	ButtonGhostLightLargeActive,
	ButtonGhostLightLargeInactive,
	ButtonGhostDarkLargeActive,
	ButtonGhostDarkLargeInactive,
	AnchorFilledSmallActive,
	AnchorFilledSmallInactive,
	AnchorGhostLightSmallActive,
	AnchorGhostLightSmallInactive,
	AnchorGhostDarkSmallActive,
	AnchorGhostDarkSmallInactive,
	AnchorFilledLargeActive,
	AnchorFilledLargeInactive,
	AnchorGhostLightLargeActive,
	AnchorGhostLightLargeInactive,
	AnchorGhostDarkLargeActive,
	AnchorGhostDarkLargeInactive,
} = StoriesToExport;
