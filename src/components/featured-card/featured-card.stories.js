import html from "../../../.storybook/helpers/html";
import he from "he";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { fullWidth } from "../image-container/image-container.stories.js";

export default { title: "Featured", decorators: [withKnobs] };

const data = () => {
	return {
		inSitu: boolean("In Situ", false),
		header: text("Header", "Visit Us from Home"),
		description: text(
			"Body Copy",
			"<p>Immerse yourself in 360-degree video of iconic spaces in the Museum. Visit the Great Hall as a ball,  and Greek as a treat!</p>"
		),
		images: "",
		primaryLink: {
			url: "http://metmuseum.org",
			text: text("Button Text", "Primary"),
		},
		secondaryLink: {
			url: "http://metmuseum.org",
			text: text("Secondary Link", "Browse Artwork"),
		},
	};
};

const featuredCardMarkup = (model) => {
	return html` <div
		class="featured-card ${model.inSitu ? "productive-component" : ""}"
	>
		<div class="featured-card__content">
			<h2 class="expressive">${model.header}</h2>
			<div class="featured-card__description">
				${he.decode(model.description)}
			</div>
			<div class="featured-card__links">
				<a
					href="#"
					class="button primary-button primary-button--small primary-button--ghost-light"
					>${model.primaryLink.text}</a
				>
				<a
					href="#"
					class="button tertiary-button featured-card__secondary-button"
					>${model.secondaryLink.text}</a
				>
			</div>
		</div>
		<div class="featured-card__image-wrapper">
			${fullWidth()}
		</div>
	</div>`;
};

export const FeaturedCard = () => {
	return featuredCardMarkup(data());
};
