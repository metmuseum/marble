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
		goodNews: boolean("Good News", false),
		withArrow: boolean("With Arrow", true)
	};
};

const helpIcon = html`
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58192 0 0 3.58192 0 8C0 12.4181 3.58192 16 8 16C12.4181 16 16 12.4181 16 8C16 3.58192 12.4181 0 8 0ZM7 13V11H9V13H7ZM7 3V9H9V3H7Z" fill="currentColor"/>
	</svg>`;

export const containerWithAlert = () => {
	const model = data();
	const hideAlertClass = model.hideAlert ? "" : "show-alert";
	const alertType = model.goodNews ? "is-success" : "is-error";
	const withArrow = model.withArrow ? "has-arrow" : "";

	return html`
	<section style="padding: 20px;">
		<span class="marble-input__container ${hideAlertClass} ${alertType} ${withArrow}" style="min-width: 50vw">
			<input
				class="marble-input input-number--reset"
				placeholder="Example: 621"
				pattern="[0-9]*"
				type="text">
			</input>

			<div class="marble-input__message marble-input__message-error" role=alert>
				<div class="marble-input__message-icon">${helpIcon}</div>
				<div class="marble-input__message-text">${model.message}</div>
			</div>
		</span>
	</section>
	`;
};
