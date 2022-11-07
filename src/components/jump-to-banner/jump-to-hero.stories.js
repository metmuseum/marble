import { html } from ".storybook/helpers";
import { useEffect } from "@storybook/client-api";
import jumpTojs from "./jump-to-banner.js";

export default { title: "Banner/Jump to Hero" };

export const JumpToHero = () => {

	useEffect(jumpTojs);
	return html`
	<h1>Jump to hero</h1>`;
};