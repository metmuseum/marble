import { html } from ".storybook/helpers";

export default {
	title: "Accessibility/Screen Reader Only"
};

const ScreenReaderOnly = () => html`<div class="screen-reader-only">
  This text should not be visible, but should be announced by a screenreader.
</div>`;

export { ScreenReaderOnly };
