import "./global.scss";

export default { title: "Typography" };

const h1 = (text) => `<h1>${text}</h1>`;
const h1Fixed = (text) => `<div class="fixed-width"><h1>${text}</h1></div>`;
const h1Expressive = (text) => `<h1 class="expressive">${text}</h1>`;
const h2 = (text) => `<h2>${text}</h2>`;
const h2Fixed = (text) => `<div class="fixed-width"><h2>${text}</h2></div>`;
const h2Subtext = (text) =>
	`<h2 class="notification-banner__subtext">${text}</h2>`;
const h2SubtextFixed = (text) =>
	`<div class="fixed-width"><h2 class="notification-banner__subtext">${text}</h2></div>`;
const h3 = (text) => `<h3>${text}</h3>`;
const h4 = (text) => `<h4>${text}</h4>`;

export const headings = () => {
	return (
		h1("By Jove, my quick study of lexicography won a prize!") +
		h1Fixed("By Jove, my quick study of lexicography won a prize!") +
		h1Expressive("By Jove, my quick study of lexicography won a prize!") +
		h2("By Jove, my quick study of lexicography won a prize!") +
		h2Fixed("By Jove, my quick study of lexicography won a prize!") +
		h2Subtext("By Jove, my quick study of lexicography won a prize!") +
		h2SubtextFixed("By Jove, my quick study of lexicography won a prize!") +
		h3("By Jove, my quick study of lexicography won a prize!") +
		h4("By Jove, my quick study of lexicography won a prize!")
	);
};
