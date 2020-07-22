import html from "../../../.storybook/helpers/html";
import { withKnobs, text } from "@storybook/addon-knobs";
import "./ghost-button.scss";

export default {
	title: "Buttons/To Deprecate/Ghost/Button Tag",
	decorators: [withKnobs],
};

export const small = () =>
	html`<button class="ghost-button ghost-button--small">
		${text("Label", "Primary")}
	</button>`;

export const smallDisabled = () =>
	html`<button class="ghost-button ghost-button--small" disabled>
		${text("Label", "Disabled")}
	</button>`;

export const large = () =>
	html`<button class="ghost-button ghost-button--large">
		${text("Label", "Primary")}
	</button>`;

export const largeDisabled = () =>
	html`<button class="ghost-button ghost-button--large" disabled>
		${text("Label", "Disabled")}
	</button>`;
