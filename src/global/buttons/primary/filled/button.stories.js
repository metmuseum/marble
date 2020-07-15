import html from "../../../../../.storybook/helpers/html";
import { withKnobs, text, radios, boolean } from "@storybook/addon-knobs";
import "../../../../marble.scss";

const sizeSelector = (defaultValue = "large") => {
	const label = "Size Modes";
	const options = {
		Small: "small",
		Large: "large",
	};

	return radios(label, options, defaultValue);
};

const stateSelector = (defaultValue = "active") => {
	const label = "State";
	const options = {
		Active: "active",
		Inactive: "inactive",
	};
	return radios(label, options, defaultValue);
};

export default {
	title: "Buttons/Primary/Filled/Button Tag",
	decorators: [withKnobs],
};

export const LargeActive = () => {
	const sizeClass = `primary-button--${sizeSelector()}`;
	const disabledOption = stateSelector() === "inactive" ? "disabled" : "";
	return html`<button
		class="button primary-button ${sizeClass}"
		${disabledOption}
	>
		${text("Label", "Primary")}
	</button>`;
};

export const LargeInactive = () => {
	const sizeClass = `primary-button--${sizeSelector()}`;
	const disabledOption =
		stateSelector("inactive") === "inactive" ? "disabled" : "";
	return html`<button
		class="button primary-button ${sizeClass}"
		${disabledOption}
	>
		${text("Label", "Primary")}
	</button>`;
};

export const SmallActive = () => {
	const sizeClass = `primary-button--${sizeSelector("small")}`;
	const disabledOption = stateSelector() === "inactive" ? "disabled" : "";
	return html`<button
		class="button primary-button ${sizeClass}"
		${disabledOption}
	>
		${text("Label", "Primary")}
	</button>`;
};

export const SmallInactive = () => {
	const sizeClass = `primary-button--${sizeSelector("small")}`;
	const disabledOption =
		stateSelector("inactive") === "inactive" ? "disabled" : "";
	return html`<button
		class="button primary-button ${sizeClass}"
		${disabledOption}
	>
		${text("Label", "Primary")}
	</button>`;
};
