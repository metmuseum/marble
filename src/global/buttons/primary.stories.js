import html from "../../../.storybook/helpers/html";
import { withKnobs, text, radios } from "@storybook/addon-knobs";
import backgroundOverride from "../../../.storybook/helpers/backgroundOverride";

export default {
	decorators: [withKnobs],
	title: "Elements/Buttons/Primary",
	parameters: {
		backgrounds: { disable: true }, // TODO: hopefully Chromatic supports backgrounds soon
	},
};

const permutations = {
	elementTags: ["Button", "Anchor"],
	modes: {
		style: ["Filled", "Ghost-Light", "Ghost-Dark"],
		size: ["Small", "Large"],
	},
	states: ["Active", "Inactive", "Focus", "Hover"],
};

const StoriesToExport = {};

// Programmatically make these stories :)
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

				StoriesToExport[storyName].story = {
					name: [elementTag, styleMode, sizeMode, state].join(" "),
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
		${finalOptions.elementTag === "Anchor"
			? anchorTagTemplate(finalOptions)
			: finalOptions.elementTag === "Button"
			? buttonTagTemplate(finalOptions)
			: "Error: no element tag selected"}
	`;
};

const anchorTagTemplate = (options) => {
	return html`
		${backgroundOverride()}
		<a
			class="button primary-button
			primary-button--${options.sizeMode.toLowerCase()}
			primary-button--${options.styleMode.toLowerCase()}
			${options.state === "Hover" ? "_sb--hover" : ""}
			${options.state === "Focus" ? "_sb--focus" : ""}"
			role="button"
			tabindex="1"
			${options.state === "Inactive" ? "disabled" : ""}
		>
			${text("Label", "Primary Button")}
		</a>
	`;
};

const buttonTagTemplate = (options) => {
	return html`
		${backgroundOverride()}
		<button
			class="button primary-button
			primary-button--${options.sizeMode.toLowerCase()}
			primary-button--${options.styleMode.toLowerCase()}
			${options.state === "Hover" ? "_sb--hover" : ""}
			${options.state === "Focus" ? "_sb--focus" : ""}"
			${options.state === "Inactive" ? "disabled" : ""}
		>
			${text("Label", "Primary Button")}
		</button>
	`;
};

// javascript why u no have metaprogramming for this 😭
export const {
	ButtonFilledSmallActive,
	ButtonFilledSmallInactive,
	ButtonFilledSmallFocus,
	ButtonFilledSmallHover,

	ButtonGhostLightSmallActive,
	ButtonGhostLightSmallInactive,
	ButtonGhostLightSmallFocus,
	ButtonGhostLightSmallHover,

	ButtonGhostDarkSmallActive,
	ButtonGhostDarkSmallInactive,
	ButtonGhostDarkSmallFocus,
	ButtonGhostDarkSmallHover,

	ButtonFilledLargeActive,
	ButtonFilledLargeInactive,
	ButtonFilledLargeFocus,
	ButtonFilledLargeHover,

	ButtonGhostLightLargeActive,
	ButtonGhostLightLargeInactive,
	ButtonGhostLightLargeFocus,
	ButtonGhostLightLargeHover,

	ButtonGhostDarkLargeActive,
	ButtonGhostDarkLargeInactive,
	ButtonGhostDarkLargeFocus,
	ButtonGhostDarkLargeHover,

	AnchorFilledSmallActive,
	AnchorFilledSmallInactive,
	AnchorFilledSmallFocus,
	AnchorFilledSmallHover,

	AnchorGhostLightSmallActive,
	AnchorGhostLightSmallInactive,
	AnchorGhostLightSmallFocus,
	AnchorGhostLightSmallHover,

	AnchorGhostDarkSmallActive,
	AnchorGhostDarkSmallInactive,
	AnchorGhostDarkSmallFocus,
	AnchorGhostDarkSmallHover,

	AnchorFilledLargeActive,
	AnchorFilledLargeInactive,
	AnchorFilledLargeFocus,
	AnchorFilledLargeHover,

	AnchorGhostLightLargeActive,
	AnchorGhostLightLargeInactive,
	AnchorGhostLightLargeFocus,
	AnchorGhostLightLargeHover,

	AnchorGhostDarkLargeActive,
	AnchorGhostDarkLargeInactive,
	AnchorGhostDarkLargeHover,
	AnchorGhostDarkLargeFocus,
} = StoriesToExport;
