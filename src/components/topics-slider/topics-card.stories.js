import html from "../../../.storybook/helpers/html";

import image768 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow.jpg";
import image960 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-960.jpg";
import image1440 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-1440.jpg";
import image2160 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-2160.jpg";
import image3240 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-3240.jpg";
import image4860 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-4860.jpg";
import image5760 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-5760.jpg";

import { withKnobs } from "@storybook/addon-knobs";

export default { title: "Components/Topics Card", decorators: [withKnobs] };

const TopicsCard = () => {
    return html`<div class="topics-slider">
        <div class="article-card article-card--active">
            <div class="article-card__image-wrapper article-card__image-wrapper--fixed-ratio article-card__image-wrapper--66">
                <a href="link" class="article-card__image-link" tabindex="-1">
                    <img class="article-card__image" alt="ALT" 
                    src="${image768}"
                    srcset="
                        ${image768}  768w,
                        ${image960}  960w,
                        ${image1440} 1440w,
                        ${image2160} 2160w,
                        ${image3240} 3240w,
                        ${image4860} 4860w,
                        ${image5760} 5760w
                    "
                    sizes="100vw"
                    >
                </a>
            </div>
            <div class="article-card__subject">
                <div class="article-card__header">
                    <h3 class="article-card__header-heading">
                        <a href="link">
                            This is a title
                        </a>
                    </h3>
                </div>
            </div>
        </div>
    </div>`;
};

export { TopicsCard };
