import html from "../../../../../.storybook/helpers/html";
import { withKnobs, text } from "@storybook/addon-knobs";
import "../../../../marble.scss";

export default {
	title: "Buttons/Primary/Filled/Anchor",
	decorators: [withKnobs],
};

export const LargeActive = () =>
	html`
		<a class="button primary-button primary-button--large" role="button">
			${text("Label", "Primary Button")}
		</a>
	`;

export const LargeInactive = () =>
	html`<a
		class="button primary-button primary-button--large"
		role="button"
		disabled
	>
		${text("Label", "Primary Button")}
	</a>`;

export const SmallActive = () =>
	html`
		<a class="button primary-button primary-button--large" role="button">
			${text("Label", "Primary Button")}
		</a>
	`;

export const SmallInactive = () =>
	html`<a
		class="button primary-button primary-button--large"
		role="button"
		disabled
	>
		${text("Label", "Primary Button")}
	</a>`;
