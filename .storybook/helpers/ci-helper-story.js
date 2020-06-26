import html from "../../../.storybook/helpers/html";

// This is just an empty story to run so that we can skip snapshot tests by running the CLI with --only ;)

const CIHelperStory = () => html`<div>test</div> `;

// CIHelperStory.story = {
// 	parameters: {
// 		chromatic: { disable: true },
// 	},
// };

export { CIHelperStory };
