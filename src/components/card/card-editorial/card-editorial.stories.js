import { html } from ".storybook/helpers";

export default { title: "Cards" };

import image1920 from ".storybook/assets/images/misc/2020_Met_Stories_Ep_01_4k_NEW-3.jpg";

const data = {
	header: "Large Editorial Card",
	description:
		"Have you ever heard a museum love story? Did you know that art has the power to heal? Met visitors share their personal stories in this new series.",
	images: image1920,
	link: {
		url: "http://metmuseum.org",
		text: "Watch Episode 1",
	},
};

const cardMarkup = (model) => {
	return html`
		<section class="editorial-card--large">
			<div class="marble-card">
				<div class="marble-card__image-wrapper">
					<a
						href="${model.link.url}"
						class="marble-card__image-link"
						tabindex="-1"
					>
						<img class="marble-card__image" srcset="${model.images}" alt="an example image alt for accessibility"/>
					</a>
				</div>
				<div class="marble-card__subject">
					<div class="marble-card__subject-body">
						<div class="marble-card__header">
							<h2 class="marble-card__header-title">
								<a href="${model.link.url}">
									${model.header}
								</a>
							</h2>
						</div>
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
		</section>
	`;
};

export const LargeEditorialCard = () => {
	return cardMarkup(data);
};
