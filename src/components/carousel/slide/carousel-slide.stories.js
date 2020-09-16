import html from "../../../../.storybook/helpers/html";
export default { title: "Carousel Video Slide" };

const data = {
	header: "Video Slide",
	description:
		"<p>This Represents a Marble Card without any tweaking. Currently Not really a component, just the basis of a bunch of different ones.</p>",
	images:
		"https://www.metmuseum.org/-/media/images/150-anniversary/met-stories/2020_met_stories_ep_01_4k_new.jpg?la=en&hash=9CDD1BCFB213A815CCF4B476CDA5B35F 2x, https://www.metmuseum.org/-/media/images/150-anniversary/met-stories/2020_met_stories_ep_01_4k_new.jpg?la=en&w=1920&hash=342B752D9534482E6C5C988C117585A4 1x",

};

const markup = (model) => {
	return html`
		<div class="carousel-slide carousel-slide--video">
			<div class="carousel-slide__video-wrapper">
				<img class="carousel-slide__image" srcset="${model.images}" />
			</div>
			<div class="carousel-slide__subject">
				<h3 class="carousel-slide__header">
				${model.header}
				</h3>
				<div class="carousel-slide__body">
					${model.description}
				</div>
			</div>
		</div>
	`;
};

export const VideoSlide = () => {
  return markup(data);
}
