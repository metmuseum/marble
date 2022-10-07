import { html } from ".storybook/helpers";
import { useEffect } from "@storybook/client-api";
import browseByjs from "./browse-by.js";
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
		<fieldset class="tabs-control-container js-tabs-control-container" role="tablist">
			<legend class="screen-reader-only">Select one of the tabs below. Use your arrow keys to navigate the tabs, and your tab key to select an item below the tab</legend>
			<div class="tab-controls" role="tab" aria-controls="topic1" aria-selected="true">
				<input id="topic1-tab" type="radio" name="browseby-tabset" class="tab-controls__input js-browseby-tab" value="topic1" checked="">
				<label for="topic1-tab" class="tab-controls__label">
					<h3 class="tab-controls__heading" role="presentation">Topic One</h3>
				</label>
			</div>
			<div class="tab-controls" role="tab" aria-controls="topic2" aria-selected="false">
				<input id="topic2-tab" type="radio" name="browseby-tabset" class="tab-controls__input js-browseby-tab" value="topic2">
				<label for="topic2-tab" class="tab-controls__label">
					<h3 class="tab-controls__heading" role="presentation">Topic Two</h3>
				</label>
			</div> 
			<div class="tab-controls" role="tab" aria-controls="topic3" aria-selected="false">
				<input id="topic3-tab" type="radio" name="browseby-tabset" class="tab-controls__input js-browseby-tab" value="topic3">
				<label for="topic3-tab" class="tab-controls__label">
					<h3 class="tab-controls__heading" role="presentation">Topic Three</h3>
				</label>
			</div>
		</fieldset>
		<section id="topic1" class="browseby-tabpanel js-browseby-tabpanel" role="tabpanel" aria-labelledby="topic1-tab" aria-expanded="true">
			<div class="browseby-tabpanel-body">
				${titles.map((title, index) => cardTemplate({ title: title, imageURL: images[index % 1].srcSet.fallback })).join("")}
			</div>
		</section>
		<section id="topic2" class="browseby-tabpanel js-browseby-tabpanel" role="tabpanel" aria-labelledby="topic2-tab" aria-expanded="false" hidden="true">
			<div class="browseby-tabpanel-body">
				${titles.map((title, index) => cardTemplate({ title: title, imageURL: images[index % 2].srcSet.fallback })).join("")}
			</div>
		</section>
		<section id="topic3" class="browseby-tabpanel js-browseby-tabpanel" role="tabpanel" aria-labelledby="topic3-tab" aria-expanded="false" hidden="true">
			<div class="browseby-tabpanel-body">
				${titles.map((title, index) => cardTemplate({ title: title, imageURL: images[index % 3].srcSet.fallback })).join("")}
			</div>
		</section>
	</section>`;
};
