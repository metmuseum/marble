import html from "../../../.storybook/helpers/html";
import { CarouselSlide } from "./slide/carousel-slide.stories.js";
import carousel, { flickityDefaults } from "./carousel.js";
import { useEffect } from "@storybook/client-api";

export default { title: "Carousel/Carousel" };

const mix = ["", CarouselSlide.args.video, CarouselSlide.args.video, "", "", "", "", "", "", "", "", "", "", "", CarouselSlide.args.video, CarouselSlide.args.video, CarouselSlide.args.video];

export const Carousel = (args) => {
	useEffect(() => { carousel(args); });

	return html`
	<section class="carousel-wrapper">
		<div class="js-carousel carousel">
		${mix.map((video) => CarouselSlide({ ...CarouselSlide.args, video: video })).join("\n")}
		</div>
	</section>`;
};

Carousel.args = flickityDefaults;
