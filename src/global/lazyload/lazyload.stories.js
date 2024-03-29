import { html, srcSet } from ".storybook/helpers";
import defaultImage from ".storybook/assets/images/full-width-image";

export default {
	title: "Elements/Images/Lazyloaded"
};

const loadedImage = () => {
	let image = defaultImage;
	return html`
		<div>
			<img
				class="lazy loaded"
				style="width: 600px; height: 400px;"
				alt="${image.alt}"
				width="${image.width}"
				height="${image.height}"
				srcset="${srcSet(image.srcSet)}"
				sizes="100vw"
			/>
		</div>
	`;
};

const erroredImage = () => {
	let image = defaultImage;
	return html`
		<div>
			<img
				class="lazy error"
				style="width: 600px; height: 400px;"
				alt="${image.alt}"
				width="${image.width}"
				height="${image.height}"
				srcset="error"
				sizes="100vw"
			/>
		</div>
	`;
};

const loadingImage = () => {
	let image = defaultImage;
	return html`
		<div>
			<img
				class="lazy loading"
				style="width: 600px; height: 400px;"
				alt="${image.alt}"
				width="${image.width}"
				height="${image.height}"
				data-srcset="loading"
				sizes="100vw"
			/>
		</div>
	`;
};


export { loadedImage, erroredImage, loadingImage };
