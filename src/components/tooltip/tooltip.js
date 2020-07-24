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
					var typeKicker = '';

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
						typeKicker = "Artwork";
					} else {
						//assume it's an essay, for now - get title up to the first pipe
						title = document.title.split("|")[0];
						type = "essay";
						typeKicker = "Essay";
					}

					var ogImageTag = document.querySelector('meta[property~="og:image"]');
					var ogImage = "";
					if (ogImageTag) {
						ogImage = `<img src="${ogImageTag.getAttribute(
							"content"
						)}" />`;
					}

					var tooltipFilling = `
					<h5 class="descriptor">
						${typeKicker}
					</h5>
                    <h4>
                        ${title}
                    </h4>
                    ${ogImage}
                `;
					thisToolTip.innerHTML = tooltipFilling;
					thisToolTip.classList.remove("tooltip-empty");
				})
				.catch(function (err) {
					// There was an error
				});
		}
	}

	function fetchLegacyTOAH(linkElement, theURL, thisToolTip) {

			if (thisToolTip.classList.contains("tooltip-empty")) { //if it's empty, fill it
				fetch(theURL)
					.then(function (response) {
						return response.text(); //get response as text
					})
					.then(function (data) {
						thisToolTip.innerHTML = data;
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
		var needsToolTip = false;
		var isRealLink = false;

		//are these relative links?
		if (theURL.charAt(0) == "/") {
			//if it starts with a slash, make it prod
			theURL = "https://www.metmuseum.org" + theURL;
		}

		if (theURL.includes("metmuseum.org")) {
			needsToolTip = true;
			isRealLink = true;
		}

		if (theURL.includes("/nonmet/")) {
			needsToolTip = true;
			isRealLink = false;
		}

		if (needsToolTip) {
			var popup = `
                    <div class="marble-inline-tooltip tooltip-empty">
                    </div>
                    `;
			linkElement.insertAdjacentHTML("beforeend", popup);

			linkElement.onmouseenter = function (event) {
				var thisToolTip = this.querySelector(".marble-inline-tooltip");
				placeToolTip(event, thisToolTip);
				if (isRealLink) {
					fetchPage(linkElement, theURL, thisToolTip);
				} else {
					var nonMetCode = (theURL.split("/nonmet/").pop()).replace("/","").replace(new RegExp("^ht_"), '');
					var legacyTOAHhtml = '/toah/data/content/nonmet/' + nonMetCode + '.html'
					//DS - my test path
					//var legacyTOAHhtml = 'canned-data/' + nonMetCode + '.html'
					linkElement.classList.add('nonmet');
					linkElement.href = '#';
					linkElement.rel = 'nonMetCode';
					linkElement.addEventListener("click", function(e) {
						e.preventDefault();
					});
					fetchLegacyTOAH(linkElement, legacyTOAHhtml, thisToolTip);
				}
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
