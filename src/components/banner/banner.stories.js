import "./banner.scss";
import "../vimeo-player/vimeo-player.scss";
import vimeoTemplate from "../vimeo-player/vimeo-player";

export default { title: 'Banner' };

const data = {
	backgroundColor: "#ECDFD7",
	color: "#333333",
	header: "Celebrating 150 Years",
	description: "<p>A storied past. A dynamic present. An exciting future. It's just the beginning!</p><p> Celebrate The Met's anniversary throughout 2020 with exhibitions, events, and new ways to connect with art. Highlights include Making The Met, 1870–2020, the reimagined British Galleries, and a three-day celebration in June.</p>",
	backgroundImages: "https://www.metmuseum.org/-/media/images/150-anniversary/150hubbannermobile.jpg?la=en&hash=507F0AA67DD7FDBB3AFF148741E8A2A0 2x, https://www.metmuseum.org/-/media/images/150-anniversary/150hubbannermobile.jpg?la=en&w=712&hash=3A9DFAFD734E0FAEC4EF53205B45476D 1x",
	imageAlt: "Celebrating 150 Years",
	link: {
		url: "http://metmuseum.org",
	}
}


const bannerMarkup = (model) => {
	return `
		<section class="marble-banner marble-banner-@Model.Name">
			<div class="marble-banner__image-wrapper">
				<a class="marble-banner__image-link"
					tabindex="-1"
					href="${model.link.url}"
					title="${model.imageAlt}">

					<img class="marble-banner__image" srcset="${model.backgroundImages}">
				${model.video === true ? vimeoTemplate : ``}
				</a>

			</div>
			<div class="marble-banner__subject" style="background-color: ${model.backgroundColor}; color: ${model.color}">
				<div class="marble-banner__subject-body">
					<h1 class="expressive">
						<a href="${model.link.url}">${model.header}</a>
					</h1>
					<div class="marble-banner__meta-description expressive-body">
						<a href="${model.link.url}" tabindex="-1">${model.description}</a>
					</div>
				</div>
			</div>
		</section>
`
}


export const Banner = () => {
	let model = Object.assign(data, {video: false});
  return bannerMarkup(model);
}

export const BannerWithVideo = () => {
	const model = Object.assign(data, {video: true});
  return bannerMarkup(model);
}
