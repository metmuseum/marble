import html from "../../../.storybook/helpers/html";
import "./featured-card.scss";
// import { withA11y } from "@storybook/addon-a11y";
import { fullWidth } from "../image-container/image-container.stories.js";
export default { title: 'Featured' };

const data = {
	header: "Visit Us from Home",
	description: "Immerse yourself in 360-degree video of iconic spaces in the Museum. Visit the Great Hall as a ball,  and Greek as a treat!",
	images: "https://www.metmuseum.org/-/media/images/150-anniversary/met-stories/2020_met_stories_ep_01_4k_new.jpg?la=en&hash=9CDD1BCFB213A815CCF4B476CDA5B35F 2x, https://www.metmuseum.org/-/media/images/150-anniversary/met-stories/2020_met_stories_ep_01_4k_new.jpg?la=en&w=1920&hash=342B752D9534482E6C5C988C117585A4 1x",
	link: {
		url: "http://metmuseum.org",
		text: "Watch Episode 1"
	}
}

const featuredCardMarkup = (model) => {
	return html`
	<div class="featured-card">
		<h1>${model.header}</h1>
		<div class="featured-card__description">${model.description}</div>
	</div>`
}


export const FeaturedCard = () => {
  return featuredCardMarkup(data);
}
