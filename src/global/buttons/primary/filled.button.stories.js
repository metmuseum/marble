import { withKnobs } from "@storybook/addon-knobs";
import "../../../marble.scss";
import PrimaryButtonStories from "./index";

export default {
	decorators: [withKnobs],
	title: "Buttons/Primary/Filled/Button Tag",
};

export const SmallActive = PrimaryButtonStories.ButtonFilledSmallActive;

export const SmallInactive = PrimaryButtonStories.ButtonFilledSmallInactive;

export const LargeActive = PrimaryButtonStories.ButtonFilledLargeActive;

export const LargeInactive = PrimaryButtonStories.ButtonFilledLargeInactive;
