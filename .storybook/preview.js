import { addDecorator } from "@storybook/html";
import { useEffect } from "@storybook/client-api";
import { withA11y } from "@storybook/addon-a11y";
import global from "../src/global/global";

const marbleGlobalJSDecorator = (storyFn) => {
	useEffect(global);
	return storyFn();
};

addDecorator(marbleGlobalJSDecorator);
addDecorator(withA11y);
