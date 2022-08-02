import { html } from ".storybook/helpers";
export default { title: "Components/ExhibitionBadge" };

const exhibitionBadgeMarkUp = ({ closingSoon }) => html`
	<div class='exhibition-badge
		${closingSoon ? "exhibition-badge--closing-soon" : "exhibition-badge--just-opened"}'>
		<span class='exhibition-badge__text'>
			${closingSoon ? "Closing soon" : "Just opened"}
		</span>
	</div>`;

export const JustOpened = exhibitionBadgeMarkUp.bind({});
JustOpened.args = {
	closingSoon: false
};

export const ClosingSoon = exhibitionBadgeMarkUp.bind({});
ClosingSoon.args = {
	closingSoon: true
};

