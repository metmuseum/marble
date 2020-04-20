import html from "../../.storybook/helpers/html";
import { withKnobs, text } from "@storybook/addon-knobs";
import "./buttons.scss";

export default {
	title: "Tertiary Buttons",
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

// TODO: automated tests to ensure <button> and <a> styles are always identical.
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
