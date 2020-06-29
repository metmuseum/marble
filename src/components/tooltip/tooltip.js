export default function theTooltip() {

	function fetchPage(linkElement, theURL, thisToolTip) {

		if (thisToolTip.classList.contains("tooltip-empty")) { //if it's empty, fill it
			fetch(theURL)
				.then(function (response) {
					return response.text(); //get response as text
				})
				.then(function (data) {
					var document = new DOMParser().parseFromString(data, "text/html"); //convert text to html for parsing
					var title = document.title;
					var type;

					if (
						theURL.includes("works-of-art") ||
						theURL.includes("art/collection/search/")
					) {
						//it's an artwork, so do some title manipulation
						title =
							document.title.split("|")[1] +
							"by " +
							document.title.split("|")[0];
						type = "artwork";
					} else {
						//assume it's an essay, for now - get title up to the first pipe
						title = document.title.split("|")[0];
						type = "essay";
					}

					var ogImageTag = document.querySelector('meta[property~="og:image"]');
					var ogImage = "";
					if (ogImageTag) {
						ogImage = `<a href="${theURL}"><img src="${ogImageTag.getAttribute(
							"content"
						)}" /></a>`;
					}

					var ogDescriptionTag = document.querySelector(
						'meta[property~="og:description"]'
					);
					var ogDescription = "";
					if (ogDescriptionTag && type == "essay") {
						ogDescription = `<p> ${ogDescriptionTag.getAttribute(
							"content"
						)} </p>`;
					}

					var tooltipFilling = `
                    <h4>
                        <a href="${theURL}">${title}</a>
                    </h4>
                    ${ogImage}
                    ${ogDescription}
                `;
					thisToolTip.innerHTML = tooltipFilling;
					thisToolTip.classList.remove("tooltip-empty");
				})
				.catch(function (err) {
					// There was an error
				});
		}
	}

	function placeToolTip(event, thisToolTip) {
		var documentX = event.pageX;
		var documentY = event.pageY;
		var viewportY = event.screenY;
		var midViewport = (window.innerHeight * 1.15) / 2;

		if (viewportY > midViewport) {
			thisToolTip.parentElement.classList.add('tooltip-upwards');
		} else {
			thisToolTip.style.top = (documentY + 25) + 'px';
			thisToolTip.style.left = (documentX - 25) + 'px';
		}

		thisToolTip.classList.add("show-tooltip");
	}

	const bodyText = document.querySelector(".js-insert-tooltips");
	const linksToCheck = bodyText.querySelectorAll("a");

	linksToCheck.forEach((linkElement) => {
		var theURL = linkElement.getAttribute("href");
		var isMetLink = false;

		//are these relative links?
		if (theURL.charAt(0) == "/") {
			//if it starts with a slash, make it prod
			theURL = "https://www.metmuseum.org" + theURL;
		}

		if (theURL.includes("metmuseum.org")) {
			isMetLink = true;
		}

		if (isMetLink) {
			var popup = `
                    <div class="marble-inline-tooltip tooltip-empty">
                    </div>
                    `;
			linkElement.insertAdjacentHTML("beforeend", popup);

			linkElement.onmouseenter = function (event) {
				var thisToolTip = this.querySelector(".marble-inline-tooltip");
				placeToolTip(event, thisToolTip);
				fetchPage(linkElement, theURL, thisToolTip);
			};

			linkElement.onmouseout = function () {
				var thisToolTip = this.querySelector(".marble-inline-tooltip");
				thisToolTip.classList.remove("show-tooltip");
				thisToolTip.parentElement.classList.remove('tooltip-upwards');
				thisToolTip.removeAttribute('style');
			};
		}
	});
}
