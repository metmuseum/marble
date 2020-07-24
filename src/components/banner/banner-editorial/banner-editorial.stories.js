import vimeoTemplate from "../../vimeo-player/vimeo-player";
export default { title: 'Banner' };

const data = {
	backgroundColor: "#84b8ff",
	imageBorderColor: "#cfe4ff",
	color: "#333333",
	header: "Join The Celebration",
	description: "<p>Celebrate The Met's 150th Anniversary all year long in 2020, but be sure to mark one very special weekend on your calendar now.</p>",
	backgroundImages: "https://www.metmuseum.org/-/media/images/150-anniversary/final/the-met_150th_events_promo_896x1088.jpg?la=en&amp;hash=A0D78DF9A9547A6F8D4A9D89F41E0503 2x, https://www.metmuseum.org/-/media/images/150-anniversary/final/the-met_150th_events_promo_896x1088.jpg?la=en&amp;w=448&amp;hash=A6A207A6CAFED39B177A043B427E4F5E 1x",
	imageAlt: "Celebrating 150 Years",
	link: {
		url: "http://metmuseum.org",
	}
}

const bannerMarkup = (model) => {
	return `
		<section class="marble-banner marble-banner-@Model.Name marble-banner--editorial">
			<div class="marble-banner__image-wrapper" style="border-color: ${model.imageBorderColor}; background-color: ${model.imageBorderColor};">
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


export const BannerEditorial = () => {
	const model = Object.assign(data, {video: false});
  return bannerMarkup(model);
}

export const BannerEditorialWithVideo = () => {
	const model = Object.assign(data, {video: true});
  return bannerMarkup(model);
}
