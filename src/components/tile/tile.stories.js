import html from "../../../.storybook/helpers/html";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { sizesTemplate } from "../image-container/image-container.stories";
import greekHall from "../../../.storybook/assets/images/greek-hall";

export default { title: "Tiles", decorators: [withKnobs] };

// todo: discuss 3:2 vs 16:9 with madhav
// todo: check rodan for "five features"
const { image16x9 } = greekHall;

const heading = () => {
	const link = boolean("Link?", true);
	const title = text("Title", "The Medici: Portraits and Politicis, 1512-1570");
	return link ? html`<a href="#">${title}</a>` : title;
};

const Tile = () => html`
  <div class="tile">
    <div class="tile__image image-container">
      <img class="image-container__image" alt="${image16x9.alt}" width="${image16x9.width}" height="${image16x9.height}"
        src="${image16x9.srcSet.fallback}" srcset="${sizesTemplate(image16x9.srcSet)}" sizes="(orientation: landscape) 250px, 50vw" />
    </div>
    <div class="tile__text">
      <h4>${heading()}</h4>
      <div class="tile__subheading">${text("Subheading", "Through October 11")}</div>
      <div class="tile__body">${text("Body", "The Met Fifth Avenue")}</div>
    </div>
  </div>`;

const HeroTile = () => html`
  `;

export { Tile, HeroTile };
