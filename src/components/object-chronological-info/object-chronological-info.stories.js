import { html } from ".storybook/helpers";

export default { title: "Collection Objects/Label/Atoms/Chronological Info" };

export const ChronologicalInfo = (args) => html`
	<h2 class="object-chronological-info">${args.info}</h2>
`;

ChronologicalInfo.args = {
	info: "ca. 1961–1878 B.C."
};
