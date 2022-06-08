import SETTINGS from "../../global/settings";

function imageViewer(propsObj) {

	const caretIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d='M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z'/></svg>";
	const xIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d='M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z'/></svg>";
	const imageViewerDefaults= {
		elSelector: ".js-iv",
		triggerSelector: ".js-iv__trigger",
		containerSelector: ".js-iv__container",
		captionSelector: ".js-iv__caption",
		imageSelector: ".js-iv__image"
	};

	const props = {
		...imageViewerDefaults,
		...propsObj
	};

	let modalEl;
	let fsContentEl;
	let fsCloseButton;
	let fsBackButton;
	let fsForwardButton;
	let fsContentImageEl;
	let fsContentTextEl;

	let listOfIterableElements;
	let currentIndex;

	const disableFullScreenView = () => {
		modalEl.classList.remove("is-fullscreen");
	};

	const createModal = () => {
		//Modal Wrapper
		modalEl = document.createElement("div");
		modalEl.classList.add("js-fs-container");

		//Close Button
		fsCloseButton = document.createElement("button");
		fsCloseButton.classList.add("js-fs-close");
		fsCloseButton.innerHTML = xIcon;
		fsCloseButton.addEventListener("click", (e) => {
			e.preventDefault();
			disableFullScreenView();
		});
		modalEl.append(fsCloseButton);


		//Content Container
		fsContentEl = document.createElement("div");
		fsContentEl.classList.add("js-fs-content");
		modalEl.append(fsContentEl);

		fsContentImageEl= document.createElement("div");
		fsContentImageEl.classList.add("js-fs-image");
		fsContentEl.append(fsContentImageEl);

		fsContentTextEl= document.createElement("div");
		fsContentTextEl.classList.add("js-fs-text");
		fsContentEl.append(fsContentTextEl);

		//Back Button
		fsBackButton = document.createElement("button");
		fsBackButton.classList.add("js-fs-back");
		fsBackButton.innerHTML = caretIcon;
		fsBackButton.addEventListener("click", (e) => {
			e.preventDefault();
			iterate(false);
		});
		modalEl.append(fsBackButton);

		//Forward Button
		fsForwardButton = document.createElement("button");
		fsForwardButton.classList.add("js-fs-forward");
		fsForwardButton.innerHTML = caretIcon;
		fsForwardButton.addEventListener("click", (e) => {
			e.preventDefault();
			iterate(true);
		});


		modalEl.append(fsForwardButton);

		document.body.append(modalEl);
	};

	const populateModal = (el) => {
		const img = el.querySelector(props.imageSelector).cloneNode(true);
		const caption = el.querySelector(props.captionSelector).cloneNode(true);
		
		//Clear previous content
		fsContentTextEl.innerHTML="";
		fsContentImageEl.innerHTML="";

		//Populate new content
		fsContentTextEl.append(caption);
		fsContentImageEl.append(img);
	};

	const iterate = (forward) => {
		if (forward) {
			if (currentIndex < listOfIterableElements.length - 1) {
				currentIndex++;
				populateModal(listOfIterableElements[currentIndex]);
			}
		} else if (currentIndex > 0) {
			currentIndex--;
			populateModal(listOfIterableElements[currentIndex]);
		}
	};

	const bindArrowKeys = () => {
		document.addEventListener("keydown", (e) => {
			if (e.keyCode == "37") {
				if (currentIndex > 0) {
					iterate(false);
				}
			} else if (e.keyCode == "39") {
				if (currentIndex < listOfIterableElements.length - 1) {
					iterate(true);
				}
			}
		});
	};

	const enableFullScreenView = (el, index, listOfElements) => {
		listOfIterableElements = listOfElements;
		currentIndex= index;
		populateModal(el);
		bindArrowKeys();
		modalEl.classList.add("is-fullscreen");
	};

	const initializeIVels = (ivContainer) => {
		const listOfElements = ivContainer.querySelectorAll(props.elSelector);
		listOfElements
			.forEach((ivEl, index) => {
				ivEl.querySelector(props.triggerSelector)
					.addEventListener("click", (e) => {
						e.preventDefault();
						enableFullScreenView(ivEl, index, listOfElements);
					});
			});
	};

	document.querySelectorAll(`${props.containerSelector}:not(.${SETTINGS.initializedClassName})`)
		.forEach((ivContainer) => {
			ivContainer.classList.add(SETTINGS.initializedClassName);
			initializeIVels(ivContainer);
		});

	createModal();
}

export default imageViewer;
