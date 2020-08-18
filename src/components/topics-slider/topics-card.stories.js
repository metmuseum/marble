import html from "../../../.storybook/helpers/html";

import image768 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow.jpg";
import image960 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-960.jpg";
import image1440 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-1440.jpg";

import { text, withKnobs } from "@storybook/addon-knobs";

export default { title: "Components/Topics Card", decorators: [withKnobs] };

const TopicsCard = () => {
	const linkTitle = text("Link Title", "This is a title");
	return html`<div class="">
		<div class="article-card article-card--active">
			<div
				class="article-card__image-wrapper article-card__image-wrapper--fixed-ratio article-card__image-wrapper--66"
			>
				<a href="link" class="article-card__image-link" tabindex="-1">
					<img
						class="article-card__image"
						alt="ALT"
						src="${image768}"
						srcset="${image768} 768w, ${image960} 960w, ${image1440} 1440w"
						sizes="425px"
					/>
				</a>
			</div>
			<div class="article-card__subject">
				<div class="article-card__header">
					<h3 class="article-card__header-heading">
						<a href="link">
							${linkTitle}
						</a>
					</h3>
				</div>
			</div>
		</div>
	</div>`;
};

export { TopicsCard };
