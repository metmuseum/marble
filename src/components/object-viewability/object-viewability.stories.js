import { html } from ".storybook/helpers";
import { eyeSlash } from ".storybook/assets/svg";
import { LocationPin } from "../location-pin/location-pin.stories";

export default {
	title: "Collection Objects/Label/Atoms/Viewability",
};

export const Viewability = ({ status, building, locations }) => {
	switch (status) {
	case "On view":
		return html`<div class="object-viewability">${status} at ${building} in ${LocationPin({ locations })}</div >`;
	case "Not on view":
		return html`<div class="object-viewability">${eyeSlash} ${status}</div>`;
	}
};

Viewability.args = {
	status: "On view",
	building: "The Met Fifth Avenue",
	locations: [{ name: "Gallery 136", url: "https://maps.metmuseum.org/?feature=LTczLjk2MjQ3ODM0LDQwLjc3OTcyMTMxQGxtQDYyMDQ3ODk3MjE2OQ==" }]  // select of on view, not on view, etc. ? 
};

Viewability.argTypes = {
	status: {
		control: "radio",
		options: ["On view", "Not on view"],
	}
};

export const NotOnView = () => {
	return Viewability({ status: "Not on view" });
};

export const OnView = () => {
	return Viewability({
		...Viewability.args,
		status: "On view"
	});
};
