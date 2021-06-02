import html from "../../../.storybook/helpers/html";
import { useEffect } from "@storybook/client-api";
export default { title: "Media/Audio Player" };

const data = {
	title: "Track 1. Title",
	subtitle: "Praise Songs about Javascript",
};

const audioPlayerMarkUp = (model) => {
	return html`
		<section class="audio-player">
			<div class="audio-player__top-bar">
			</div>
			<div class="audio-player__image-wrapper">
			</div>
			<div class="audio-player__body">
				<h1 class="audio-player__title">${model.title}</h1>
				<h2 class="audio-player__sub-title">${model.subtitle}</h2>
				<div class="audio-player__controlls-wrapper">
					<div class="audio-controls">
					</div>
				</div>
			</div>
		</section>
	`;
};

export const AudioPlayer = () => {
	return audioPlayerMarkUp(data);
};
