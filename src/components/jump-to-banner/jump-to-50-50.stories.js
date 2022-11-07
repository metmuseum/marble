import { html } from ".storybook/helpers";
import { useEffect } from "@storybook/client-api";
import jumpTojs from "./jump-to-banner.js";

export default { title: "Banner/Jump to 50-50" };

export const JumpToFiftyFity = () => {

	useEffect(jumpTojs);
	return html`
	<h1>Jump to 50/50</h1>`;
};