import html from "../../../.storybook/helpers/html";
export default { title: "Cards" };

import image1920 from "../../../.storybook/assets/images/misc/2020_Met_Stories_Ep_01_4k_NEW-3.jpg";

const data = {
	header: "Base Card",
	description:
		"This Represents a Marble Card without any tweaking. Currently Not really a component, just the basis of a bunch of different ones.",
	images: image1920,
	link: {
		url: "http://metmuseum.org",
		text: "Watch Episode 1",
	},
};

const cardMarkup = (model, className) => {
	return html`<section>
		<div class="marble-card ${className}">
			<a href="${model.link.url}" class="marble-card__image-link" tabindex="-1">
				<div class="marble-card__image-wrapper">
					<img class="marble-card__image" srcset="${model.images}" />
				</div>
			</a>

			<div class="marble-card__subject">
				<div class="marble-card__subject-body">
					<h2 class="marble-card__header">
						<a href="${model.link.url}">
							${model.header}
						</a>
					</h2>
					<div class="marble-card__meta">
						<div class="marble-card__meta-body">
							<div class="marble-card__meta-description">
								${model.description}
							</div>
							<div class="marble-card__meta-link">
								<a href="${model.link.url}" class="button tertiary-button"
									>${model.link.text}</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>`;
};

export const Card = (className) => {
	return cardMarkup(data, className);
};
