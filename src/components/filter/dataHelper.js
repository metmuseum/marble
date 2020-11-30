import { text, boolean } from "@storybook/addon-knobs";

export default ({ checked, classHelpers }) => {
	return {
		checked: boolean("Checked?", checked),
		classHelpers: classHelpers || "",
		filterName: "example-group",
		label: text("Label", "The Met Fifth Avenue"),
	};
};
