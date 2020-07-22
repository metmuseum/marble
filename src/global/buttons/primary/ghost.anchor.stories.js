import { withKnobs } from "@storybook/addon-knobs";
import "../../../marble.scss";
import PrimaryButtonStories from "./index";

export default {
	decorators: [withKnobs],
	title: "Buttons/Primary/Ghost/Anchor Tag",
};

export const SmallActive = PrimaryButtonStories.AnchorGhostSmallActive;

export const SmallInactive = PrimaryButtonStories.AnchorGhostSmallInactive;

export const LargeActive = PrimaryButtonStories.AnchorGhostLargeActive;

export const LargeInactive = PrimaryButtonStories.AnchorGhostLargeInactive;
