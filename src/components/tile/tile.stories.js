import { html, repeat, srcSet } from ".storybook/helpers";
import greekHall from ".storybook/assets/images/greek-hall";

const { image16x9 } = greekHall;

export default {
	title: "Tiles",
	args: {
		heading: "The Medici: Portraits and Politicis, 1512-1570",
		link: "/#",
		subheading: "Through October 11",
		body: "The Met Fifth Avenue",
		image16x9
	}
};

const Tile = (args) => html`
	<div class="tile">
		<div class="tile__image image-container">
			${args.link ? html`<a class="invisible-redundant-link" aria-hidden="true" tabindex="-1" href="${args.link}"></a>` : ""}
			<img class="image-container__image" alt="${args.image16x9.alt}" width="${args.image16x9.width}" height="${args.image16x9.height}"
				src="${image16x9.srcSet.fallback}" srcset="${srcSet(image16x9.srcSet)}" sizes="(orientation: landscape) 21vw, 50vw" />
		</div>
		<div>
			<h4 class="tile__heading">${args.link ? html`<a href="${args.link}">${args.heading}</a>` : args.heading}</h4>
			<div class="tile__subheading">${args.subheading}</div>
			<div class="tile__body">${args.body}</div>
		</div>
	</div>`;

const HeroTile = (args) => html`
	<div class="tile tile--hero">
		<div class="tile__image image-container">
			${args.link ? html`<a class="invisible-redundant-link" aria-hidden="true" tabindex="-1" href="${args.link}"></a>` : ""}
			<img class="image-container__image" alt="${image16x9.alt}" width="${image16x9.width}" height="${image16x9.height}"
				src="${image16x9.srcSet.fallback}" srcset="${srcSet(image16x9.srcSet)}" sizes="(orientation: landscape) 42.5vw, 85vw" />
		</div>
		<div>
			<h3 class="tile__heading">${args.link ? html`<a href="${args.link}">${args.heading}</a>` : args.heading}</h3>
			<div class="tile__subheading">${args.subheading}</div>
			<div class="tile__body">${args.body}</div>
		</div>
	</div>`;

const TileGroup = (args) => html`
	<div class="tile-group">
		${HeroTile(args)}
		<ul class="tile-group__list">
			${repeat(args.numberOfTiles, html`<li class="tile-group__tile">${Tile(args)}</li>`)}
		</ul>
	</div>`;

TileGroup.args = {
	numberOfTiles: 5,
};

TileGroup.parameters = {
	chromatic: { viewports: [320, 1280] }
};

export { Tile, HeroTile, TileGroup };
