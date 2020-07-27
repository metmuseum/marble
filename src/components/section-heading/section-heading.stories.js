import html from "../../../.storybook/helpers/html";
import exampleComponent from "../../../.storybook/helpers/exampleComponent";
import { withKnobs, text, boolean, radios } from "@storybook/addon-knobs";
import sectionHeadingMarkup from "./section-heading.html.js";

export default {
	title: "Section Heading",
	decorators: [withKnobs],
};

const options = () => {
	const bodyCopyDefault =
		"Expressive body brief description expounding upon the header text. Expressive body brief description expounding upon the header text. Character limit with spaces is 270.";
	return {
		inSitu: boolean("In Situ", false), // TODO: this just toggles .productive-component, what about expressive context?
		bodyCopy: text("Body Copy", bodyCopyDefault),
		context: radios(
			"Context",
			{
				Expressive: "expressive",
				Productive: "productive",
			},
			"expressive"
		),
		CTA1: text("CTA 1", "Become A Member"),
		header: text("Header", "Section Heading"),
		textAlignment: radios(
			"Text Alignment",
			{
				Left: "left",
				Center: "center",
				Right: "right",
			},
			"center"
		),
	};
};

export const SectionHeading = () => {
	return html`
		${options().inSitu ? exampleComponent() : ""}
		${sectionHeadingMarkup(options())}
		${options().inSitu ? exampleComponent() : ""}
	`;
};
