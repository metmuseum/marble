const path = require("path");
import initStoryshots from "@storybook/addon-storyshots";
import { puppeteerTest } from "@storybook/addon-storyshots-puppeteer";

const getMatchOptions = ({ context: { kind, story }, url }) => {
	return {
		failureThreshold: 0,
		failureThresholdType: "percent",
	};
};
const beforeScreenshot = (page, { context: { kind, story }, url }) => {
	return new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, 600)
	);
};
const afterScreenshot = ({ image, context }) => {
	return new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, 100)
	);
};

initStoryshots({
	framework: "html",
	suite: "Image storyshots",
	test: puppeteerTest({
		storybookUrl: `file://${path.resolve(__dirname, "../.out")}`,
		getMatchOptions,
		beforeScreenshot,
		afterScreenshot,
	}),
});
