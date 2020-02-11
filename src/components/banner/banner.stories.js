import "./banner.scss";

export default { title: 'Banner' };

const data = {
	backgroundColor: "#ECDFD7",
	color: "#333333",
	header: "Celebrating 150 Years",
	description: "<p>A storied past. A dynamic present. An exciting future. It's just the beginning!</p><p> Celebrate The Met's anniversary throughout 2020 with exhibitions, events, and new ways to connect with art. Highlights include Making The Met, 1870–2020, the reimagined British Galleries, and a three-day celebration in June.</p>",
	backgroundImages: "https://www.metmuseum.org/-/media/images/150-anniversary/150hubbannermobile.jpg?la=en&hash=507F0AA67DD7FDBB3AFF148741E8A2A0 2x, https://www.metmuseum.org/-/media/images/150-anniversary/150hubbannermobile.jpg?la=en&w=712&hash=3A9DFAFD734E0FAEC4EF53205B45476D 1x",
	imageAlt: "Celebrating 150 Years",
	link: {
		url: "",
	}
}

const bannerMarkup = (model) => {
	return `
		<section class="banner banner-grand banner-@Model.Name">
			<div class="banner__image-wrapper">
			<a class='banner__image-link' href="${model.link.url}" title="${model.imageAlt}">
				<img class="banner__image" srcset="${model.backgroundImages}">
				${model.video ? `TODO: Put Video Here` : ''}
			</a>
			</div>
			<div class="banner__subject" style="background-color: ${model.backgroundColor}; color: ${model.color}">
				<div class="banner__subject-body">
					<div class="banner__header">
						<h1 class="expressive">
							<a href="${model.link.url}">${model.header}</a>
						</h1>
						<div class="banner__meta-description expressive-body">
							<a href="${model.link.url}">${model.description}</a>
						</div>
					</div>
				</div>
			</div>
		</section>
`
}


export const Banner = () => {
  return bannerMarkup(data);
}
