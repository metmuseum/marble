import SETTINGS from "../../global/settings";

class Musette {
	constructor(musetteEl) {
		this.musetteEl = musetteEl;
		this.musetteWrapper = this.createWrapper();
		this.initializeDragging = this.initializeDragging(this.musetteEl);
		this.observer = new IntersectionObserver(
			this.handleIntersections.bind(this),
			{
				root: this.musetteEl,
				rootMargin: "0px",
				threshold: 0.9
			}
		);
		Array.from(this.musetteEl.children).forEach((child) => {
			this.observer.observe(child);
		});
	}

	handleIntersections(entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				this.showFocusables(entry.target);
				entry.target == this.musetteEl.firstElementChild && this.musetteWrapper.classList.remove("musette-has-left-button");
				entry.target == this.musetteEl.lastElementChild && this.musetteWrapper.classList.remove("musette-has-right-button");
			} else {
				this.hideFocusables(entry.target);
				entry.target == this.musetteEl.firstElementChild && this.musetteWrapper.classList.add("musette-has-left-button");
				entry.target == this.musetteEl.lastElementChild && this.musetteWrapper.classList.add("musette-has-right-button");
			}
		});
	}

	initializeDragging(musetteEl) {
		let mouseIsBeingDragged = false;
		let pos = { top: 0, left: 0, x: 0, y: 0 };

		const mouseDownHandler = function (e) {
			e.preventDefault(); //prevents dragging of images
			pos = {
				left: musetteEl.scrollLeft,
				x: e.clientX
			};

			musetteEl.addEventListener("mousemove", mouseMoveHandler);
			musetteEl.addEventListener("mouseup", mouseUpHandler);
		};

		const mouseMoveHandler = function (e) {
			const xMovement = e.clientX - pos.x; //how far the mouse has been moved
			musetteEl.scrollLeft = pos.left - xMovement; //scroll the element to match how much the mouse moved
			mouseIsBeingDragged =  true;
		};

		const mouseUpHandler = function () {
			const musettteLinks = musetteEl.querySelectorAll("a");

			musetteEl.removeEventListener("mousemove", mouseMoveHandler);
			musetteEl.removeEventListener("mouseup", mouseUpHandler);

			if(mouseIsBeingDragged){ //if mouse is being dragged, disable links
				musettteLinks.forEach(musettteLink => {
					musettteLink.addEventListener("click", this.preventClick);
				});
			} else { //otherwise allow links
				musettteLinks.forEach(musettteLink => {
					musettteLink.removeEventListener("click", this.preventClick);
				});
			}
			mouseIsBeingDragged = false;
		};

		//init on mouse down
		musetteEl.addEventListener("mousedown", mouseDownHandler);
	}

	preventClick(e) {
		e.preventDefault();
		e.stopImmediatePropagation();
	}

	createWrapper() {
		const wrapper = document.createElement("div");
		wrapper.classList.add("musette-wrapper");

		const leftButton = document.createElement("button");
		leftButton.classList.add("musette-move-left");
		leftButton.ariaLabel = "Previous items";
		leftButton.addEventListener("click", this.handleButtonScrollLeft.bind(this));

		const rightButton = document.createElement("button");
		rightButton.classList.add("musette-move-right");
		rightButton.ariaLabel = "Next items";
		rightButton.addEventListener("click", this.handleButtonScrollRight.bind(this));

		this.musetteEl.parentNode.insertBefore(wrapper, this.musetteEl);

		wrapper.appendChild(this.musetteEl);
		wrapper.appendChild(leftButton);
		wrapper.appendChild(rightButton);

		return wrapper;
	}

	handleButtonScrollLeft() {
		this.musetteEl.scrollTo({
			left: (this.musetteEl.scrollLeft - this.musetteEl.offsetWidth),
			behavior: "smooth"
		});
	}

	handleButtonScrollRight() {
		this.musetteEl.scrollTo({
			left: (this.musetteEl.scrollLeft + this.musetteEl.offsetWidth),
			behavior: "smooth"
		});
	}

	hideFocusables(element) {
		element.ariaHidden = "true";
		element.querySelectorAll(SETTINGS.FOCUSABLES_SELECTOR).forEach((focusableEl) => {
			focusableEl.setAttribute("aria-hidden", "true");
			focusableEl.setAttribute("tabindex", "-1");
		});
	}

	showFocusables(element) {
		element.ariaHidden = "false";
		element.querySelectorAll(SETTINGS.FOCUSABLES_SELECTOR).forEach((focusableEl) => {
			focusableEl.removeAttribute("aria-hidden");
			focusableEl.setAttribute("tabindex", "0");
		});
	}
}

const initialize = (selectorString = ".js-la-musette") => {
	const lesMusettes = document.querySelectorAll(selectorString);
	lesMusettes.forEach((laMusetteEl) => new Musette(laMusetteEl));
};

export default Musette;
export { initialize };
