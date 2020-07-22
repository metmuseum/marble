import { withKnobs } from "@storybook/addon-knobs";
import "../../../marble.scss";
import PrimaryButtonStories from "./index";

export default {
	decorators: [withKnobs],
	title: "Buttons/Primary/Ghost/Button Tag",
};

export const SmallActive = PrimaryButtonStories.ButtonGhostSmallActive;

export const SmallInactive = PrimaryButtonStories.ButtonGhostSmallInactive;

export const LargeActive = PrimaryButtonStories.ButtonGhostLargeActive;

export const LargeInactive = PrimaryButtonStories.ButtonGhostLargeInactive;
