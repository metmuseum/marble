export default class AnalyticsLogger {
	constructor() {
		console.trace("New analytics logger instantiated");
	}

	sendCustomEvent(args) {
		try {
			console.log("Analytics event: ", args);
		} catch (err) {
			console.error(err);
		}
	}
}
