import html from "../../../.storybook/helpers/html";
import {CarouselSlide} from "./slide/carousel-slide.stories.js"
import carousel from "./carousel.js";
import { useEffect } from "@storybook/client-api";
import { text, withKnobs } from "@storybook/addon-knobs";

export default { title: "Carousel/Carousel", decorators: [withKnobs] };

const Carousel = () => {
	useEffect(carousel);
	return html`
	<section class="carousel-wrapper">
    <div class="js-carousel carousel">
        ${CarouselSlide(false)}
        ${CarouselSlide(true)}
        ${CarouselSlide(true)}
        ${CarouselSlide(false)}
        ${CarouselSlide(true)}
        ${CarouselSlide(true)}
        ${CarouselSlide(true)}
    </div>
	</section>`;
};

export { Carousel };
