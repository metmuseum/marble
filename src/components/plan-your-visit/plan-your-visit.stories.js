import html from "../../../.storybook/helpers/html";
import { withKnobs, text} from "@storybook/addon-knobs";

import image712 from "../../../.storybook/assets/images/misc/150HubBannerMobile_712w.jpg";
import image1231 from "../../../.storybook/assets/images/misc/150HubBannerMobile_1231w.jpg";


export default {
	title: "Exhibition/Plan Your Visit",
	decorators: [withKnobs],
};

const data = {
	header: text("Header", "Plan Your Visit"),
	dates: text("Dates", "January 30 - August 23, 2020"),
	location: text("Location", "The Met Fifth Ave"),
	gallery: text("Gallery", "Gallery 199"),
	price: text("Price", "Included with admission"),
	otherInfo: text("Other Info", "Timed Entry"),
	backgroundImages: `${image1231} 2x, ${image712} 1x`,
};


const planCardMarkUp = (model) => {
	return html`<section class="plan-card">

			<div class="plan-card__image-container">
			<img
				class="plan-card__image"
				srcset="${model.backgroundImages}"
				alt="ALT"
			/>
			</div>

			<div class="plan-card__info">
				<h2 class="plan-card__header">${model.header}</h2>
				<div class="plan-card__details">

					<div class="plan-card__row">
						<div class="plan-card__row-icon"></div>
						<div class="plan-card__row-info">
							<div class="plan-card__row-header">Dates</div>
							<div class="plan-card__row-text">${model.dates}</div>
						</div>
					</div>

					<div class="plan-card__row">
						<div class="plan-card__row-icon"></div>
						<div class="plan-card__row-info">
							<div class="plan-card__row-header">${model.location}</div>
							<div class="plan-card__row-text">${model.gallery}</div>
						</div>
					</div>

						<div class="plan-card__row">
							<div class="plan-card__row-icon"></div>
							<div class="plan-card__row-info">
								<div class="plan-card__row-header">${model.price}</div>
								<div class="plan-card__row-text">${model.otherInfo}</div>
							</div>
						</div>

						<div class="plan-card__cta-wrapper">
							<a href="#"
								class="button primary-button primary-button--x-small primary-button--filled plan-card__main-cta">
								Plan your visit
							</a>
							<a class="button tertiary-button">
								View all exhbitions
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>`;
};

export const PlanCard = () => {
	return planCardMarkUp(data);
};
