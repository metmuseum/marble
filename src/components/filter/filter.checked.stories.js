import { withKnobs } from "@storybook/addon-knobs";
import options from "./options";
import markup from "./markup";

export default {
	title: "Elements/Filters/Checked",
	decorators: [withKnobs],
};

const Checked = () => markup(options({ checked: true }));

const Active = () => markup(options({ checked: true, classHelpers: "active" }));
Active.storyName = ":active";

const Focus = () => markup(options({ checked: true, classHelpers: "focus" }));
Focus.storyName = ":focus";

const Hover = () => markup(options({ checked: true, classHelpers: "hover" }));
Hover.storyName = ":hover";

export { Checked, Active, Focus, Hover };
