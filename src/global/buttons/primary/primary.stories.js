import html from "../../../../.storybook/helpers/html";
import { withKnobs, text, radios } from "@storybook/addon-knobs";
import backgroundOverride from "../../../../.storybook/helpers/backgroundOverride";
import "../_sb-only.scss";

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
		size: ["X-small", "Small", "Large"],
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
					sizeMode.replace("-", ""),
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
					title: "Elements/Buttons/Primary",
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
	const viewMode = radios("View As", ["Just the button", "Give it some breathing room"], "Give it some breathing room");

	const finalOptions = {
		elementTag,
		styleMode,
		sizeMode,
		state,
	};

	return html`
		${viewMode == "Give it some breathing room" ? "<div class='_sb-breathing-room'>" : ""}

		${finalOptions.elementTag === "Anchor"
		? anchorTagTemplate(finalOptions)
		: finalOptions.elementTag === "Button"
			? buttonTagTemplate(finalOptions)
			: "Error: no element tag selected"}

		${viewMode == "Give it some breathing room" ? "</div>" : ""}
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

/* eslint storybook/story-exports: "off" */
// javascript why u no have metaprogramming for this 😭
export const {
	//// buttons
	// filled
	ButtonFilledXsmallActive,
	ButtonFilledXsmallInactive,
	ButtonFilledXsmallFocus,
	ButtonFilledXsmallHover,

	ButtonFilledSmallActive,
	ButtonFilledSmallInactive,
	ButtonFilledSmallFocus,
	ButtonFilledSmallHover,

	ButtonFilledLargeActive,
	ButtonFilledLargeInactive,
	ButtonFilledLargeFocus,
	ButtonFilledLargeHover,

	// ghost light
	ButtonGhostLightXsmallActive,
	ButtonGhostLightXsmallInactive,
	ButtonGhostLightXsmallFocus,
	ButtonGhostLightXsmallHover,

	ButtonGhostLightSmallActive,
	ButtonGhostLightSmallInactive,
	ButtonGhostLightSmallFocus,
	ButtonGhostLightSmallHover,

	ButtonGhostLightLargeActive,
	ButtonGhostLightLargeInactive,
	ButtonGhostLightLargeFocus,
	ButtonGhostLightLargeHover,

	// ghost dark
	ButtonGhostDarkXsmallActive,
	ButtonGhostDarkXsmallInactive,
	ButtonGhostDarkXsmallFocus,
	ButtonGhostDarkXsmallHover,

	ButtonGhostDarkSmallActive,
	ButtonGhostDarkSmallInactive,
	ButtonGhostDarkSmallFocus,
	ButtonGhostDarkSmallHover,

	ButtonGhostDarkLargeActive,
	ButtonGhostDarkLargeInactive,
	ButtonGhostDarkLargeFocus,
	ButtonGhostDarkLargeHover,

	//// anchors
	// filled
	AnchorFilledXsmallActive,
	AnchorFilledXsmallInactive,
	AnchorFilledXsmallFocus,
	AnchorFilledXsmallHover,

	AnchorFilledSmallActive,
	AnchorFilledSmallInactive,
	AnchorFilledSmallFocus,
	AnchorFilledSmallHover,

	AnchorFilledLargeActive,
	AnchorFilledLargeInactive,
	AnchorFilledLargeFocus,
	AnchorFilledLargeHover,

	// ghost light
	AnchorGhostLightXsmallActive,
	AnchorGhostLightXsmallInactive,
	AnchorGhostLightXsmallFocus,
	AnchorGhostLightXsmallHover,

	AnchorGhostLightSmallActive,
	AnchorGhostLightSmallInactive,
	AnchorGhostLightSmallFocus,
	AnchorGhostLightSmallHover,

	AnchorGhostLightLargeActive,
	AnchorGhostLightLargeInactive,
	AnchorGhostLightLargeFocus,
	AnchorGhostLightLargeHover,

	// ghost dark
	AnchorGhostDarkXsmallActive,
	AnchorGhostDarkXsmallInactive,
	AnchorGhostDarkXsmallFocus,
	AnchorGhostDarkXsmallHover,

	AnchorGhostDarkSmallActive,
	AnchorGhostDarkSmallInactive,
	AnchorGhostDarkSmallFocus,
	AnchorGhostDarkSmallHover,

	AnchorGhostDarkLargeActive,
	AnchorGhostDarkLargeInactive,
	AnchorGhostDarkLargeHover,
	AnchorGhostDarkLargeFocus,
} = StoriesToExport;
