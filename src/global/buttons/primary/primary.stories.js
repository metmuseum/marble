import html from "../../../../.storybook/helpers/html";
import "../_sb-only.scss";

const permutations = {
	elementTags: ["Button", "Anchor"],
	modes: {
		style: ["Filled", "Ghost-Light", "Ghost-Dark"],
		size: ["X-small", "Small", "Large"],
	},
	states: ["Active", "Inactive", "Focus", "Hover"],
};

const argTypes = {
	elementTag: {
		options: permutations.elementTags,
		control: "inline-radio"
	},
	styleMode: {
		options: permutations.modes.style,
		control: "radio"
	},
	sizeMode: {
		options: permutations.modes.size,
		control: "radio"
	},
	state: {
		options: permutations.states,
		control: "radio"
	},
	viewMode: {
		options: ["Just the button", "Give it some breathing room"],
		defaultValue: "Give it some breathing room",
		control: "radio"
	},
};

export default {
	title: "Elements/Buttons/Primary",
	parameters: {
		backgrounds: { disable: true }, // TODO: hopefully Chromatic supports backgrounds soon
	},
	argTypes
};

const StoriesToExport = {};

// Programmatically make these stories :)
permutations.elementTags.forEach((elementTag) => {
	permutations.modes.style.forEach((styleMode) => {
		permutations.modes.size.forEach((sizeMode) => {
			permutations.states.forEach((state) => {
				let args = {
					label: "Primary Button",
					elementTag,
					styleMode,
					sizeMode,
					state,
				};

				let current = [elementTag, styleMode, sizeMode, state].map((option) => { return option.replaceAll("-", ""); });
				let storyName = current.join("");

				StoriesToExport[storyName] = (args) => StoryTemplate(args);
				StoriesToExport[storyName].story = {
					title: "Elements/Buttons/Primary",
					name: current.join(" "),
				};
				StoriesToExport[storyName].args = args;
			});
		});
	});
});

const StoryTemplate = (args) => html`
	${args.viewMode == "Give it some breathing room" ? "<div class='_sb-breathing-room'>" : ""}
		${args.elementTag === "Anchor" ? html`
			<a class="button primary-button
				primary-button--${args.sizeMode.toLowerCase()}
				primary-button--${args.styleMode.toLowerCase()}
				${args.state === " Hover" ? "_sb--hover" : ""}
				${args.state === "Focus" ? "_sb--focus" : ""}" 
				role="button"
				tabindex="0"
				${args.state === "Inactive" ? "disabled" : ""}
			>
				${args.label}
			</a>` : ""}
		${args.elementTag === "Button" ? html`
			<button
				class="button primary-button
				primary-button--${args.sizeMode.toLowerCase()}
				primary-button--${args.styleMode.toLowerCase()}
				${args.state === "Hover" ? "_sb--hover" : ""}
				${args.state === "Focus" ? "_sb--focus" : ""}"
				${args.state === "Inactive" ? "disabled" : "" }
			>
				${args.label}
			</button>` : ""}
	${args.viewMode == "Give it some breathing room" ? "</div>" : ""}
`;

// export const ButtonFilledXsmallActive = StoriesToExport["ButtonFilledXsmallActive"];
// export const Test = (args) => { return html`halp`; };


// javascript why u no have metaprogramming for this 😭
/* eslint storybook/story-exports: "off" */
export const {
	//// buttons
	// filled
	ButtonFilledXsmallActive,
	ButtonFilledXsmallInactive,
	ButtonFilledXsmallFocus,
	ButtonFilledXsmallHover,

	ButtonFilledSmallActive,
	ButtonFilledSmallInactive,
	ButtonFilledSmallFocus,
	ButtonFilledSmallHover,

	ButtonFilledLargeActive,
	ButtonFilledLargeInactive,
	ButtonFilledLargeFocus,
	ButtonFilledLargeHover,

	// ghost light
	ButtonGhostLightXsmallActive,
	ButtonGhostLightXsmallInactive,
	ButtonGhostLightXsmallFocus,
	ButtonGhostLightXsmallHover,

	ButtonGhostLightSmallActive,
	ButtonGhostLightSmallInactive,
	ButtonGhostLightSmallFocus,
	ButtonGhostLightSmallHover,

	ButtonGhostLightLargeActive,
	ButtonGhostLightLargeInactive,
	ButtonGhostLightLargeFocus,
	ButtonGhostLightLargeHover,

	// ghost dark
	ButtonGhostDarkXsmallActive,
	ButtonGhostDarkXsmallInactive,
	ButtonGhostDarkXsmallFocus,
	ButtonGhostDarkXsmallHover,

	ButtonGhostDarkSmallActive,
	ButtonGhostDarkSmallInactive,
	ButtonGhostDarkSmallFocus,
	ButtonGhostDarkSmallHover,

	ButtonGhostDarkLargeActive,
	ButtonGhostDarkLargeInactive,
	ButtonGhostDarkLargeFocus,
	ButtonGhostDarkLargeHover,

	//// anchors
	// filled
	AnchorFilledXsmallActive,
	AnchorFilledXsmallInactive,
	AnchorFilledXsmallFocus,
	AnchorFilledXsmallHover,

	AnchorFilledSmallActive,
	AnchorFilledSmallInactive,
	AnchorFilledSmallFocus,
	AnchorFilledSmallHover,

	AnchorFilledLargeActive,
	AnchorFilledLargeInactive,
	AnchorFilledLargeFocus,
	AnchorFilledLargeHover,

	// ghost light
	AnchorGhostLightXsmallActive,
	AnchorGhostLightXsmallInactive,
	AnchorGhostLightXsmallFocus,
	AnchorGhostLightXsmallHover,

	AnchorGhostLightSmallActive,
	AnchorGhostLightSmallInactive,
	AnchorGhostLightSmallFocus,
	AnchorGhostLightSmallHover,

	AnchorGhostLightLargeActive,
	AnchorGhostLightLargeInactive,
	AnchorGhostLightLargeFocus,
	AnchorGhostLightLargeHover,

	// ghost dark
	AnchorGhostDarkXsmallActive,
	AnchorGhostDarkXsmallInactive,
	AnchorGhostDarkXsmallFocus,
	AnchorGhostDarkXsmallHover,

	AnchorGhostDarkSmallActive,
	AnchorGhostDarkSmallInactive,
	AnchorGhostDarkSmallFocus,
	AnchorGhostDarkSmallHover,

	AnchorGhostDarkLargeActive,
	AnchorGhostDarkLargeInactive,
	AnchorGhostDarkLargeHover,
	AnchorGhostDarkLargeFocus,
} = StoriesToExport;
