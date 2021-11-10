import SETTINGS from "../../global/settings";

function quotesModuleJs() {
	const defaultQuotesToShow = 3;

	document.querySelectorAll(`.js-quotes-module:not(.${SETTINGS.initializedClassName})`).forEach((quotesModule) => {
		const arrayOfQuotes = quotesModule.querySelectorAll(".js-quotes-module__quote");
		const quoteExpander = quotesModule.querySelector(".js-quotes-module__expander");
		const quoteExpanderDefaultText = quoteExpander.innerHTML;
		let isExpanded = false;

		arrayOfQuotes.length > defaultQuotesToShow && quoteExpander.classList.add("is-visible");

		quoteExpander.addEventListener("click", (e) => {
			e.preventDefault();
			if (!isExpanded) {
				quotesModule.classList.add("is-expanded");
				quoteExpander.innerHTML = "View fewer";
			} else {
				quotesModule.scrollIntoView();
				quotesModule.classList.remove("is-expanded");
				quoteExpander.innerHTML = quoteExpanderDefaultText;
			}
			isExpanded = !isExpanded;
		});

		quotesModule.classList.add(SETTINGS.initializedClassName);
	});
}

export default quotesModuleJs;
