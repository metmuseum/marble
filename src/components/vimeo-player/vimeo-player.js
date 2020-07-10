import html from "../../../.storybook/helpers/html";

const videoTemplate = html`<div class="js-vimeo-container vimeo-container is-visible"
	data-vimeo-background=""
	data-vimeo-dnt=""
	data-vimeo-defer=""
	data-vimeo-url="https://player.vimeo.com/video/395251744?background=1"
	data-vimeo-initialized="true">

	<a href="#" class="js-vimeo-play vimeo-play">
		<span class="js-vimeo-play__play-icon vimeo-play__play-icon vimeo-play__icon is-hidden">∆</span>
		<span class="js-vimeo-play__pause-icon vimeo-play__pause-icon vimeo-play__icon">=</span>
	</a>

	<iframe
		src="https://player.vimeo.com/video/395251744?dnt=1&amp;
			loop=1&amp;
			background=1&amp;
			app_id=122963"
			width="256"
			height="240"
			frameborder="0"
			allow="autoplay; fullscreen"
			allowfullscreen=""
			title="2020_Met150_Hub_Test"
			data-ready="true">
	</iframe>
</div>`;

export default videoTemplate;
