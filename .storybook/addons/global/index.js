// per the totally shit storybook documentation, this file automagically runs in the preview area?
import { STORY_RENDERED } from "@storybook/core-events";
import addons, { makeDecorator } from "@storybook/addons";
import global from "../../../src/global/global";

export default makeDecorator({
	name: "withGlobalJavascript",
	parameterName: "myParameter",
	skipIfNoParametersOrOptions: false,
	wrapper: (getStory, context, { parameters }) => {
		const channel = addons.getChannel();
		channel.on(STORY_RENDERED, global);

		// Our API above sets the notes parameter to a string,
		// which we send to the channel
		// channel.emit("my/customEvent", parameters);
		// we can also add subscriptions here using channel.on('eventName', callback);

		return getStory(context);
	},
});
