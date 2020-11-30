import html from "../../../.storybook/helpers/html";
import { withKnobs, array } from "@storybook/addon-knobs";
import options from "./options";
import markup from "./markup";
import trigger from "./inline-modal-trigger-styled-as-filter";

export default {
	title: "Elements/Filters/Set",
	decorators: [withKnobs],
};

const defaultNames = [
	"Accessibility",
	"Virtual Events",
	"Performances",
	"Talks",
	"Workshops",
	"Members",
	"Family",
];

const Set = () => {
	const names = array("Labels", defaultNames);
	return html`
		<fieldset class="filter-set">
			${names
				.map((filterName) => markup(options({ label: filterName })))
				.join("")}
		</fieldset>
	`;
};

const WithTrigger = () => {
	const names = array("Labels", defaultNames);
	return html`
		<fieldset class="filter-set">
			${trigger()}
			${names
				.map((filterName) => markup(options({ label: filterName })))
				.join("")}
		</fieldset>
	`;
};

export { Set, WithTrigger };
