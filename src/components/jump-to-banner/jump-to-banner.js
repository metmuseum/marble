const handleLinkClick = (e) => {
	e.preventDefault();
	const idFromURL = new URL(e.target.href).hash.substring(1);
	document.getElementById(idFromURL)?.scrollIntoView({ behavior: "smooth" });
};

const jumpToBanner = () => {
	document.querySelectorAll(".js-jump-to__link").forEach((jumpToLink) => {
		jumpToLink.addEventListener("click", handleLinkClick);
	});
};

export default jumpToBanner;