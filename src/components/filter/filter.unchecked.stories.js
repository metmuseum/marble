import idHelper from "../../../.storybook/helpers/idHelper";
import { withKnobs } from "@storybook/addon-knobs";
import dataHelper from "./dataHelper";
import markup from "./markup";

export default {
	title: "Elements/Filters/Unchecked",
	decorators: [withKnobs],
};

const Unchecked = () => {
	const options = dataHelper({ checked: false });
	options.filterId = idHelper(options.label);
	return markup(options);
};
const Focus = () => {
	const options = dataHelper({ checked: false, classHelpers: "focus" });
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

const Active = () => {
	const options = dataHelper({ checked: false, classHelpers: "active" });
	options.filterId = idHelper(options.label);
	return markup(options);
};
Active.storyName = ":active";

// hover
// focus
// active
// with Icon

export { Unchecked, Focus, Hover, Active };
