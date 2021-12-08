import html from "../../../../.storybook/helpers/html";
import { withKnobs, text, radios } from "@storybook/addon-knobs";
import "../_sb-only.scss";

export default {
	title: "Elements/Buttons/Tertiary",
	decorators: [withKnobs],
};

const permutations = {
	elementTags: ["Button", "Anchor"],
	states: ["Active", "Inactive", "Focus", "Hover"],
};

const StoriesToExport = {};

permutations.elementTags.forEach((elementTag) => {
	permutations.states.forEach((state) => {
		let storyName = [elementTag, state].join("");

		StoriesToExport[storyName] = () => {
			return buttonStoryTemplate({
				elementTag,
				state,
			});
		};
	});
});

const buttonStoryTemplate = (options) => {
	// reassign the options based on knobs
	const elementTag = elementTagSelector(options.elementTag);
	const state = stateSelector(options.state);

	const finalOptions = {
		elementTag,
		state,
	};

	const viewMode = radios("View As", ["Just the button", "Give it some breathing room"], "Give it some breathing room");

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

const elementTagSelector = (defaultValue) => {
	const label = "Element Tag";
	return radios(label, permutations.elementTags, defaultValue);
};

const stateSelector = (defaultValue) => {
	const label = "State";
	return radios(label, permutations.states, defaultValue);
};

const buttonTagTemplate = (options) =>
	html`<button
		class="button tertiary-button
			${options.state === "Hover" ? "_sb--hover" : ""}
			${options.state === "Focus" ? "_sb--focus" : ""}"
		${options.state === "Inactive" ? "disabled" : ""}
	>
		${text("Label", "Tertiary")}
	</button> `;

const anchorTagTemplate = (options) =>
	html`
		<a
			role="button"
			tabindex="0"
			class="button tertiary-button
				${options.state === "Hover" ? "_sb--hover" : ""}
				${options.state === "Focus" ? "_sb--focus" : ""}"
			${options.state === "Inactive" ? "disabled" : ""}
		>
			${text("Label", "Anchor Tag Styled As Tertiary Button")}
		</a>
	`;

/* eslint storybook/story-exports: "off" */
export const {
	ButtonActive,
	ButtonInactive,
	ButtonFocus,
	ButtonHover,
	AnchorActive,
	AnchorInactive,
	AnchorFocus,
	AnchorHover,
} = StoriesToExport;
