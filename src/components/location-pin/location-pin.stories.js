import { html } from ".storybook/helpers";
import { mapPin } from ".storybook/assets/svg";

export default { title: "Elements/UI/Location Pin" };

const formattedText = ({ locations }) => {
	return html`${locations.map(
		({ name, url }) => html`<a href="${url}" class="location-pin__link">${name}</a>`)}`;
};

export const LocationPin = (args) => html`<span class="location-pin">${mapPin} ${formattedText(args)}</span>`;

LocationPin.args = {
	locations: [{ name: "Gallery 136", url: "https://maps.metmuseum.org/?feature=LTczLjk2MjQ3ODM0LDQwLjc3OTcyMTMxQGxtQDYyMDQ3ODk3MjE2OQ==" }]
};
