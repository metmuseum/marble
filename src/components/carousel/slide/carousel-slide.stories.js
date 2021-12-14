import html from "../../../../.storybook/helpers/html";
import videoSlide from "./video-slide.js";
import { useEffect } from "@storybook/client-api";
export default { title: "Carousel/Carousel Slide" };

import image1920 from "../../../../.storybook/assets/images/misc/2020_Met_Stories_Ep_01_4k_NEW-3.jpg";
import video from "../../../../.storybook/assets/video/stock-footage-a-nice-bee-walking-and-foraging-a-pretty-yellow-flower-and-a-little-push-by-another-bee-to-fly-away.mp4";

const args = {
	header: "Carousel Slide",
	description: html`<p>Either an image or a video, whatever.</p>
	<p>A <a href="#">link</a>, perhaps?</p>`,
	video: video,
	images: image1920,
};

// problems to solve
// if you tab into a carousel, you should get a NaS-like helper telling you that you're in a carousel/do you want to skip out (along those lines)
// - we don't want all the slides to be announced / or have to tab through all the slides (manage tabindex and aria-hidden carefully)
// - paging: 1) bubble on arrow key down from the links back up to flickity!!!  2) plan b? if there's links in the slides, how do you page the slides? (you have to tab all the way through them to get to arrows keys, and go up/down with shift+tab)
// - how do you know when the carousel has changed if you use the arrows now (aria-live/changed?)

export const CarouselSlide = (args) => {
	useEffect(videoSlide);
	return html`
		<div class="carousel-slide carousel-slide--video js-carousel-slide">
			${mediaMarkUp(args)}
			<div class="carousel-slide__subject">
				<h3 class="carousel-slide__header">${args.header}</h3>
				<div class="carousel-slide__body">
					${args.description}
				</div>
			</div>
		</div>
	`;
};

const mediaMarkUp = (args) => {
	return args.video
		? html`
				<div
					class="carousel-slide__media-wrapper carousel-slide__media-wrapper--video"
				>
					<video
						data-video-id="6013996756001"
						class="carousel-slide__video js-carousel-slide__video"
						muted="muted"
						tabindex="-1"
						loop
						src="${args.video}"
					>
						<track src="captions_en.vtt" kind="captions" srclang="en" label="english_captions">
					</video>
				</div>
		  `
		: html`
				<div class="carousel-slide__media-wrapper">
					<img
						class="lazy carousel-slide__image"
						data-srcset="${args.images}"
						alt="just a humble alt tag"
					/>
				</div>
		  `;
};

CarouselSlide.args = args;
