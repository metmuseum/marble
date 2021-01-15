import html from "../../../.storybook/helpers/html";
export default { title: "Deprecated/Card" };

const data = {
	header: "(OLD) Marble Card",
	description:
		"We've re-designed these cards as Content Cards. These shouldnt be used on new projects and should be phased out. Thank You",
	images:
		"https://www.metmuseum.org/-/media/images/150-anniversary/met-stories/2020_met_stories_ep_01_4k_new.jpg?la=en&hash=9CDD1BCFB213A815CCF4B476CDA5B35F 2x, https://www.metmuseum.org/-/media/images/150-anniversary/met-stories/2020_met_stories_ep_01_4k_new.jpg?la=en&w=1920&hash=342B752D9534482E6C5C988C117585A4 1x",
	link: {
		url: "http://metmuseum.org",
		text: "Watch Episode 1",
	},
};

const cardMarkup = (model, className) => {
	return html`<section>

		<div class="marble-card ${className}">
			<a href="${model.link.url}" class="marble-card__image-link" tabindex="-1">
				<div class="marble-card__image-wrapper">
					<img class="marble-card__image" srcset="${model.images}" />
				</div>
			</a>

			<div class="marble-card__subject">

				<div class="marble-card__subject-body">
					<h2 class="marble-card__header">
						<a href="${model.link.url}">
							${model.header}
						</a>
					</h2>
					<div class="marble-card__meta">
						<div class="marble-card__meta-body">
							<div class="marble-card__meta-description">
								${model.description}
							</div>
							<div class="marble-card__meta-link">
								<a href="${model.link.url}" class="button tertiary-button"
									>${model.link.text}</a
								>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>`;
};

export const Card = (className) => {
  return cardMarkup(data, className);
}
