import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import "../card.scss";

export default {
	title: 'Cards',
  decorators: [withKnobs]
};

const cardTemplate = (
	cardHeader = "Exhibition Card",
	descriptor = "descriptor",
	description = "description",
	location = "The Met Fifth Avenue",
	dates = "MARCH 30–AUGUST 2, 2020",
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
		dates: dates,
		location: location,
		link: {
			url: link.url
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
	      <div class="marble-card__image-wrapper marble-card__image-wrapper--fixed-ratio marble-card__image-wrapper--66">
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
		        <div class="marble-card__meta">
	            <div class="marble-card__meta-body">
	              <div class="marble-card__meta-dates short-body">
	                <p><a href="${card.link.url}">${card.dates}</a></p>
	              </div>
	              <div class="marble-card__meta-link marble-card__location-wrapper short-body">
	                <p>
	                  <span class="marble-card__location-title">Location</span>
										<a href="${card.link.url}" class="marble-card__location-link">${card.location}</a>
	                </p>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>`
		}, "")}
	</div>
</section>
`}




export const ExhibitionCards = () => {
	const cardCount = number("Card Count", 2, {range: true, min: 2, max: 4});
	const cards = Array.apply(null, Array(cardCount)).map(() => cardTemplate());
	const data = {
		header: `${cardCount} Exhibition Cards`,
		cards: cards
	};

  return cardMarkup(data);
}
