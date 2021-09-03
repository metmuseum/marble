import html from "../../../.storybook/helpers/html";
import { withKnobs, radios, color, text } from "@storybook/addon-knobs";
import he from "he";
export default { title: "Notification Banner", decorators: [withKnobs] };

const data = (defaultMode="expressive") => ({
	mode: radios("Expressive or Productive?", {Expressive: "expressive", Productive: "productive" }, defaultMode),
	backgroundColor: color("Background Color", "#fff"),
	textColor: color("Text Color", "#000"),
	header: text("Header", "The Museum Has Temporarily Closed"),
	description: text("Description", "<p>The Museum has temporarily closed all three locations effective March 13, to support New York City’s effort to contain the spread of COVID-19.</p>"),
	link: {
		url: "http://metmuseum.org",
		text: text("Link Text", "Learn More")
	},
});


const notificationMarkup = (model) => {
	return html`<section class="notification-banner notification-banner--${model.mode}"
		style="color: ${model.textColor}; background-color: ${model.backgroundColor};"
		>
			<h2 class="notification-banner__header">${model.header}</h2>
			<div class="notification-banner__body">
				<div class="notification-banner__subtext">${he.decode(model.description)}</div>
				<a href="${model.link.url}" class="notification-banner__link">${model.link.text}</a>
			</div>
	</section>`;
};


export const expressive = () => notificationMarkup(data());

export const productive = () => notificationMarkup(data("productive"));
