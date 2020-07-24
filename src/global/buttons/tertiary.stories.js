import html from "../../../.storybook/helpers/html";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
	title: "Elements/Buttons/Tertiary",
	decorators: [withKnobs],
};

export const tertiary = () =>
	html`<button class="button--tertiary">
			${text("Label", "Tertiary")}
		</button>
		<br />`;

export const tertiaryDisabled = () =>
	html`
		<button class="button--tertiary" disabled>
			${text("Label", "Tertiary Disabled")}
		</button>
		<br />
	`;

export const anchorTagTertiaryButton = () =>
	html`
		<a role="button" tabindex="0" class="button--tertiary">
			${text("Label", "Anchor Tag Styled As Tertiary Button")}
		</a>
		<br />
	`;

export const anchorTagTertiaryButtonDisabled = () =>
	html`
		<a role="button" tabindex="0" class="button--tertiary" disabled>
			${text("Label", "Anchor Tag Styled As Tertiary Button Disabled")}
		</a>
	`;
