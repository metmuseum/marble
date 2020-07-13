import VimeoPlayer from "@vimeo/player";

function vimeoControls() {

	const playVideo = (player, button) => {
		player.play();
		button.querySelector(".js-vimeo-play__play-icon").classList.add("is-hidden");
		button.querySelector(".js-vimeo-play__pause-icon").classList.remove("is-hidden");
	}

	const pauseVideo = (player, button) => {
		player.pause();
		button.querySelector(".js-vimeo-play__play-icon").classList.remove("is-hidden");
		button.querySelector(".js-vimeo-play__pause-icon").classList.add("is-hidden");
	}

	const vimeoContainers = document.querySelectorAll('.js-vimeo-container');
	vimeoContainers.forEach((container)=> {
    const player = new VimeoPlayer(container);

		const playButton = container.querySelector(".js-vimeo-play");
		playButton.addEventListener("click", function(e) {
			e.preventDefault();
			e.stopPropagation();

			player.getPaused().then(function(paused) {
			  paused ? playVideo(player, playButton) : pauseVideo(player, playButton);
			});

		});
	});
}

export default vimeoControls;
