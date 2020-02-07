import "../card.scss";

export default { title: 'Cards' };

const data = {
	header: "Large Editorial Card",
	description: "Have you ever heard a museum love story? Did you know that art has the power to heal? Met visitors share their personal stories in this new series.",
	images: "https://www.metmuseum.org/-/media/images/150-anniversary/met-stories/2020_met_stories_ep_01_4k_new.jpg?la=en&hash=9CDD1BCFB213A815CCF4B476CDA5B35F 2x, https://www.metmuseum.org/-/media/images/150-anniversary/met-stories/2020_met_stories_ep_01_4k_new.jpg?la=en&w=1920&hash=342B752D9534482E6C5C988C117585A4 1x",
	link: {
		url: "http://metmuseum.org",
		text: "Watch Episode 1"
	}
}

const cardMarkup = (model) => {
	return `<section class="editorial-card--large">
		<div class="card">
			<div class="card-image__wrapper">
				<a href="${model.link.url}" class="card-image__link" tabindex="-1">
					<img class="card-image" srcset="${model.images}">
				</a>
			</div>
			<div class="card-subject">
				<div class="card-subject__body">
					<div class="card-header">
						<div class="card-header__body">
							<h2 class="card-header__title">
								<a href="${model.link.url}">
									${model.header}
								</a>
							</h2>
						</div>
					</div>
					<div class="card-meta">
						<div class="card-meta__body">
							<div class="card-meta__description">
								${model.description}
							</div>
							<div class="card-meta__link">
								<a href="${model.link.url}" class="button--tertiary">${model.link.text}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>`
}


export const LargeEdiotrialCard = () => {
  return cardMarkup(data);
}
