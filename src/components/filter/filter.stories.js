import html from "../../../.storybook/helpers/html";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
	title: "Filters",
	decorators: [withKnobs],
};

const idHelper = (string) => string.replace(/\W/g, "-");

const dataHelper = ({ checked }) => {
	return {
		checked: boolean("Checked?", checked),
		filterName: "example-group",
		label: text("Label", "The Met Fifth Avenue"),
	};
};

const markup = ({ checked, filterId, filterName, label }) => {
	return html`<div class="filter">
		<input
			name=${filterName}
			type="checkbox"
			class="attendables-filter__input"
			${checked ? "checked" : ""}
			id="${filterId}"
		/>
		<label for="${filterId}" class="attendables-filter__label">
			${label}
		</label>
	</div>`;
};

const Checked = () => {
	const options = dataHelper({ checked: true });
	options.filterId = idHelper(options.label);
	return markup(options);
};

const Unchecked = () => {
	const options = dataHelper({ checked: false });
	options.filterId = idHelper(options.label);
	return markup(options);
};

export { Checked, Unchecked };
