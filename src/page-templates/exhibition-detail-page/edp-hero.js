function edpHero() {
	const exhibitionHeroTopRow = document.querySelector(".js-edp-above-fold");

	const scrollToAboveTheFoldContent = () => {
		setTimeout(() => {
			(window.scrollY === 0) && exhibitionHeroTopRow.scrollIntoView({behavior: "smooth", block: "end"})
		}, 400);
	}

	exhibitionHeroTopRow && document.addEventListener("DOMContentLoaded", scrollToAboveTheFoldContent, true);
}

export default edpHero;
