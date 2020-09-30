import html from "../../../../.storybook/helpers/html";

const ArticleCard = () => {
	return html`
	<div class="article-card article-card--active">
		<div class="article-card__image-wrapper article-card__image-wrapper--fixed-ratio article-card__image-wrapper--66">
			<a href="${link}" class="article-card__image-link" tabindex="-1">
				<img class="article-card__image" alt="${alt}" srcset="${scrset}">
			</a>
		</div>
		<div class="article-card__subject">
			<div class="article-card__subject-body article-card__subject-body--multicard">
				<div class="article-card__header">
					<h4 class="article-card__header-descriptor">
						<a class="article-card__header-descriptor-link" href="${link}">
							${topic}
						</a>
					</h4>
					<h3 class="article-card__header-heading">
						<a href="${link}">
							${title}
						</a>
					</h3>
				</div>
				<div class="article-card__meta">
					<div class="article-card__meta-body">
						<div class="article-card__meta-description">
							<p>${description}</p>
						</div>
						${byline}
					</div>
				</div>
			</div>
		</div>
	</div>`;
};

export default {
	title: "Article Card"
};

export {ArticleCard};