import { html } from ".storybook/helpers";
import { CarouselSlide } from "./slide/carousel-slide.stories.js";
import carousel, { flickityDefaults } from "./carousel.js";
import { useEffect } from "@storybook/client-api";

export default { title: "Carousel/Carousel" };

const mix = ["", CarouselSlide.args.video, CarouselSlide.args.video, "", "", "", "", "", "", "", "", "", "", "", CarouselSlide.args.video, CarouselSlide.args.video, CarouselSlide.args.video];

export const CarouselSameSizeItems = (args) => {
	useEffect(() => { carousel(args); });
	const slides = mix.map((video, index) => CarouselSlide({ ...CarouselSlide.args, video, index })).join("\n");

	return html`
	<section class="carousel-wrapper">
		<div class="js-carousel carousel">
			${slides}
		</div>
	</section>`;
};

export const CarouselVariableWidth = (args) => {
	useEffect(() => { carousel(args); });
	const slides = mix.map((item, index) => {
		return CarouselSlide({ ...CarouselSlide.args, video: null, index, images:`//via.placeholder.com/${50*(index + 1)}x200`, variableWidth:true });
	}).join("\n");

	return html`
	<section class="carousel-wrapper">
		<div class="js-carousel carousel">
			${slides}
		</div>
	</section>`;
};

CarouselSameSizeItems.args = {...flickityDefaults, imagesLoaded: true};
CarouselVariableWidth.args = {...flickityDefaults, imagesLoaded: true};
