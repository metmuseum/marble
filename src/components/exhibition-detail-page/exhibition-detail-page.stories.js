import html from "../../../.storybook/helpers/html";
import { fullWidth } from "../image-container/image-container.stories.js";
import greekHallImage16x9 from "../../../.storybook/assets/images/greek-hall/16x9";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { TabControls } from "../tab-controls/tab-controls.stories";

export default {
	title: "Exhibition Detail Page",
	decorators: [withKnobs],
};

const building = {
	name: "The Met Fifth Avenue",
	path: "/visit/the-met-fifth-avenue",
};

const entryType = {
	name: "Included",
	displayText: "Entry Included With Museum Admission",
};

const exhibition = {
	heroImage: greekHallImage16x9,
	title: "Sahel: Art and Empires on The Shores of the Sahara",
	tabs: ["Overview", "Visiting Guide", "Objects on View"],
	status: {
		message: "Now on View at",
	},
	building: building,
	entryType: entryType,
	detailPage: {
		header: {
			cta1: {
				text: "Buy Tickets",
				link: "/tickets",
			},
			cta2: {
				text: "Plan Your Visit",
				link: "/visit",
			},
		},
	},
};

const ExhibitionStatusModule = () => {
	return html`
		<div class="edp-header__status_module">
			${exhibition.status.message}
			<a href="/${exhibition.building.path}">${exhibition.building.name}</a>
			<br />
			${exhibition.entryType.displayText}
		</div>
	`;
};

const ExhibitionDetailPage = () => {
	return html`<div>
		${fullWidth(exhibition.heroImage)}
		<header class="edp-header">
			<div class="edp-header__row">
				<div>
					<div class="edp-header__eyebrow">EXHIBITION</div>
					<h2>${exhibition.title}</h2>
				</div>
				${ExhibitionStatusModule()}
			</div>
			<div class="edp-header__row edp-header__row--bottom">
				${TabControls(exhibition.tabs)}
				<div class="edp-header__cta-container">
					<a
						href="${exhibition.detailPage.header.cta1.link}"
						class="button primary-button
								primary-button--small
								primary-button--filled"
					>
						${exhibition.detailPage.header.cta1.text}
					</a>
					<a
						href="${exhibition.detailPage.header.cta2.link}"
						class="a tertiary-button"
					>
						${exhibition.detailPage.header.cta2.text}
					</a>
				</div>
			</div>
		</header>
	</div>`;
};

export { ExhibitionDetailPage };
