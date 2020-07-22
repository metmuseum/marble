import html from "../../../../.storybook/helpers/html";
import { text, radios } from "@storybook/addon-knobs";

// hopefully this remains self-documenting
const permutations = {
	elementTags: ["Anchor", "Button"],
	modes: {
		style: ["Filled", "Ghost"],
		size: ["Small", "Large"],
	},
	states: ["Active", "Inactive"],
};

const StoriesToExport = {};

permutations.elementTags.forEach((elementTag) => {
	permutations.modes.style.forEach((styleMode) => {
		permutations.modes.size.forEach((sizeMode) => {
			permutations.states.forEach((state) => {
				// let's name each story based on current options
				StoriesToExport[
					[elementTag, styleMode, sizeMode, state].join("")
				] = () => {
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

	if (finalOptions.elementTag === "Anchor") {
		return anchorTagTemplate(finalOptions);
	} else if (finalOptions.elementTag === "Button") {
		return buttonTagTemplate(finalOptions);
	}
};

const anchorTagTemplate = (options) => {
	return html`
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

// Ugh!! Javascript!! Y u no Reflection!?!?! (ﾉಥ益ಥ）ﾉ ┻━┻
// "Exports and imports are required to be statically analysable in ES6 modules"
// https://stackoverflow.com/a/35875379/3633109

// so let's just export a big object:
export default StoriesToExport;
