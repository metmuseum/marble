import { html } from ".storybook/helpers";
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

export const BrowseBy = () => html`
	<section class="browse-by js-browse-by">
		<fieldset class="tabs-control-container">
			<legend class="screen-reader-only">Select one of the tabs below</legend>
			<div class="tab-controls">
				<input id="Past-tab-id" type="radio" name="my-cool-tabs" class="tab-controls__input" value="Past" checked="">
				<label for="Past-tab-id" class="tab-controls__label">
					<h3 class="browse-by__heading">Dis</h3>
				</label>
			</div>
			<div class="tab-controls">
				<input id="Current-tab-id" type="radio" name="my-cool-tabs" class="tab-controls__input" value="Current">
				<label for="Current-tab-id" class="tab-controls__label">
					<h3 class="browse-by__heading">Dat</h3>
				</label>
			</div> <div class="tab-controls">
				<input id="Upcoming-tab-id" type="radio" name="my-cool-tabs" class="tab-controls__input" value="Upcoming" false="">
				<label for="Upcoming-tab-id" class="tab-controls__label">
					<h3 class="browse-by__heading">The Last</h3>
				</label>
			</div>
		</fieldset>
		<section id="tab1" class="browseby-tab selected">
			<div class="browseby-tab-body">
				${titles.map((title, index) => cardTemplate({ title: title, imageURL: images[index % 3].srcSet.fallback })).join("")}
			</div>
		</section>
		<section id="tab2" class="browseby-tab">
			<div class="browseby-tab-body">
				${titles.map((title, index) => cardTemplate({ title: title, imageURL: images[index % 3].srcSet.fallback })).join("")}
			</div>
		</section>
		<section id="tab3" class="browseby-tab">
			<div class="browseby-tab-body">
				${titles.map((title, index) => cardTemplate({ title: title, imageURL: images[index % 3].srcSet.fallback })).join("")}
			</div>
		</section>
	</section>`;