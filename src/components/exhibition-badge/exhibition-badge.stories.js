import html from "../../../.storybook/helpers/html";
export default { title: "Components/ExhibitionBadge" };

const exhibitionBadgeMarkUp = (closingSoon, hover) => html`
	<div class='exhibition-badge
		${closingSoon ? "exhibition-badge--closing-soon" : "exhibition-badge--just-opened"}
		${hover ? "is-color" : ""}'>
		<span class='exhibition-badge__text'>
			${closingSoon ? "Closing soon" : "Just opened"}
		</span>
	</div>`;

export const JustOpened = ({ closingSoon, hover }) => exhibitionBadgeMarkUp(closingSoon, hover);
JustOpened.args = {
	closingSoon: false,
	hover: false
};

export const JustOpenedHover = ({ closingSoon, hover }) => exhibitionBadgeMarkUp(closingSoon, hover);
JustOpenedHover.args = {
	closingSoon: false,
	hover: true
};

export const ClosingSoon = ({ closingSoon, hover }) => exhibitionBadgeMarkUp(closingSoon, hover);
ClosingSoon.args = {
	closingSoon: true,
	hover: false
};

export const ClosingSoonHover = ({ closingSoon, hover }) => exhibitionBadgeMarkUp(closingSoon, hover);
ClosingSoonHover.args = {
	closingSoon: true,
	hover: true
};
