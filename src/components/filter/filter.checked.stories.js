import idHelper from "../../../.storybook/helpers/idHelper";
import { withKnobs } from "@storybook/addon-knobs";
import dataHelper from "./dataHelper";
import markup from "./markup";

export default {
	title: "Elements/Filters/Checked",
	decorators: [withKnobs],
};

const Checked = () => {
	const options = dataHelper({ checked: true });
	options.filterId = idHelper(options.label);
	return markup(options);
};

const Focus = () => {
	const options = dataHelper({ checked: true, classHelpers: "focus" });
	options.filterId = idHelper(options.label);
	return markup(options);
};
Focus.storyName = ":focus";

const Hover = () => {
	const options = dataHelper({ checked: false, classHelpers: "hover" });
	options.filterId = idHelper(options.label);
	return markup(options);
};
Hover.storyName = ":hover";

// hover
// focus
// active
// with Icon

export { Checked, Focus, Hover };
