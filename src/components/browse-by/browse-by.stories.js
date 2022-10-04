import { html } from ".storybook/helpers";
import { useEffect } from "@storybook/client-api";
import { browseByjs } from "./browse-by.js";
import greekHallImages from ".storybook/assets/images/greek-hall";

export default { title: "Components/BrowseBy" };

const titles = [
	"American Art",
	"Ancient American Art",
	"Ancient Near Eastern Art",
	"Ancient Near Eastern Art",
	"Arms and Armor",
	"Asian Art",
	"The Costume Institute",
	"Drawings and Prints",
	"Egyptian Art",
	"European Paintings",
	"European Sculpture and Decorative Arts",
	"Greek and Roman Art",
	"Islamic Art",
	"The Robert Lehman Collection",
	"Modern and Contemporary Art"
];

const images = [greekHallImages.image1x1, greekHallImages.image4x3, greekHallImages.image16x9];

// these items can literally be any card
const cardTemplate = (args) => {
	return html`
		<div class="marble-card">
			<a href="link here" class="marble-card__image-link" tabindex="-1">
				<div class="marble-card__image-wrapper">
					<img class="marble-card__image" src="${args.imageURL}" alt="an example image alt for accessibility" />
				</div>
			</a>

			<div class="marble-card__subject">
				<h4 class="marble-card__header">
					<a href="a link">
						${args.title}
					</a>
				</h4>
				<div class="marble-card__meta">
					<div class="marble-card__meta-body">
						<div class="marble-card__meta-description">
							A description
						</div>
					</div>
				</div>
			</div>
		</div>`;
};

export const BrowseBy = () => {
	useEffect(browseByjs);
	return html`
	<section class="browseby js-browseby">
		<fieldset class="tabs-control-container">
			<legend class="screen-reader-only">Select one of the tabs below</legend>
			<div class="tab-controls">
				<input id="artist-tab" type="radio" name="my-cool-tabs" class="tab-controls__input" value="Artist" checked="">
				<label for="artist-tab" class="tab-controls__label">
					<h3 class="browseby__heading">Artist</h3>
				</label>
			</div>
			<div class="tab-controls">
				<input id="art-movement-tab" type="radio" name="my-cool-tabs" class="tab-controls__input" value="Art Movement">
				<label for="art-movement-tab" class="tab-controls__label">
					<h3 class="browseby__heading">Art Movement</h3>
				</label>
			</div> <div class="tab-controls">
				<input id="time-period-tab" type="radio" name="my-cool-tabs" class="tab-controls__input" value="Time Period" false="">
				<label for="time-period-tab" class="tab-controls__label">
					<h3 class="browseby__heading">Time Period</h3>
				</label>
			</div>
		</fieldset>
		<section id="artist" class="browseby-tabpanel selected">
			<div class="browseby-tabpanel-body">
				${titles.map((title, index) => cardTemplate({ title: title, imageURL: images[index % 3].srcSet.fallback })).join("")}
			</div>
		</section>
		<section id="art-movement" class="browseby-tabpanel">
			<div class="browseby-tabpanel-body">
				${titles.map((title, index) => cardTemplate({ title: title, imageURL: images[index % 3].srcSet.fallback })).join("")}
			</div>
		</section>
		<section id="time-period" class="browseby-tabpanel">
			<div class="browseby-tabpanel-body">
				${titles.map((title, index) => cardTemplate({ title: title, imageURL: images[index % 3].srcSet.fallback })).join("")}
			</div>
		</section>
	</section>`;
};
