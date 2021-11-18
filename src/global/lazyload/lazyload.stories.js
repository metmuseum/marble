import html from "../../../.storybook/helpers/html";
import defaultImage from "../../../.storybook/assets/images/full-width-image";

export default {
	title: "Elements/Images/Lazyloaded",
	excludeStories: "sizesTemplate"
};

const sizesTemplate = (srcSet) => {
	const widths = Object.keys(srcSet.sizes);
	return widths
		.map((width) => {
			return `${srcSet.sizes[width]} ${width},`;
		})
		.join("\n");
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
				srcset="${sizesTemplate(image.srcSet)}"
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


export { loadedImage, erroredImage, loadingImage};
