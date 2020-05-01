import html from "../../../.storybook/helpers/html";
import "./featured-card.scss";

import { fullWidth } from "../image-container/image-container.stories.js";

export default { title: 'Featured' };

const data = {
	header: "Visit Us from Home",
	description: "<p>Immerse yourself in 360-degree video of iconic spaces in the Museum. Visit the Great Hall as a ball,  and Greek as a treat!</p>",
	images: "",
	primaryLink: {
		url: "http://metmuseum.org",
		text: "Primary"
	},
	secondaryLink: {
		url: "http://metmuseum.org",
		text: "Browse Artwork"
	}
}

const featuredCardMarkup = (model) => {
	return html`
	<div class="featured-card">
		<div class="featured-card__content">
			<h1 class="expressive">${model.header}</h1>
			<div class="featured-card__description">${model.description}</div>
			<div class="featured-card__links">
				<a href="#" class="button button--ghosted inverse">${model.primaryLink.text}</a>
				<a href="#" class="button--tertiary inverse featured-card__secondary-button">${model.secondaryLink.text}</a>
			</div>
		</div>
		<div class="featured-card__image-wrapper">
			${fullWidth()}
		</div>
	</div>`
}


export const FeaturedCard = () => {
  return featuredCardMarkup(data);
}
