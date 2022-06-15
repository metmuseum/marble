import { html } from ".storybook/helpers";

const markup = (args) => {
	return html`
	<div class="image-container image-container--object" style="width: ${args.containerWidth}px; height: ${args.containerHeight}px;">
		<img class="image-container__image image-container__image--object" src="${args.imageSrc}"
			alt="${args.imageAlt}" />
	</div>`;
};

export default markup;
