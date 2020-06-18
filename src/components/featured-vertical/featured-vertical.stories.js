import html from "../../../.storybook/helpers/html";
import he from "he";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, boolean, radios } from "@storybook/addon-knobs";
import "./featured-vertical.scss";

export default {
	title: "Featured Vertical",
	decorators: [withA11y, withKnobs],
};

const options = {
	title: `@Html.Raw(!string.IsNullOrWhiteSpace(Model.Vertical.Title) ? Model.Vertical.Title : "")`,
	contentItems: [
		{
			authorsFormatted: "",
			landscapeImageAltText: "",
			landscapeImageSrc:
				"https://collectionapi.metmuseum.org/api/collection/v1/iiif/337824/731309/main-image",
			landscapeImageSrcSet: `TODO`,
			link: "",
			primaryStream: { title: "" },
			teaser: "",
			postedDateFormatted: "",
		},
	],
};

const featuredVerticalMarkup = (options) => {
	return html` <section
		class="featured-vertical featured-vertical--contentstreams"
	>
		<div class="featured-vertical__header stream__header">
			<h2 class="featured-vertical__heading">
				<a href="#">${options.title}</a>
			</h2>
		</div>
		<div class="featured-vertical__wrapper">
			<section class="featured-vertical-items">
				<div
					class="featured-vertical-items__wrapper js-featured-vertical-items"
				>
					<!-- @foreach (var contentItem in Model.Vertical.ContentItems) { -->

					<div class="article-card article-card--active">
						<div
							class="article-card__image-wrapper article-card__image-wrapper--fixed-ratio article-card__image-wrapper--66"
						>
							<a
								href="${contentItem.link}"
								tabindex="-1"
								class="article-card__image-link"
							>
								<img
									class="article-card__image"
									alt="${contentItem.landscapeImageAltText}"
									src="${contentItem.landscapeImageSrc}"
									srcset="${contentItem.landscapeImageSrcSet}"
								/>
							</a>
						</div>
						<div class="article-card__subject">
							<div class="article-card__subject-body">
								<div class="article-card__header">
									<!-- @if (contentItem.PrimaryStream != null) { -->
									<h4 class="article-card__header-descriptor">
										<a href="#">${contentItem.primaryStream.title}</a>
									</h4>
									<!-- } -->
									<h3 class="article-card__header-heading js-poster-changer">
										<a
											class="article-card__header-heading-link"
											href="${contentItem.link}"
										>
											${he.decode($contentItem.title)}
										</a>
									</h3>
								</div>
								<div class="article-card__meta">
									<div class="article-card__meta-body">
										<div class="article-card__meta-description">
											${he.decode(contentItem.teaser)}
										</div>
										<div class="article-card__meta-footer">
											<span class="article-card__author">
												${he.decode(contentItem.authorsFormatted)}
												<!-- @Html.Raw(!string.IsNullOrWhiteSpace(contentItem.AuthorsFormatted)
												? contentItem.AuthorsFormatted : "") -->
											</span>
											<span class="article-card__date">
												${he.decode(contentItem.postedDateFormatted)}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- } end forEach content item-->
				</div>

				<div class="stream__footer">
					<p>
						<a class="stream__footer-link" href="">
							<svg
								class="icon__see-more-items"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 12 12"
							>
								<path
									class="page"
									d="M2.7 9.2H1c-.3 0-.5-.2-.5-.4V1C.5.7.7.5 1 .5h7.8c.2 0 .4.2.4.5v1.8"
								/>
								<path
									class="page"
									d="M3.2 2.8H11c.3 0 .5.2.5.5V11c0 .3-.2.5-.5.5H3.2c-.3 0-.5-.2-.5-.5V3.2c.1-.2.3-.4.5-.4z"
								/>
							</svg>
							See more in This Vertical
						</a>
					</p>
				</div>
			</section>

			<section class="featured-vertical-image">
				<div class="featured-vertical-image__image-wrapper">
					<a
						id="poster-frame"
						class="featured-vertical-image__image-link"
						tabindex="-1"
						href="http://metmuseum.org"
						title="Celebrating 150 Years"
					>
						<img
							class="featured-vertical-image__image js-poster image-opaque"
							src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/337824/731309/main-image"
						/>
						<img
							class="featured-vertical-image__image js-poster"
							src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/11040/33028/main-image"
						/>
						<img
							class="featured-vertical-image__image js-poster"
							src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/437423/795952/main-image"
						/>
					</a>
				</div>
			</section>
			<!-- @* end featured-vertical-image *@ -->
		</div>
		<!-- @* end featured-vertical__wrapper *@ -->
	</section>`;
};
