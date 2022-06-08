import SETTINGS from "../../global/settings";

function imageViewer(propsObj) {

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
	let fsContentImageEl;
	let fsContentTextEl;

	const createModal = () => {

		//Modal Wrapper
		modalEl = document.createElement("div");
		modalEl.classList.add("js-fs-container");

		//Close Button
		fsCloseButton = document.createElement("button");
		fsCloseButton.classList.add("js-fs-close");
		fsCloseButton.innerText = "X";
		fsCloseButton.addEventListener("click", (e) => {
			e.preventDefault();
			modalEl.classList.remove("is-fullscreen");
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

		document.body.append(modalEl);
	};

	createModal();

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

	const enableFullScreenView = (el) => {
		console.log(el);
		populateModal(el);
		modalEl.classList.add("is-fullscreen");
	};

	const initializeIVels = (ivContainer) => {
		ivContainer.querySelectorAll(props.elSelector)
			.forEach((ivEl) => {
				ivEl.querySelector(props.triggerSelector)
					.addEventListener("click", (e) => {
						e.preventDefault();
						enableFullScreenView(ivEl);
					});
			});
	};

	document.querySelectorAll(`${props.containerSelector}:not(.${SETTINGS.initializedClassName})`)
		.forEach((ivContainer) => {
			ivContainer.classList.add(SETTINGS.initializedClassName);
			initializeIVels(ivContainer);
		});
}

export default imageViewer;
