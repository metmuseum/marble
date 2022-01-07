import { withKnobs } from "@storybook/addon-knobs";

import image1920 from ".storybook/assets/images/misc/2020_Met_Stories_Ep_01_4k_NEW-3.jpg";

export default {
	title: "Cards",
	decorators: [withKnobs],
};

const cardTemplate = (
	cardHeader = "Small Card",
	descriptor = "descriptor",
	description = "description",
	images = image1920,
	link = {
		url: "http://metmuseum.org",
		text: "Watch Episode 1",
	}
) => {
	return {
		header: cardHeader,
		descriptor: descriptor,
		description: description,
		images: images,
		link: {
			url: link.url,
			text: link.text,
		},
	};
};

const cardMarkup = (model) => {
	return `
		<section>
		  <h3>${model.header}</h3>
			<div class="marble-card__wrapper">
			  ${model.cards.reduce((total, card) => {
		return (
			total +
						`<div class="marble-card marble-card--active">
			      <div class="marble-card__image-wrapper marble-card__image-wrapper--fixed-ratio marble-card__image-wrapper--66">
			        <a href="${
			card.link.url
			}" class="marble-card__image-link" tabindex="-1">
			          <img class="marble-card__image" srcset="${card.images}" alt="an example image alt for accessibility">
			        </a>
			      </div>
			      <div class="marble-card__subject">
			        <div class="marble-card__subject-body marble-card__subject-body--multicard">
			          <div class="marble-card__header">
		              <div class="marble-card__header-descriptor">
		                <p>
		                  ${card.descriptor}
		                </p>
		              </div>
		              <h3 class="marble-card__header-heading">
		                <a href="${card.link.url}">
		                  ${card.header}
		                </a>
		              </h3>
			          </div>
			          ${
			card.description &&
									`<div class="marble-card__meta">
				            <div class="marble-card__meta-body">
				              <div class="marble-card__meta-description">
				                ${card.description}
				              </div>
				            </div>
				          </div>`
			}
			        </div>
			      </div>
			    </div>`
		);
	}, "")}
			</div>
		</section>
	`;
};

export const TwoMarbleCards = () => {
	const cardCount = 2;
	const cards = Array.apply(null, Array(cardCount)).map(() => cardTemplate());
	const data = {
		header: `${cardCount} Marble Cards`,
		cards: cards,
	};

	return cardMarkup(data);
};

export const ThreeMarbleCards = () => {
	const cardCount = 3;
	const cards = Array.apply(null, Array(cardCount)).map(() => cardTemplate());
	const data = {
		header: `${cardCount} Marble Cards`,
		cards: cards,
	};

	return cardMarkup(data);
};

export const FourMarbleCards = () => {
	const cardCount = 4;
	const cards = Array.apply(null, Array(cardCount)).map(() => cardTemplate());
	const data = {
		header: `${cardCount} Marble Cards`,
		cards: cards,
	};

	return cardMarkup(data);
};
