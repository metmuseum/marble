import html from "../../../.storybook/helpers/html";
import { withKnobs, boolean, array } from "@storybook/addon-knobs";
import options from "./options";
import markup from "./markup";
import trigger from "./inline-modal-trigger-styled-as-filter";

export default {
	title: "Components/Filter Set",
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
		<div class="filter-set">
			<fieldset class="filter-set__fieldset">
				<legend class="screen-reader-only">
					Select optional categories to filter results
				</legend>
				${names
		.map((filterName) => markup(options({ label: filterName })))
		.join("")}
			</fieldset>
		</div>
	`;
};

const WithTrigger = () => {
	const names = array("Labels", defaultNames);
	const triggedOpened = boolean("Trigger Opened", false);
	return html`
		<div class="filter-set">
			${trigger(triggedOpened)}
			<fieldset class="filter-set__fieldset">
				<legend class="screen-reader-only">
					Select optional categories to filter results
				</legend>
				${names
		.map((filterName) => markup(options({ label: filterName })))
		.join("")}
			</fieldset>
		</div>
	`;
};

export { Set, WithTrigger };
