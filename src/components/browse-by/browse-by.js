function browseBy() {
	if (document.querySelector(".js-browseby")) {
		const browseBys = document.querySelectorAll(".js-browseby");
		browseBys.forEach((browser)=> {
			console.log("Browse By HERE", browser);
		});
	}
}

export default browseBy;