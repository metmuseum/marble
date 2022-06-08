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
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam justo ut nunc fringilla ornare a eget diam. Vestibulum ornare turpis vel porta ultrices. In egestas ipsum est. Sed turpis nunc, pretium eleifend mattis eget, maximus non nulla. Vestibulum sagittis velit felis, at porttitor dui vehicula a. Phasellus ut tempor sapien. Cras a tempus lorem. Duis metus nulla, consectetur efficitur est nec, mollis lobortis ligula.

Curabitur auctor scelerisque metus in commodo. Nunc interdum eros felis, ac interdum mauris euismod eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec a justo ligula. Phasellus id nibh et urna ultricies pharetra et nec metus. Ut malesuada gravida metus, vitae tincidunt augue venenatis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vitae volutpat mi. Duis elementum elit sed felis euismod, eget facilisis leo malesuada. Donec vestibulum dictum neque, ornare eleifend lacus commodo sit amet. Suspendisse potenti. Donec semper euismod velit et ornare. Curabitur aliquam a quam eu tincidunt. In porttitor et nulla molestie bibendum. Nulla sed purus dapibus, facilisis lorem sit amet, iaculis felis.

Nunc consectetur eget justo sed efficitur. Suspendisse sit amet augue vel lacus cursus feugiat vitae sed tortor. Nulla sed vestibulum lectus. Sed euismod justo vel lectus rutrum, a laoreet magna auctor. Pellentesque et tellus nulla. Aenean mi nisl, varius ut suscipit vitae, dapibus eget quam. Curabitur accumsan fermentum elit, in sollicitudin orci varius non. Nunc pharetra ante sit amet metus hendrerit, eu consequat neque consequat. Quisque id sapien elementum, rutrum purus vel, gravida lacus. Pellentesque et justo congue, venenatis augue eget, cursus orci.

Vivamus elementum congue cursus. Aenean nunc nisl, consequat non tellus vitae, fermentum vehicula ligula. Sed dapibus dolor nec libero ultrices, nec auctor lorem consectetur. Morbi libero enim, accumsan luctus elit quis, pulvinar hendrerit nulla. Nullam id enim vel libero accumsan consectetur et vel nisi. Nunc pharetra risus vel libero sodales, vitae vehicula dolor venenatis. Nam ac tincidunt turpis. Pellentesque eleifend massa vitae vulputate egestas.</p>
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
