import html from "../../../.storybook/helpers/html";
import { boolean, withKnobs } from "@storybook/addon-knobs";

export default { title: "Components/ExhibitionBadge", decorators: [withKnobs] };

const exhibitionBadgeMarkUp = (closingSoon, hover) => {
	const data = {
		closingSoon: boolean("Closing Soon?", closingSoon),
		hover: boolean("Hover?", hover),
	};
	return html`
		<div class='exhibition-badge
			${data.closingSoon ? "exhibition-badge--closing-soon" : "exhibition-badge--just-opened"}
			${data.hover ? "is-color" : ""}'>
			<span class='exhibition-badge__text'>
				${data.closingSoon ? "Closing soon" : "Just opened"}
			</span>
		</div>`;
};

export const JustOpened = () => exhibitionBadgeMarkUp(false, false);
export const JustOpenedHover = () => exhibitionBadgeMarkUp(false, true);
export const ClosingSoon = () => exhibitionBadgeMarkUp(true, false);
export const ClosingSoonHover = () => exhibitionBadgeMarkUp(true, true);
