import html from "../../../../.storybook/helpers/html";
import { Byline } from "../../byline/byline.stories";
import { text, withKnobs } from "@storybook/addon-knobs";

import image768 from "../../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow.jpg";
import image960 from "../../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-960.jpg";
import image1440 from "../../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-1440.jpg";

export default {
	title: "Cards/Article Card",
	decorators: [withKnobs],
};

const ArticleCard = () => {
	let link, alt, srcset, sizes, topic, title, description;

	link = "/";
	srcset = html`${image768} 768w, ${image960} 960w, ${image1440} 1440w`;
	sizes = "33vw";
	topic = text("Topic", "On Art");
	title = text("Title", "Reconnecting Protagonists of a Sahelian Past");
	description = text(
		"Description",
		"How art from the Sahel brings the region's underappreciated past to life."
	);

	return html`<div class="article-card article-card--active">
		<div
			class="article-card__image-wrapper article-card__image-wrapper--fixed-ratio article-card__image-wrapper--66"
		>
			<a href="${link}" class="article-card__image-link" tabindex="-1">
				<img
					class="article-card__image"
					alt="${alt}"
					srcset="${srcset}"
					sizes="${sizes}"
				/>
			</a>
		</div>
		<div class="article-card__subject">
			<div
				class="article-card__subject-body article-card__subject-body--multicard"
			>
				<div class="article-card__header">
					<h4 class="article-card__header-descriptor">
						<a class="article-card__header-descriptor-link" href="${link}">
							${topic}
						</a>
					</h4>
					<h3 class="article-card__header-heading">
						<a href="${link}"> ${title} </a>
					</h3>
				</div>
				<div class="article-card__meta">
					<div class="article-card__meta-body">
						<div class="article-card__meta-description">
							<p>${description}</p>
						</div>
						${Byline()}
					</div>
				</div>
			</div>
		</div>
	</div>`;
};


export { ArticleCard };
