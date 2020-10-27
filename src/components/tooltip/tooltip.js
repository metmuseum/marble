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
					var subtitle = '';
					var titleFirst = title.split("|")[0]; //thing before first pipe
					var titleSecond = title.split("|")[1];
					var type;
					var typeKicker = '';

					if (
						theURL.includes("works-of-art") ||
						theURL.includes("art/collection/search/")
					) {
						//it's an artwork
						title = titleFirst;
						subtitle = '<h6 class="tooltip-subtitle">' + titleSecond + '</h6>'
						type = "artwork";
						typeKicker = "Artwork";
					} else {
						//assume it's an essay
						title = titleFirst;
						type = "essay";
						typeKicker = "Essay";
					}

					var ogImageTag = document.querySelector('meta[property~="og:image"]');
					var ogImage = "";
					if (ogImageTag) {
						ogImage = `<img class="tooltip-image" src="${ogImageTag.getAttribute(
							"content"
						)}" />`;
					}

					var tooltipFilling = `<div class="tooltip-descriptor">${typeKicker}</div><h5 class="tooltip-title">${title}</h5">${subtitle}${ogImage}`;
					thisToolTip.insertAdjacentHTML("beforeend", tooltipFilling);
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

		if (!theURL) {
			return;
		}

		//are these relative links?
		if (theURL.charAt(0) == "/") {
			//if it starts with a slash, make it prod
			theURL = "https://www.metmuseum.org" + theURL;
		}

		if (theURL.includes("metmuseum.org")) {
			needsToolTip = true;
			isRealLink = true;
		}

		//legacy TOAH 'links to nowhere'
		if (theURL.includes("/nonmet/")) {
			var nonMetCode = (theURL.split("/nonmet/").pop()).replace("/","").replace(new RegExp("^ht_"), '');
			var legacyTOAHhtml = '/toah/data/content/nonmet/' + nonMetCode + '.html';
			needsToolTip = true;
			isRealLink = false;
			linkElement.classList.add('tooltip-only');
			linkElement.href = '#';
			linkElement.rel = nonMetCode;
		}

		if (needsToolTip) {
			var popup = `<div class="marble-inline-tooltip fixed-width tooltip-empty"></div>`;
			linkElement.insertAdjacentHTML("beforeend", popup);

			linkElement.onmouseenter = function (event) {
				var thisToolTip = this.querySelector(".marble-inline-tooltip");
				placeToolTip(event, thisToolTip);
				if (isRealLink) {
					fetchPage(linkElement, theURL, thisToolTip);
				} else {
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
