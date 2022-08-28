import { html } from ".storybook/helpers";
import { mapPin } from ".storybook/assets/svg";

export default { title: "Collection Objects/Label/Atoms/Availability" };

const formattedText = ({ status, building, locations }) => {
	if (status == "On view") {
		return html`${status} at ${building} in ${locations.map(
			({ name, url }) => html`<a href="${url}" class="object-availability__link">${name}</a>`)}`;
	}
};

export const Availability = (args) => html`<h4 class="object-availability">${mapPin} ${formattedText(args)}</h4>`;

Availability.args = {
	status: "On view",
	building: "The Met Fifth Avenue",
	locations: [{ name: "Gallery 136", url: "https://maps.metmuseum.org/?feature=LTczLjk2MjQ3ODM0LDQwLjc3OTcyMTMxQGxtQDYyMDQ3ODk3MjE2OQ==" }]  // select of on view, not on view, etc. ? 
};
