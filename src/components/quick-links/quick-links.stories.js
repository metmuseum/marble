import { html, repeat } from ".storybook/helpers";
import { withKnobs, number, text } from "@storybook/addon-knobs";
import image4x3 from ".storybook/assets/images/greek-hall/4x3/1240.jpg";


export default {
	title: "Quick Links",
	decorators: [withKnobs],
};

const data = () => ({
	title: text("Heading", "Quick Links"),
	id: "quick-links",
	numberOfLinks: number("Number of Links", 5),
	link: {
		title: text("Link Title", "Visitor Guidelines"),
		description: text("Link Description", "Review our latest guidelines, including vaccination requirements."),
		url: text("Link URL", "https://www.nytimes.com"),
		image: text("Link Image", image4x3)
	}
});

const quickLinkMarkUp = (link) => {
	return html`
		<div class="quick-link">
			<a aria-hidden=true tabindex="-1" href="${link.url}" class="invisible-redundant-link"></a>
				<div class="quick-link__image-wrapper">
					<img class="quick-link__image" src="${link.image}" />
				</div>
				<div class="quick-link__text">
					<h4>
						<a href="${link.url}">
							${link.title}
						</a>
					</h4>
					<div>${link.description}</div>
				</div>
			</div>`;
};

const markup = (model) => {
	return html`
		<section class="productive-component quick-links">
		<h2>${model.title}</h2>
		<div class="quick-links__link-container">
			${repeat(number("Number of Links", model.numberOfLinks), quickLinkMarkUp(model.link))}
		</div>
	</section>`;
};

const QuickLinks = () => {
	const storyData = data();
	return markup(storyData);
};

export { QuickLinks };
