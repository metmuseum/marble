import html from "../../../.storybook/helpers/html";
import greekHallImage16x9 from "../../../.storybook/assets/images/greek-hall/16x9";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { fullWidth } from "../image-container/image-container.stories.js";

export default {
	title: "Exhibition Detail Page",
	decorators: [withKnobs],
};

const ExhibitionDetailPage = () => {
	return html`${fullWidth(greekHallImage16x9)}`;
};

export { ExhibitionDetailPage };
