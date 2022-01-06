import html from "../../../../.storybook/helpers/html";
import { defaultData } from "./event-card-story-helpers.js";
import { withKnobs } from "@storybook/addon-knobs";

export default {
	title: "Cards/Event Card",
	decorators: [withKnobs],
};


const markup = (eventCardData) => html`
	${eventCardData.inSitu ? html`<ol>`: ""}
	<li id="${eventCardData.cardId}" class="event-card">
		<div class="event-card__image-wrapper">
			<img
				class="event-card__image"
				src="${eventCardData.attendable.teaserImage}"
				alt="Thumbnail of ${eventCardData.attendable.title}" 
			/>
			<a href="${eventCardData.attendable.url}"
				class="event-card__image-link invisible-redundant-link"
				aria-hidden="true"
				tabindex="-1">
			</a>
		</div>
		<section class="event-card__body">
			<div class="event-card__row event-card__row--top">
				<a
					class="event-card__subprogram"
					href="${eventCardData.attendable.subProgramUrl}"
				>
					${eventCardData.attendable.subProgramTitle}
				</a>
			</div>

			<h4 class="event-card__heading">
				<a
					class="event-card__heading-link"
					href="${eventCardData.attendable.url}"
				>${eventCardData.attendable.title}</a>
			</h4>

			<div class="event-card__row event-card__pricing">
				${eventCardData.attendable.ticketPricing}
			</div>

			<div class="event-card__row event-card__row--bottom">
				<div class="event-card__time-and-location">
					<div class="event-card__event-time">${eventCardData.displayTime}</div>
					<div class="event-card__building">${eventCardData.attendable.building}</div>
				</div>

				<div class="event-card__tickets">
					<a
						href="${eventCardData.attendable.url}"
						class="button primary-button primary-button--x-small primary-button--filled event-card__tickets-button js-marble-event-card-tabindex-toggle"
					>
						${eventCardData.attendable.cta}
					</a>
				</div>
			</div>
		</section>
	</li>
	${eventCardData.inSitu ? html`</ol>`: ""}
	`;


const chromticParams = {
	chromatic: { viewports: [320, 600, 640, 960, 1080, 1280] }
};

const eventCard = () => {
	return markup(defaultData({}));
};

eventCard.parameters = chromticParams;

export { eventCard};