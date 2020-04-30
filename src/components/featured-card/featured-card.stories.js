import "./featured-card.scss";

export default { title: 'Featured Card' };

const data = {
	header: "Featured Card",
	description: "This Represents a Marble Card without any tweaking. Currently Not really a component, just the basis of a bunch of different ones.",
	images: "https://www.metmuseum.org/-/media/images/150-anniversary/met-stories/2020_met_stories_ep_01_4k_new.jpg?la=en&hash=9CDD1BCFB213A815CCF4B476CDA5B35F 2x, https://www.metmuseum.org/-/media/images/150-anniversary/met-stories/2020_met_stories_ep_01_4k_new.jpg?la=en&w=1920&hash=342B752D9534482E6C5C988C117585A4 1x",
	link: {
		url: "http://metmuseum.org",
		text: "Watch Episode 1"
	}
}

const featuredCardMarkup = (model) => {
	return `<section>
		<div class="marble-card">
			<a href="${model.link.url}" class="marble-card__image-link" tabindex="-1">
				<div class="marble-card__image-wrapper">
					<img class="marble-card__image" srcset="${model.images}">
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
								<a href="${model.link.url}" class="button--tertiary">${model.link.text}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>`
}


export const FeaturedCard = () => {
  return featuredCardMarkup(data);
}
