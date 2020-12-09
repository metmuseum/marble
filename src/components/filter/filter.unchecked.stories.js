import { withKnobs } from "@storybook/addon-knobs";
import options from "./options";
import markup from "./markup";

export default {
	title: "Elements/Filters/Unchecked",
	decorators: [withKnobs],
};

const Unchecked = () => markup(options({ checked: false }));

const Active = () =>
	markup(options({ checked: false, classHelpers: "active" }));
Active.storyName = ":active";

const Focus = () => markup(options({ checked: false, classHelpers: "focus" }));
Focus.storyName = ":focus";

const Hover = () => markup(options({ checked: false, classHelpers: "hover" }));
Hover.storyName = ":hover";

export { Unchecked, Active, Focus, Hover };
