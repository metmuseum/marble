import html from "../../../../.storybook/helpers/html";

// import EventCard from "./event-card.js";
// import defaultData from "./event-card-story-helpers";
import { defaultData } from "./event-card-story-helpers.js";
import { withKnobs, text } from "@storybook/addon-knobs";

import SVGs from "../../../../.storybook/assets/svg";

// import image16x9 from "../../../../.storybook/assets/images/greek-hall/16x9/index.js";
	
export default {
	title: "Cards",
	decorators: [withKnobs],
};
// TODO:
//  states: opened, not opened
//  image alt should not be event title

// const eventCardEffect = () => {
// 	document.querySelectorAll(".js-marble-event-card").forEach((eventCard) => {
// 		new EventCard(eventCard);
// 	});
// }

// const eventCard = (data) => new EventCard(el, (data || defaultData()));

const markup = (eventCardData) => html`
	<li id="${eventCardData.cardId}" class="${eventCardData.initialClassNames}">
		<div class="event-card__image-wrapper">
			<a
				href="${eventCardData.attendable.url}"
				class="event-card__image-link"
				tabindex="-1"
			>
				<img
					class="event-card__image"
					src="${eventCardData.attendable.teaserImage}"
					alt="Thumbnail of ${eventCardData.attendable.title}" 
				/>
			</a>
		</div>
		<div class="event-card__content">
			<section class="event-card__body">
				<div class="event-card__row event-card__row--top">
					<a
						class="event-card__subprogram"
						href="${eventCardData.attendable.subProgramUrl}"
					>
						${eventCardData.attendable.subProgramTitle}
					</a>
					<button
						class="event-card__view-toggle js-marble-event-card-toggle-open"
						aria-expanded="${eventCardData.isOpened}"
					>
						${SVGs.viewToggleIcon}
					</button>
				</div>
				<h4 class="event-card__heading">
					<a
						class="event-card__heading-link"
						href="${eventCardData.attendable.url}"
					>${eventCardData.attendable.title}</a>
				</h4>

				<div class="event-card__row">
					<div class="event-card__pricing">
						${eventCardData.attendable.ticketPricing}
					</div>
					<div class="event-card__event-time">${eventCardData.displayTime}</div>
				</div>
			</section>
			<section class="event-card__expanded-info">
				<div class="event-card__row">
					<a
						class="event-card__program js-marble-event-card-tabindex-toggle"
						tabindex="${eventCardData.isOpened ? "0" : "-1"}"
						href="${eventCardData.attendable.programUrl}"
					>
						${eventCardData.attendable.programTitle}
					</a>
					<div class="event-card__building">
						${eventCardData.attendable.building}
					</div>
				</div>

				<div class="event-card__row">
					<div class="event-card__info">
						<a
							href="${eventCardData.attendable.url}"
							tabindex="${eventCardData.isOpened ? "0" : "-1"}"
							class="button tertiary-button js-marble-event-card-tabindex-toggle"
						>
							More info
						</a>
					</div>
					<div class="event-card__tickets">
						<a
							href="${eventCardData.attendable.url}"
							tabindex="${eventCardData.isOpened ? "0" : "-1"}"
							class="button primary-button primary-button--small primary-button--filled event-card__tickets-button js-marble-event-card-tabindex-toggle"
						>
							${eventCardData.attendable.cta}
						</a>
					</div>
				</div>
			</section>
		</div>
	</li>`;

const eventCard = () => markup(defaultData());

export { eventCard };