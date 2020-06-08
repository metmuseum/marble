// simulates running the global.js code on every story.
import { addons } from "@storybook/addons";
import GLOBAL from "../../../src/global/global";

addons.register("marble/marbleGlobalRunner", (api) => {
	api.on("storyRendered", (eventData) => {
		const channel = addons.getChannel();
		// channel.on("storyRendered", GLOBAL);
		// channel.emit("storyRendered");
		console.debug(
			"re-running Marble's global.js script from add-on",
			eventData,
			channel
		);
	});
});
