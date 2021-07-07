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
	};
};


export const containerWithAlert = () => {
	const model = data();
	const hideAlertClass = model.hideAlert ? "" : "show-alert";
	const alertType = model.goodNews ? "is-success" : "is-error";
	const inputType = model.inputType ? "number" : "text";

	return html`
	<section style="padding: 20px;">
		<span class="marble-input__container ${hideAlertClass} ${alertType}" style="min-width: 50vw">
			<input
				class="marble-input input-number--reset"
				placeholder="Example: 621"
				pattern="[0-9]*"
				type="text">
			</input>

			<div class="marble-input__message marble-input__message-error">
				<div class="marble-input__message-icon"> i </div>
				<div class="marble-input__message-text">${model.message}</div>
			</div>
		</span>
	</section>
	`;
};
