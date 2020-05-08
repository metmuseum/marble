import html from "../../../.storybook/helpers/html";
import he from "he";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, boolean, radios } from "@storybook/addon-knobs";
import "./section-heading.scss";

export default {
	title: "Section Heading",
	decorators: [withA11y, withKnobs],
};

export const sectionHeading = () => {
	const inSitu = boolean("In Situ", false); // TODO: this just toggles .productive-component, what about expressive context?
	const context = radios(
		"Context",
		{
			Expressive: "expressive",
			Productive: "productive",
		},
		"expressive"
	);
	const textAlignment = radios(
		"Text Alignment",
		{
			Left: "left",
			Center: "center",
			Right: "right",
		},
		"center"
	);
	const header = text("Header", "Section Heading");
	const bodyCopyDefault =
		"Expressive body brief description expounding upon the header text. Expressive body brief description expounding upon the header text. Character limit with spaces is 270.";
	const bodyCopy = text("Body Copy", bodyCopyDefault);
	const CTA1 = text("CTA 1", "Become A Member");

	return html`
		<div
			class="section-heading section-heading--text-${textAlignment} ${inSitu
				? "productive-component"
				: ""}"
		>
			<h1 class="section-heading__heading ${context}">${header}</h1>
			<div>${he.decode(bodyCopy)}</div>
			<a class="section-heading__text-link" href="">${CTA1}</a>
		</div>
	`;
};
