import html from "../../../.storybook/helpers/html";
import { withKnobs } from "@storybook/addon-knobs";

export default { title: "Components/Topics Card", decorators: [withKnobs] };

const TopicsCard = () => {
	return html`<div class="article-card article-card--active">
                <div class="article-card__image-wrapper article-card__image-wrapper--fixed-ratio article-card__image-wrapper--66">
                    <a href="@Html.Raw(!string.IsNullOrWhiteSpace(streamItem.Link) ? streamItem.Link : "")" class="article-card__image-link" tabindex="-1">
                        <img class="article-card__image" alt="@Html.Raw(!string.IsNullOrWhiteSpace(streamItem.ImageAltText) ? streamItem.ImageAltText : "")" srcset="@Html.Raw(!string.IsNullOrWhiteSpace(streamItem.ImageSrcSet) ? streamItem.ImageSrcSet : "")">
                    </a>
                </div>
                <div class="article-card__subject">
                    <div class="article-card__header">
                        <h3 class="article-card__header-heading">
                            <a href="@Html.Raw(!string.IsNullOrWhiteSpace(streamItem.Link) ? streamItem.Link : "")">
                                @Html.Raw(!string.IsNullOrWhiteSpace(streamItem.Title) ? streamItem.Title : "")
                            </a>
                        </h3>
                    </div>
                </div>
            </div>`;
};

export { TopicsCard };
