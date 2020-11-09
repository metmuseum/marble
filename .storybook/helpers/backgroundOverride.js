import html from "./html";
import colorVariables from "../../src/base/_colors.scss";

// This is only needed because Chromatic does not (yet) support snapshot tests that respect the backgrounds add-on

const backgroundOverride = (color = colorVariables.colorGrey500) => html`<style>
	.sb-show-main {
		background: ${color};
	}
</style>`;

export default backgroundOverride;
