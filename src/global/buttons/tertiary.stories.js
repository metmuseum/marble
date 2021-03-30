import html from "../../../.storybook/helpers/html";
import { withKnobs, text, radios } from "@storybook/addon-knobs";

export default {
	title: "Elements/Buttons/Tertiary",
	decorators: [withKnobs],
};

const permutations = {
	elementTags: ["Button", "Anchor"],
	states: ["Active", "Inactive"],
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

	return html`
		${finalOptions.elementTag === "Anchor"
			? anchorTagTemplate(finalOptions)
			: finalOptions.elementTag === "Button"
			? buttonTagTemplate(finalOptions)
			: "Error: no element tag selected"}
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
		class="button tertiary-button"
		${options.state === "Inactive" ? "disabled" : ""}
	>
		${text("Label", "Tertiary")}
	</button> `;

const anchorTagTemplate = (options) =>
	html`
		<a
			role="button"
			tabindex="0"
			class="button tertiary-button"
			${options.state === "Inactive" ? "disabled" : ""}
		>
			${text("Label", "Anchor Tag Styled As Tertiary Button")}
		</a>
	`;

export const {
	ButtonActive,
	ButtonInactive,
	AnchorActive,
	AnchorInactive,
} = StoriesToExport;
