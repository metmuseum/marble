import html from "../../../.storybook/helpers/html";
export default { title: "Components/Byline" };

const data = {
	name: "Jeanie Choi",
	date: "January 1, 1957",
	link: {
		url: "http://metmuseum.org",
	}
}

const cardMarkup = (model) => {
	return html`<div class="byline">
        <span class="byline__author">
            <a href="${model.link.url}">${model.name}</a>
        </span>
        <span class="byline__date">
            ${model.date}
        </span>
    </div>`;
};

export { cardMarkup };

export const Byline = () => {
	return cardMarkup(data());
};