import { html } from ".storybook/helpers";

export default { title: "Collection Objects/Label/Atoms/Title" };

export const Title = (args) => html`
	<h1 class="object-title" itemprop="name">${args.text}</h1>
`;

Title.args = {
	text: 'Hippopotamus ("William")'
};
