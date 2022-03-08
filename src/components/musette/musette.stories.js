import { html } from ".storybook/helpers";

import { withKnobs } from "@storybook/addon-knobs";

export default { title: "Components/Musette", decorators: [withKnobs] };

const Musette = () => {
	return html`
	<div>A scroller</div>`;
};

export { Musette };