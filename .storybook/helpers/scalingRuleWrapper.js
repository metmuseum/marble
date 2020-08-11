import parentWrapper from "./parentWrapper";
import { radios } from "@storybook/addon-knobs";

const scalingRuleSelector = () => {
	return radios("Scaling Rule", ["Fluid", "Fixed-width"], "Fluid");
};

const scalingRuleWrapper = (innerStory) => {
	const scalingRule = scalingRuleSelector();
	return scalingRule == "Fluid"
		? innerStory()
		: scalingRule == "Fixed-width"
		? parentWrapper(innerStory, "fixed-width")
		: "No scaling rule selected";
};

export default scalingRuleWrapper;
