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

const colors = [
	"#abdbe3",
	"#eeeee4",
	"#f8e3c9"
];

const images = [greekHallImages.image1x1, greekHallImages.image4x3, greekHallImages.image16x9];

// these items can literally be any card
const cardTemplate = (args) => {
	return html`
		<div class="marble-card" style="background:${args.color}">
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
	const screenreaderLegendText = "Use your arrow keys to navigate the topics in the tabs below, and your tab key to choose an item";
	const tabNames = ["topic1", "topic2", "topic3"];
	const inputGroupName = "browseby-tabset";
	useEffect(browseByjs);
	return html`
	<section class="browseby js-browseby">
		<fieldset class="tabs-control-container js-tabs-control-container">
		<legend class="screen-reader-only">${screenreaderLegendText}</legend>
		${tabNames.map((tabName, index) => {
		let niceTabName = tabName.replace(/.{1}$/," $&"); //just make it a bit more readable for storybook
		let isChecked ="";
		if (index === 0) {
			isChecked = "checked";
		}
		return html`
			<div class="tab-controls" role="tab">
				<input
					id="${tabName}-tab"
					type="radio"
					name=${inputGroupName}
					class="tab-controls__input js-browseby-tab"
					value="${tabName}"
					${isChecked}
				/>
				<label for="${tabName}-tab" class="tab-controls__label">
					<h3 class="tab-controls__heading"><span class="visually-hidden">Show panel </span> ${niceTabName}</h3>
				</label>
			</div>
		`;}).join("")}
		</fieldset>

		${tabNames.map((tabName, index) => {
		let randomImageSrc = Math.floor(Math.random() * 3) + 1; //just randomize this a bit for storybook
		let randomColorSrc = Math.floor(Math.random() * 3) + 1; //just randomize this a bit for storybook
		let niceTabName = tabName.replace(/.{1}$/," $&"); //just make it a bit more readable for storybook
		let isHidden = "hidden=\"true\"";
		if (index === 0) {
			isHidden = "";
		}
		return html`
			<section id="${tabName}" class="browseby-tabpanel js-browseby-tabpanel" ${isHidden}>
			<h3 class="visually-hidden">${niceTabName}</h3>
				<div class="browseby-tabpanel-body">
					${titles.map((title, index) => cardTemplate({ title: title, color: colors[index % randomColorSrc], imageURL: images[index % randomImageSrc].srcSet.fallback })).join("")}
				</div>
			</section>
		`;}).join("")}
	</section>`;
};
