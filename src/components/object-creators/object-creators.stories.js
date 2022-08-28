import { html } from ".storybook/helpers";

export default { title: "Collection Objects/Label/Atoms/Creators" };

export const Creators = (args) => html`
	<h3 class="object-creators">${args.text}</h3>
`;

Creators.args = {
	text: "Middle Kingdom"
};
