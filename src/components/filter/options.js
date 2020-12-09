import { text, boolean } from "@storybook/addon-knobs";

export default ({ checked, classHelpers, label }) => {
	const useKnobForChecked = typeof checked !== "undefined";

	return {
		checked: useKnobForChecked ? boolean("Checked?", checked) : false,
		classHelpers: classHelpers || "",
		filterName: "example-group",
		label: label || text("Label", "The Met Fifth Avenue"),
	};
};
