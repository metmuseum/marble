import { withKnobs } from "@storybook/addon-knobs";
import "../../../marble.scss";
import PrimaryButtonStories from "./index";

export default {
	decorators: [withKnobs],
	title: "Buttons/Primary/Filled/Anchor Tag",
};

export const SmallActive = PrimaryButtonStories.AnchorFilledSmallActive;

export const SmallInactive = PrimaryButtonStories.AnchorFilledSmallInactive;

export const LargeActive = PrimaryButtonStories.AnchorFilledLargeActive;

export const LargeInactive = PrimaryButtonStories.AnchorFilledLargeInactive;
