import html from "../../../.storybook/helpers/html";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
	title: "RTE Components/Media",
	decorators: [withKnobs],
};

const data = () => {
	return {
		id: text(
			"Youtube Video ID",
			"kSYaFH1H-uo"
		)
	};
};

//Responsive 16x9 wrapper for YouTube videos
const YoutubeEmbedMarkUp = (model) => {
	return html`
	<div class="media__youtube-wrapper">
		<iframe
			width="720"
			height="428"
			src="https://www.youtube.com/embed/${model.id}?rel=0"
			frameborder="0"
			allow="autoplay; encrypted-media">
		</iframe>
	</div>
	`;
};

export const YoutubeEmbed = () => {
	const storyData = data();
	return html`${YoutubeEmbedMarkUp(storyData)}`;
};
