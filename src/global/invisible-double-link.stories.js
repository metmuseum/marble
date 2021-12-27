import { html } from "../../.storybook/helpers";
import greekHall from "../../.storybook//assets/images/greek-hall/1x1/index.js";

export default {
	title: "Accessibility/Double Link Solution"
};

export const Correct = () => html`<div style="width: 300px; margin: 20px;">
	<div style="position: relative;">
		<a href="/#correct" class="invisible-redundant-link" aria-hidden="true" tabindex="-1"></a>
		<img src="${greekHall.srcSet.fallback}" alt="this is the text you should hear for the greek hall image"
			style="width: 100%;">
	</div>
	<h3><a href="/#correct">Correct</a></h3>
	<p>Top link has correct attributes and image alt can be read instead of a redundant link.</p>
</div>`;

export const IncorrectAriaHidden = () => html`<div style="width: 300px; margin: 20px;">
	<div style="position: relative;">
		<a href="/#incorrect" class="invisible-redundant-link" tabindex="-1"></a>
		<img src="${greekHall.srcSet.fallback}" alt="this is the text you should hear for the greek hall image"
			style="width: 100%;">
	</div>
	<h3><a href="/#incorrect">Incorrect</a></h3>
	<p>Top link has correct attributes and image alt can be read instead of a redundant link.</p>
</div>`;

IncorrectAriaHidden.story = {
	name: "Incorrect Aria-Hidden"
};

export const IncorrectTabIndex = () => html`<div style="width: 300px; margin: 20px;">
	<div style="position: relative;">
		<a href="/#incorrect" class="invisible-redundant-link" aria-hidden="true"></a>
		<img src="${greekHall.srcSet.fallback}" alt="this is the text you should hear for the greek hall image"
			style="width: 100%;">
	</div>
	<h3><a href="/#incorrect">Incorrect</a></h3>
	<p>Top link has correct attributes and image alt can be read instead of a redundant link.</p>
</div>`;



