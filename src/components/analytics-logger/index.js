export default class AnalyticsLogger {
	constructor() {
		console.trace("New analytics logger instantiated");
	}

	sendCustomEvent({ eventCategory, eventAction, eventLabel, eventValue }) {
		try {
			console.log("Analytics event: ", { eventCategory, eventAction, eventLabel, eventValue });
		} catch (err) {
			console.error(err);
		}
	}
}