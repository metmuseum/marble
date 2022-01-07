import { html } from ".storybook/helpers";
import { withKnobs, text} from "@storybook/addon-knobs";

import { passIcon, dateIcon, locationIcon } from "./helper-icons.js";

import image712 from ".storybook/assets/images/misc/150HubBannerMobile_712w.jpg";
import image1231 from ".storybook/assets/images/misc/150HubBannerMobile_1231w.jpg";


export default {
	title: "Exhibition/Plan Your Visit",
	decorators: [withKnobs],
};

const data = () => {
	return {
		header: text("Header", "Plan Your Visit"),
		dates: text("Dates", "January 30 - August 23, 2020"),
		location: text("Location", "The Met Fifth Ave"),
		gallery: text("Gallery", "Gallery 199"),
		price: text("Price", "Included with admission"),
		otherInfo: text("Other Info", "Timed Entry"),
		backgroundImages: `${image1231} 2x, ${image712} 1x`
	};
};


const planCardMarkUp = (model) => {
	return html`
	<section class="pyv-card">
	  <div class="pyv-card__main">
	    <h2 class="pyv-card__title">Plan Your Visit</h2>
	    <div class="pyv-card__info-box">

	      <div class="pyv-card__row">
	        <div class="pyv-card__row-icon">${dateIcon()}</div>
	        <div class="pyv-card__row-text">
	          <div class="pyv-card__row-title">Dates</div>
	          <div class="pyv-card__row-body">${model.dates}</div>
	        </div>
	      </div>

	      <div class="pyv-card__row">
	        <div class="pyv-card__row-icon">${locationIcon()}</div>
	        <div class="pyv-card__row-text">
	          <div class="pyv-card__row-title">${model.location}</div>
	          <div class="pyv-card__row-body">${model.gallery}</div>
	        </div>
	      </div>

	      <div class="pyv-card__row">
	        <div class="pyv-card__row-icon">${passIcon()}</div>
	        <div class="pyv-card__row-text">
	          <div class="pyv-card__row-title">Reserve Entry</div>
	          <div class="pyv-card__row-body">${model.price}</div>
	        </div>
	      </div>

	      <div class="pyv-card__button-wrapper">
	        <a href="#"
	          class="button primary-button primary-button--x-small primary-button--filled">
	          Plan your visit
	        </a>

	        <a href="#" class="button tertiary-button">
	          All exhibitions
	        </a>
	      </div>

	    </div>
	  </div>

	  <div class="pyv-card__image-wrapper">
	    <img class="pyv-card__image lazy"
	      alt="Width"
	      width="100" height="100"
	      data-src="@Html.ParseImgSrc(Model.Image1x1.Small)"
	      data-srcset="${model.backgroundImages}"
	      sizes="100vw" />
	  </div>
	</section>`;
};

export const PlanCard = () => {
	const model = data();
	return planCardMarkUp(model);
};
