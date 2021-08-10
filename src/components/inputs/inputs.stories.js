import html from "../../../.storybook/helpers/html";
import { withKnobs, text, boolean} from "@storybook/addon-knobs";

export default {
	title: "Inputs/Container",
	decorators: [withKnobs]
};

const data = () => {
	return {
		message: text("Message", "We couldn't find that audio stop"),
		hideAlert: boolean("Hide Alert", false),
		showSuccesIcon: boolean("Succes Icon", false),
		withArrow: boolean("With Arrow", true)
	};
};

const errorIcon = html`
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10 0C4.4774 0 0 4.4774 0 10C0 15.5226 4.4774 20 10 20C15.5226 20 20 15.5226 20 10C20 4.4774 15.5226 0 10 0Z" fill="#FE8800"/>
		<path d="M11.25 16.25H8.75V13.75H11.25V16.25Z" fill="white"/>
		<path d="M11.25 11.25H8.75V3.75H11.25V11.25Z" fill="white"/>
	</svg>
`;

const succesIcon = html `
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10 0C4.4774 0 0 4.4774 0 10C0 15.5226 4.4774 20 10 20C15.5226 20 20 15.5226 20 10C20 4.4774 15.5226 0 10 0Z" fill="#00BA84"/>
		<path d="M14.735 6.62376L7.9525 13.5412L4.9362 10.2153C4.77134 10.0339 4.49643 10.0292 4.32002 10.2089C4.14588 10.3868 4.13666 10.6782 4.30316 10.862L7.91651 14.8492L15.3321 7.28505C15.5068 7.10301 15.5161 6.81159 15.3512 6.63017C15.1864 6.44875 14.9111 6.44617 14.735 6.62376Z" fill="white" stroke="white"/>
	</svg>
`;

export const containerWithAlert = () => {
	const model = data();
	const hideAlertClass = model.hideAlert ? "" : "show-alert";
	const withArrow = model.withArrow ? "has-arrow" : "";
	const icon = model.showSuccesIcon ? succesIcon : errorIcon;

	return html`
	<section style="padding: 20px;">
		<span class="marble-input__container ${hideAlertClass} ${withArrow}" style="min-width: 50vw">
			<input
				class="marble-input input-number--reset"
				placeholder="Example: 621"
				pattern="[0-9]*"
				type="text">
			</input>

			<div class="marble-input__message marble-input__message-error" role=alert>
				<div class="marble-input__message-icon">${icon}</div>
				<div class="marble-input__message-text">${model.message}</div>
			</div>
		</span>
	</section>
	`;
};
