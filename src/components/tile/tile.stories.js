import html from "../../../.storybook/helpers/html";
import repeat from "../../../.storybook/helpers/repeat";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { sizesTemplate } from "../image-container/image-container.stories";
import greekHall from "../../../.storybook/assets/images/greek-hall";

export default { title: "Tiles", decorators: [withKnobs] };

const { image16x9 } = greekHall;

const heading = (groupName="Tile") => {
	const link = boolean("Link?", true, groupName);
	const title = text("Title", "The Medici: Portraits and Politicis, 1512-1570", groupName);
	return link ? html`<a href="#">${title}</a>` : title;
};

const Tile = () => html`
	<div class="tile">
		<div class="tile__image image-container">
			<img class="image-container__image" alt="${image16x9.alt}" width="${image16x9.width}" height="${image16x9.height}"
				src="${image16x9.srcSet.fallback}" srcset="${sizesTemplate(image16x9.srcSet)}" sizes="(orientation: landscape) 21vw, 50vw" />
		</div>
		<div class="tile__text">
			<h4 class="tile__heading">${heading()}</h4>
			<div class="tile__subheading">${text("Subheading", "Through October 11", "Tile")}</div>
			<div class="tile__body">${text("Body", "The Met Fifth Avenue", "Tile")}</div>
		</div>
	</div>`;

const HeroTile = () => html`
	<div class="tile tile--hero">
		<div class="tile__image image-container">
			<img class="image-container__image" alt="${image16x9.alt}" width="${image16x9.width}" height="${image16x9.height}"
				src="${image16x9.srcSet.fallback}" srcset="${sizesTemplate(image16x9.srcSet)}" sizes="(orientation: landscape) 42.5vw, 85vw" />
		</div>
		<div class="tile__text">
			<h3 class="tile__heading">${heading("Hero Tile")}</h3>
			<div class="tile__subheading">${text("Subheading", "Through October 11", "Hero Tile")}</div>
			<div class="tile__body">${text("Body", "The Met Fifth Avenue", "Hero Tile")}</div>
		</div>
	</div>`;

const TileGroup = () => {
	const options = {
		range: true,
		min: 1,
		max: 36,
		step: 1,
	};

	const numberOfTiles = number("Number of Tiles",5, options, "Tile Group");

	return html`
	<div class="tile-group">
		${HeroTile()}
		<ul class="tile-group__list">
			${repeat(numberOfTiles, html`<li class="tile-group__tile">${Tile()}</li>`)}
		</ul>
	</div>`;};

TileGroup.parameters = {
	chromatic: { viewports: [320, 1280] }
};

export { Tile, HeroTile, TileGroup };
