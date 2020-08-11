import html from "../../../.storybook/helpers/html";
import scalingRuleWrapper from "../../../.storybook/helpers/scalingRuleWrapper";
import parentWrapper from "../../../.storybook/helpers/parentWrapper";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
	title: "Elements/Typography/Body",
	decorators: [withKnobs],
};

const pangram =
	"A wizard’s job is to vex chumps quickly in fog. Amazingly few discotheques provide jukeboxes.";

const paragraphMarkup = () => {
	return html`<p>${text("Text", pangram)}</p>`;
};

export const Paragraph = () => {
	return scalingRuleWrapper(paragraphMarkup);
};

export const ParagraphExpressiveBody = () => {
	return scalingRuleWrapper(() => {
		return parentWrapper(paragraphMarkup, "expressive-body");
	});
};

export const ParagraphShortBody = () => {
	return scalingRuleWrapper(() => {
		return parentWrapper(paragraphMarkup, "short-body");
	});
};

export const ParagraphSubtext = () => {
	return scalingRuleWrapper(() => {
		return parentWrapper(paragraphMarkup, "subtext");
	});
};

// TODO: what to do with these?
// p.description
// p.tag
// p.label
