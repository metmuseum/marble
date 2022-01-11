import { html } from ".storybook/helpers";
export default { title: "Components/ExhibitionBadge" };

const exhibitionBadgeMarkUp = ({ closingSoon, hover }) => html`
	<div class='exhibition-badge
		${closingSoon ? "exhibition-badge--closing-soon" : "exhibition-badge--just-opened"}
		${hover ? "is-color" : ""}'>
		<span class='exhibition-badge__text'>
			${closingSoon ? "Closing soon" : "Just opened"}
		</span>
	</div>`;

export const JustOpened = exhibitionBadgeMarkUp.bind({});
JustOpened.args = {
	closingSoon: false,
	hover: false
};

export const JustOpenedHover = exhibitionBadgeMarkUp.bind({});
JustOpenedHover.args = {
	closingSoon: false,
	hover: true
};

export const ClosingSoon = exhibitionBadgeMarkUp.bind({});
ClosingSoon.args = {
	closingSoon: true,
	hover: false
};

export const ClosingSoonHover = exhibitionBadgeMarkUp.bind({});
ClosingSoonHover.args = {
	closingSoon: true,
	hover: true
};
