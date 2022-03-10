import { html } from ".storybook/helpers";
import { useEffect } from "@storybook/client-api";
import { alertIcon } from ".storybook/assets/svg";
import initializeAlert from "./index";

export default { title: "Alerts" };

const args = {
	show: true,
	message: "Your browser appears to be offline.",
	dismiss: "Dismiss",
	icon: alertIcon,
};

const DismissableAlert = (args) => {
	useEffect(initializeAlert);

	return html`
	<div class="dismissable-alert js-marble-dismissable-alert ${args.show ? " show" : ""}" role="alert">
		<div class="dismissable-alert__message">
			<div class="marble-input__message-icon">${args.icon}</div>
			${args.message}
		</div>
		<button class="tertiary-button js-marble-dismiss-alert-button">${args.dismiss}</button>
	</div>`;
};

DismissableAlert.args = args;

const DismissableAlertDismsissed = (args) => DismissableAlert(args);
DismissableAlertDismsissed.args = {
	...args,
	show: false
};
DismissableAlertDismsissed.storyName = "Dismissable Alert (Dismissed)";

export { DismissableAlert, DismissableAlertDismsissed };