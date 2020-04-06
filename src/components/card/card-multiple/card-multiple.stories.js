import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import "../card.scss";

export default {
	title: 'Cards',
  decorators: [withKnobs]
};

const cardTemplate = (
	cardHeader = "Small Card",
	descriptor = "descriptor",
	description = "description",
	images = "https://www.metmuseum.org/-/media/images/150-anniversary/met-stories/2020_met_stories_ep_01_4k_new.jpg?la=en&hash=9CDD1BCFB213A815CCF4B476CDA5B35F 2x, https://www.metmuseum.org/-/media/images/150-anniversary/met-stories/2020_met_stories_ep_01_4k_new.jpg?la=en&w=1920&hash=342B752D9534482E6C5C988C117585A4 1x",
	link = {
		url: "http://metmuseum.org",
		text: "Watch Episode 1"
	}
) => {
	return {
		header: cardHeader,
		descriptor: descriptor,
		description: description,
		images: images,
		link: {
			url: link.url,
			text: link.text
		}
	}
};

const cardMarkup = (model, cardCount) => {
	return `
		<section>
		  <h3>${model.header}</h3>
			<div class="marble-card__wrapper">
			  ${ model.cards.reduce((total, card) => {
					return total + `<div class="marble-card marble-card--active">
			      <div class="marble-card__image-wrapper card__image-wrapper--fixed-ratio card__image-wrapper--66">
			        <a href="${card.link.url}" class="marble-card__image-link" tabindex="-1">
			          <img class="marble-card__image" srcset="${card.images}">
			        </a>
			      </div>
			      <div class="marble-card__subject">
			        <div class="marble-card__subject-body marble-card__subject-body--multicard">
			          <div class="marble-card__header">
			            <div class="marble-card__header-body">
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
			          </div>
			          ${ card.description &&
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
				}, "")}
			</div>
		</section>
	`
}


export const MultipleCards = () => {
	const cardCount = number("Card Count", 2, {range: true, min: 2, max: 4});
	const cards = Array.apply(null, Array(cardCount)).map(() => cardTemplate());
	const data = {
		header: `${cardCount} MultiCards`,
		cards: cards
	};

  return cardMarkup(data);
}