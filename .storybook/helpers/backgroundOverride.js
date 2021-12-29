import html from "./html";
import scssExports from "../../src/global/exports.scss";

// This is only needed because Chromatic does not (yet) support snapshot tests that respect the backgrounds add-on

const backgroundOverride = (color = scssExports.colorGrey900) => html`<style>
	.sb-show-main {
		background: ${color};
	}
</style>`;

export default backgroundOverride;
