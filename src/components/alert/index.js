export default () => {
	if (document.querySelector(".js-marble-dismissable-alert")) {
		document.querySelector(".js-marble-dismiss-alert-button").addEventListener("click", (e) => {
			e.target.closest(".js-marble-dismissable-alert").classList.remove("show");
		});
	}
};
