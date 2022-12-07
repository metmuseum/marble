import { html } from ".storybook/helpers";
import { useEffect } from "@storybook/client-api";
import jumpTojs from "./jump-to-banner.js";

export default { title: "Banner/Basic Jump to" };

export const BasicJumpTo = () => {

	useEffect(jumpTojs);
	return html`
	<div class="jump-to js-jump-to">
		<div class="jump-to__content">
			<span class="jump-to__instructions">Jump to:</span>
			<a href="#one" class="jump-to__link js-jump-to__link">Section 1</a>
			<a href="#two" class="jump-to__link js-jump-to__link">Section 2</a>
			<a href="#three" class="jump-to__link js-jump-to__link">Section 3</a>
			<a href="#four" class="jump-to__link js-jump-to__link">Section 4</a>
			<a href="#five" class="jump-to__link js-jump-to__link">Section 5</a>
		</div>
	</div>
	<div id="one" style="margin-top: 50vh;">
		Section 1
	</div>
	<div id="two" style="margin-top: 50vh;">
		Section 2
	</div>
	<div id="three" style="margin-top: 50vh;">
		Section 3
	</div>
	<div id="four" style="margin-top: 50vh;">
		Section 4
	</div>
	<div id="five" style="margin-top: 50vh;">
		Section 5
	</div>
	`;
};