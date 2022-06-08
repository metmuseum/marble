import { html, srcSet } from ".storybook/helpers";
import defaultImage from ".storybook/assets/images/full-width-image";
import { useEffect } from "@storybook/client-api";
import imageViewer from "./image-viewer.js";
export default {
	title: "Image Viewer"
};


const imageViewerMarkUp = (imageTitle) => {
	let image = defaultImage;
	return html`
		<div class="js-iv">
			<img
				class="image-container__image"
				alt="${image.alt}"
				width="${image.width}"
				height="${image.height}"
				src="${image.srcSet.fallback}"
				srcset="${srcSet(image.srcSet)}"
				sizes="100vw"
			/>
      <a href="#" class="js-iv__trigger">Press me to view full screen</a>
			<div class="image-viewer__data" style="display: none">
				<img
					class="js-iv__image"
					alt="${image.alt}"
					width="${image.width}"
					height="${image.height}"
					src="${image.srcSet.fallback}"
					srcset="${srcSet(image.srcSet)}"
					sizes="100vw"
				/>
				<div class="js-iv__caption">
					<h1>${imageTitle}</h1>
					<p>Lorem Ipsum Dolar Sit Amet</p>
				</div>
			</div>
		</div>
	`;
};

const ImageViewer = () => {
  useEffect(imageViewer);
	return html`<div class="js-iv__container" style="display: flex">
		${imageViewerMarkUp("Image One!")}
		${imageViewerMarkUp("More Art")}
		${imageViewerMarkUp("Third Art")}
		${imageViewerMarkUp("Fourth Art")}
	</div>`;
};

export { ImageViewer };
