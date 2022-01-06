import { html, backgroundOverride } from ".storybook/helpers";
import "../_sb-only.scss";

const permutations = {
	elementTags: ["Button", "Anchor"],
	styles: ["Ghost-Light", "Ghost-Dark"],
	states: ["Active", "Inactive", "Focus", "Hover"],
};

const argTypes = {
	elementTag: {
		options: permutations.elementTags,
		control: "inline-radio"
	},
	styleMode: {
		options: permutations.styles,
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
	}
};

export default {
	title: "Elements/Buttons/Secondary",
	argTypes
};

const StoriesToExport = {};

permutations.elementTags.forEach((elementTag) => {
	permutations.styles.forEach((styleMode) => {
		permutations.states.forEach((state) => {
			const args = {
				label: "Secondary Button",
				elementTag,
				styleMode,
				state
			};

			let current = [elementTag, styleMode, state];
			let storyName = current.map((option) => option.replaceAll("-", "")).join("");

			StoriesToExport[storyName] = (args) => SecondaryButton(args);
			StoriesToExport[storyName].story = {
				title: "Elements/Buttons/Secondary",
				name: current.map((option) => option.replaceAll("-", " ")).join(" ")
			};
			StoriesToExport[storyName].args = args;
		});
	});
});


const SecondaryButton = (args) => {
	`${console.log("down ehre args is: ", args)}`;
	if (args.elementTag === "Button") {
		return html`
			${args.styleMode !== "Ghost-Dark" ? backgroundOverride() : ""}
			${args.viewMode == "Give it some breathing room" ? html`<div class="_sb-breathing-room">` : ""}
				<button class="button secondary-button secondary-button--${args.styleMode.toLowerCase()}
								${args.state === "Hover" ? "_sb--hover" : ""} ${args.state === "Focus" ? "_sb--focus" : "" }"
					${args.state==="Inactive" ? "disabled" : "" }>
					${args.label}
				</button>
				${args.viewMode == "Give it some breathing room" ? "</div>" : ""}
		`;
	}

	if (args.elementTag === "Anchor") {
		return html`
			${args.styleMode !== "Ghost-Dark" ? backgroundOverride() : ""}
			${args.viewMode == "Give it some breathing room" ? html`<div class="_sb-breathing-room">` : ""}
				<a class="button secondary-button secondary-button--${args.styleMode.toLowerCase()}
							${args.state === "Hover" ? "_sb--hover" : ""} ${args.state === "Focus" ? "_sb--focus" : "" }"
					${args.state === "Inactive" ? "disabled" : "" } role="button" tabindex="0">
					${args.label}
					</a>
			${args.viewMode == "Give it some breathing room" ? "</div>" : ""}
		`;
	}

	return html`Error: no element tag selected ${JSON.stringify(args)}`;
};

/* eslint storybook/story-exports: "off" */
export const {
	ButtonGhostLightActive,
	ButtonGhostLightFocus,
	ButtonGhostLightHover,
	ButtonGhostDarkActive,

	AnchorGhostLightActive,
	AnchorGhostLightFocus,
	AnchorGhostLightHover,
	AnchorGhostDarkActive,
} = StoriesToExport;