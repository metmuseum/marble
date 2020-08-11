import { addDecorator, addParameters } from "@storybook/html";
import { useEffect } from "@storybook/client-api";
import { withA11y } from "@storybook/addon-a11y";
import anysort from "anysort";
import global from "../src/global/global";

const marbleGlobalJSDecorator = (storyFn) => {
	useEffect(global);
	return storyFn();
};

addDecorator(marbleGlobalJSDecorator);
addDecorator(withA11y);

addParameters({
	options: {
		showRoots: true,
		storySort: (previous, next) => {
			const [previousStory, previousMeta] = previous;
			const [nextStory, nextMeta] = next;

			return anysort(previousMeta.kind, nextMeta.kind, [
				"Elements/Buttons/**",
				"Elements/Typography/**",
			]);
		},
	},
});
