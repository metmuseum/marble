export default { title: "Typography" };

// TODO: what to do with these?

const h2Subtext = (text) =>
	`<h2 class="notification-banner__subtext">${text}</h2>`;
const h2SubtextFixed = (text) =>
	`<div class="fixed-width"><h2 class="notification-banner__subtext">${text}</h2></div>`;

export const headings = () => {
	return (
		h2Subtext("By Jove, my quick study of lexicography won a prize!") +
		h2SubtextFixed("By Jove, my quick study of lexicography won a prize!")
	);
};
