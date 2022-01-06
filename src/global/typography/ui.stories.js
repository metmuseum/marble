import { html } from ".storybook/helpers";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
	title: "Elements/UI",
	decorators: [withKnobs],
};

const Tag = () => {
	return html`<span class="tag">${text("Text", "tAg TeXt")}</span>`;
};

export { Tag };
