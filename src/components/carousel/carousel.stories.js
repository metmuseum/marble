import html from "../../../.storybook/helpers/html";
import {VideoSlide} from "./slide/carousel-slide.stories.js"
import carousel from "./carousel.js";
import { useEffect } from "@storybook/client-api";
import { text, withKnobs } from "@storybook/addon-knobs";

export default { title: "Components/Carousel", decorators: [withKnobs] };

const Carousel = () => {
	// useEffect(carousel);
	return html`
	<section class="carousel-wrapper">
    <div class="js-carousel carousel">
        ${VideoSlide()}
        ${VideoSlide()}
        ${VideoSlide()}
        ${VideoSlide()}
        ${VideoSlide()}
        ${VideoSlide()}
    </div>
	</section>`;
};

export { Carousel };
