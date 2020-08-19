import html from "../../../.storybook/helpers/html";
import { TopicsCard } from "./topics-card.stories.js";
import topicsSlider from "./topics-slider.js";
import { useEffect } from "@storybook/client-api";

import { withKnobs } from "@storybook/addon-knobs";

export default { title: "Components/Topics Slider", decorators: [withKnobs] };

const TopicsSlider = () => {
	useEffect(topicsSlider);
	return html`<section class="topics-slider">
		<div class="stream__header">
			<h2 class="featured-vertical__heading">Heading</h2>
		</div>
		<div class="topics-slider-list js-topics-slider-list">
			${TopicsCard()} ${TopicsCard()} ${TopicsCard()} ${TopicsCard()}
			${TopicsCard()} ${TopicsCard()}
		</div>
	</section>`;
};

export { TopicsSlider };
