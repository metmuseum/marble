import { html, repeat } from ".storybook/helpers";
import image4x3 from ".storybook/assets/images/greek-hall/4x3/1240.jpg";


export default {
	title: "Quick Links"
};

const quickLinkMarkUp = (link) => {
	return html`
		<div class="quick-link ${link && "has-link"}">
			<a aria-hidden=true tabindex="-1" href="${link.url}" class="invisible-redundant-link"></a>
				<div class="quick-link__image-wrapper">
					<img class="quick-link__image" src="${link.image}" />
				</div>
				<div class="quick-link__text">
					<h4 class="quick-link__title">
						<a href="${link.url}">
							${link.title}
						</a>
					</h4>
					<div>${link.description}</div>
				</div>
			</div>`;
};

const QuickLinks = (args) => html`
	<section class="productive-component quick-links">
		<h2>${args.title}</h2>
		<div class="quick-links__description">${args.description}</div>
		<div class="quick-links__link-container">
			${repeat((args.numberOfLinks), quickLinkMarkUp(args.link))}
		</div>
		<div class="quick-links__description--bottom">${args.descriptionBottom}</div>
	</section>`;

QuickLinks.args = {
	title: "Quick Links",
	description: "Here are somelinks!",
	descriptionBottom: "You can add some FAQ info here",
	id: "quick-links",
	numberOfLinks: 5,
	link: {
		title: "Visitor Guidelines",
		description: "Review our latest guidelines, including vaccination requirements.",
		url: "https://www.nytimes.com",
		image: image4x3
	}
};


export { QuickLinks };
