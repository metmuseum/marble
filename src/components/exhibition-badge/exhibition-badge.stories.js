import html from "../../../.storybook/helpers/html";
import { boolean, withKnobs } from "@storybook/addon-knobs";

export default { title: "Components/ExhibitionBadge", decorators: [withKnobs] };


const exhibitionBadgeMarkUp = () => {

	const closingSoon = boolean("Closing Soon", false);
	const isColor = boolean("Has Color", true);

	return html`
		<div class='exhibition-badge
			${closingSoon ? "exhibition-badge--closing-soon" : "exhibition-badge--just-opened"}
			${isColor ? "is-color" : ""}'>
			<span class='exhibition-badge__text'>
				${closingSoon ? "Closing soon" : "Just opened"}
			</span>
		</div>`
};

const ExhibitionBadge = () => exhibitionBadgeMarkUp();

export { ExhibitionBadge };
