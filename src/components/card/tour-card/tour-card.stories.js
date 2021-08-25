import html from "../../../../.storybook/helpers/html";
import { withKnobs, text } from "@storybook/addon-knobs";
import image16x9 from "../../../../.storybook/assets/images/greek-hall/16x9/index.js";

export default {
	title: "Cards/Tour Card",
	decorators: [withKnobs],
};

const tour = () => ({
	title: text("Title", "Collection Highlights Tour"),
	url: text("URL", "#"),
	location: text("Location","Gallery 500"),
	building: text("Building","The Met Fifth Avenue"),
	subProgramTitle: text("Subprogram Title", "MetCats"),
	ticketPricing: text("Ticket Pricing", "Free With Admission"),
	language: text("Language", "English"),
	eventDate: text("Event Date", "5PM"),
	teaserImageUrl: text("Teaser Image URL", image16x9.srcSet.fallback),
	teaserImageAlt: text("Teaser Image Alt Text", image16x9.alt)
});


const markup = (attendable) => html`
	<li class="attendable-card tour-card">
		<a href="${attendable.url}" class="tour-card__image-wrapper" tabindex="-1">
			<img class="tour-card__image" src="${attendable.teaserImageUrl}" alt="${attendable.alt}" />
		</a>
		<div class="tour-card__body">

			<div class="tour-card__main">
				<h4 class="tour-card__title">
					<a href="${attendable.url}">
						${attendable.title}
					</a>
				</h4>

				<a class="tour-card__details" href="${attendable.url}" tabindex="-1">
					View Details
				</a>
			</div>

			<div class="tour-card__secondary">
				<div class="tour-card__location">${attendable.location}</div>
				<div class="tour-card__building">${attendable.building}</div>

				<div class="tour-card__tour-meta">
					<span class="tour-card__subprogram">${attendable.subProgramTitle}</span>
					<span class="tour-card__price">${attendable.ticketPricing}</span>
				</div>
			</div>

			<div class="tour-card__tertiary">
				<div class="tour-card__language">${attendable.language}</div>
				<div class="tour-card__time">${attendable.eventDate}</div>
			</div>
		</div>
</li>`;


const TourCard = () => html`<ul>${markup(tour())}</ul>`;

export { TourCard };