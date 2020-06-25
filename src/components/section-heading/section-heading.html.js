import html from "../../../.storybook/helpers/html";
import he from "he";

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

export default sectionHeadingMarkup;
