import { addDecorator, addParameters } from "@storybook/html";
import { useEffect } from "@storybook/client-api";
import { withA11y } from "@storybook/addon-a11y";
import global from "../src/global/global";
import colorVariables from "../src/base/_colors.scss";
import "./storybook.css";

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
	backgrounds: {
		values: [
			{ name: "white", value: colorVariables.colorWhite },
			{ name: "grey500", value: colorVariables.colorGrey500 },
			{ name: "black", value: colorVariables.colorBlack },
		],
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
