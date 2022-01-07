import { addDecorator } from "@storybook/html";
import { useEffect } from "@storybook/client-api";
import global from "../src/global/global";

const marbleGlobalJSDecorator = (storyFn) => {
	useEffect(global);
	return storyFn();
};

addDecorator(marbleGlobalJSDecorator);

export const parameters = {
	a11y: {
		config: {
			rules: [
				{
					id: 'frame-tested',
					selector: 'iframe:not(.a11y-ignore)', // ignore iframes with a11y-ignore class
				},
			],
		},
	},
	layout: "fullscreen",
	options: {
		storySort: {
			method: "alphabetical",
			order: [],
			locales: "",
		},
	},
};
