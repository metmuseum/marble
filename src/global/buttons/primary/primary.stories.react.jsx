import React from 'react';

import { Button } from './button.jsx';

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

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
