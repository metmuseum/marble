import html from "../../../.storybook/helpers/html";
import exampleComponent from "../../../.storybook/helpers/exampleComponent";
import he from "he";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, boolean, radios } from "@storybook/addon-knobs";
import "./section-heading.scss";

export default {
	title: "Section Heading",
	decorators: [withA11y, withKnobs],
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

const sectionHeadingMarkup = ({
	inSitu,
	bodyCopy,
	context,
	CTA1,
	header,
	textAlignment,
}) => {
	return html`<div
		class="section-heading section-heading--text-${textAlignment} ${inSitu
			? "productive-component"
			: ""}"
	>
		<h2 class="section-heading__heading ${context}">
			${header}
		</h2>
		<div>${he.decode(bodyCopy)}</div>
		<a
			class="button--tertiary section-heading__text-link"
			role="button"
			tabindex="0"
			href="#"
		>
			${CTA1}</a
		>
	</div>`;
};

export const SectionHeading = () => {
	return html`
		${options().inSitu ? exampleComponent() : ""}
		${sectionHeadingMarkup(options())}
		${options().inSitu ? exampleComponent() : ""}
	`;
};
