import { addDecorator } from "@storybook/html";
import { useEffect } from "@storybook/client-api";
import global from "../src/global/global";

const marbleGlobalJSDecorator = storyFn => {
	useEffect(global);
	return storyFn();
};

addDecorator(marbleGlobalJSDecorator);
