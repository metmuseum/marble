import { html } from ".storybook/helpers";
import videoSlide from "./video-slide.js";
import { useEffect } from "@storybook/client-api";
import image1920 from ".storybook/assets/images/misc/2020_Met_Stories_Ep_01_4k_NEW-3.jpg";
import video from ".storybook/assets/video/stock-footage-a-nice-bee-walking-and-foraging-a-pretty-yellow-flower-and-a-little-push-by-another-bee-to-fly-away.mp4";

export default { title: "Carousel/Carousel Slide" };

const args = {
	header: "Carousel Slide",
	description: html`<p>This is the description.</p><p>Here is a link to <a href="#">read more</a>, perhaps?</p>`,
	video: video,
	images: image1920,
	variableWidth: false,
	index: null
};

export const CarouselSlide = (args) => {
	useEffect(videoSlide);
	return html`
		<div class="carousel-slide ${args.variableWidth ? "carousel-slide--variable-width" : "carousel-slide--fixed-width"} js-carousel-slide">
			${mediaMarkUp(args)}
			<div class="carousel-slide__subject">
				<h3 class="carousel-slide__header">${args.header} ${args.index ? args.index : ""}</h3>
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
					<a href="#" class="invisible-redundant-link" aria-hidden="true" tabindex="-1"></a>
					<img
						class="lazy carousel-slide__image"
						data-srcset="${args.images}"
						alt="just a humble alt tag"
					/>
				</div>
		  `;
};

CarouselSlide.args = args;
