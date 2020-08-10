import html from "./html";

const parentWrapper = (innerStory, className) => {
	return html`<div class="${className}">${innerStory()}</div>`;
};

export default parentWrapper;
