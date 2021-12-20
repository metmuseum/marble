import { html, repeat } from "../../../.storybook/helpers";
import { TopicCard } from "./topic-card.stories.js";
import carousel, { flickityDefaults } from "../carousel/carousel.js";
import { useEffect } from "@storybook/client-api";

export default { title: "Components/Topics Slider" };

const TopicsSlider = (args) => {
	useEffect(() => { carousel(args); });

	return html`
	<section class="topics-slider">
		<div class="topics-slider__header">
			<h3>${args.heading}</h3>
		</div>
		<div class="topics-slider-list js-carousel carousel">
			${repeat(6, TopicCard(TopicCard.args))}
		</div>
	</section>`;
};

TopicsSlider.args = {
	heading: "Heading",
	...flickityDefaults
};

export { TopicsSlider };
