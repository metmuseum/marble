import html from "../../../../.storybook/helpers/html";
import { withKnobs, text, radios } from "@storybook/addon-knobs";
import backgroundOverride from "../../../../.storybook/helpers/backgroundOverride";
import "../_sb-only.scss";

export default {
	decorators: [withKnobs],
	title: "Elements/Buttons/Secondary",
	parameters: {
		backgrounds: { disable: true }, // TODO: hopefully Chromatic supports backgrounds soon
	},
};

const permutations = {
	elementTags: ["Button", "Anchor"],
	styles: ["Ghost-Light", "Ghost-Dark"],
	states: ["Active", "Inactive", "Focus", "Hover"],
};

const StoriesToExport = {
	AnchorDefault: () =>
		buttonStoryTemplate({ elementTag: "Anchor", styleMode: null }),
	ButtonDefault: () =>
		buttonStoryTemplate({ elementTag: "Button", styleMode: null }),
};

permutations.elementTags.forEach((elementTag) => {
	permutations.styles.forEach((styleMode) => {
		permutations.states.forEach((state) => {
			let storyName = [elementTag, styleMode.replace("-", ""), state].join("");

			StoriesToExport[storyName] = () => {
				return buttonStoryTemplate({
					elementTag,
					styleMode,
					state,
				});
			};
		});
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

const stateSelector = (defaultValue) => {
	const label = "State";
	return radios(label, permutations.states, defaultValue);
};

const buttonStoryTemplate = (options) => {
	// reassign the options based on knobs
	const elementTag = elementTagSelector(options.elementTag);
	const styleMode = styleSelector(options.styleMode);
	const state = stateSelector(options.state);
	const viewMode = radios("View As", ["Just the button", "Give it some breathing room"], "Give it some breathing room");

	const finalOptions = {
		elementTag,
		styleMode,
		state,
	};


	return html`
		${backgroundOverride()}

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
	let styleModifier = options?.styleMode
		? `secondary-button--${options.styleMode.toLowerCase()}`
		: "";

	return html`
		<a
			class="button secondary-button ${styleModifier}
			${options.state === "Hover" ? "_sb--hover" : ""}
			${options.state === "Focus" ? "_sb--focus" : ""}"
			role="button"
			tabindex="1"
			${options.state === "Inactive" ? "disabled" : ""}
		>
			${text("Label", "Secondary Button")}
		</a>
	`;
};

const buttonTagTemplate = (options) => {
	let styleModifier = options?.styleMode
		? `secondary-button--${options.styleMode.toLowerCase()}`
		: "";
	return html`
		<button
			class="button secondary-button ${styleModifier}
				${options.state === "Hover" ? "_sb--hover" : ""}
				${options.state === "Focus" ? "_sb--focus" : ""}"
			${options.state === "Inactive" ? "disabled" : ""}
		>
			${text("Label", "Secondary Button")}
		</button>
	`;
};

/* eslint storybook/story-exports: "off" */
export const {
	ButtonDefault,
	ButtonGhostLightActive,
	ButtonGhostLightFocus,
	ButtonGhostLightHover,
	ButtonGhostDarkActive,
	AnchorDefault,
	AnchorGhostLightActive,
	AnchorGhostLightFocus,
	AnchorGhostLightHover,
	AnchorGhostDarkActive,
} = StoriesToExport;
