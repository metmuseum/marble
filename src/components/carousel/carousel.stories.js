import { html } from ".storybook/helpers";
import { CarouselSlide } from "./slide/carousel-slide.stories.js";
import carousel, { flickityDefaults } from "./carousel.js";
import { useEffect } from "@storybook/client-api";

export default { title: "Carousel/Carousel" };

const mix = ["", CarouselSlide.args.video, CarouselSlide.args.video, "", "", "", "", "", "", "", "", "", "", "", CarouselSlide.args.video, CarouselSlide.args.video, CarouselSlide.args.video];

export const Carousel = (args) => {
	useEffect(() => { carousel(args); });
	const slides = mix.map((video, index) => CarouselSlide({ ...CarouselSlide.args, video, index })).join("\n");

	return html`
	<section class="carousel-wrapper">
		<div class="js-carousel carousel">
			${slides}
		</div>
	</section>`;
};

Carousel.args = flickityDefaults;
