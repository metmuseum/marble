import html from "../../../../../.storybook/helpers/html";
import { withKnobs, text } from "@storybook/addon-knobs";
import "../../../../marble.scss";

export default {
	title: "Buttons/Primary/Filled/Button Tag",
	decorators: [withKnobs],
};

export const LargeActive = () =>
	html`<button class="button primary-button primary-button--large">
		${text("Label", "Primary Button")}
	</button>`;

export const LargeInactive = () =>
	html`<button class="button primary-button primary-button--large" disabled>
		${text("Label", "Primary Button")}
	</button>`;
