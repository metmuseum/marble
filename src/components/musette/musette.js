import SETTINGS from "../../global/settings";

class Musette {
	constructor(musetteEl) {
		// properties
		this.musetteEl = musetteEl;
		this.musetteWrapper = this.createWrapper();
		this.mouseIsBeingDragged = false;
		this.pos = { top: 0, left: 0, x: 0, y: 0 };

		// 👀 observer
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

		// bind handlers 🧤
		this.mouseDownHandler = this.mouseDownHandler.bind(this);
		this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
		this.mouseUpHandler = this.mouseUpHandler.bind(this);

		// apply listener(s) 🎧
		this.musetteEl.addEventListener("mousedown", this.mouseDownHandler);
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

	mouseDownHandler(e) {
		e.preventDefault(); //prevents dragging of images
		this.pos = {
			left: this.musetteEl.scrollLeft,
			x: e.clientX
		};
		this.musetteEl.addEventListener("mousemove", this.mouseMoveHandler);
		this.musetteEl.addEventListener("mouseup", this.mouseUpHandler);
		this.musetteEl.addEventListener("mouseleave", this.mouseUpHandler);
	}

	mouseMoveHandler(e) {
		this.mouseIsBeingDragged = true;
		const xMovement = e.clientX - this.pos.x; //how far the mouse has been moved
		this.musetteEl.scrollLeft = this.pos.left - xMovement; //scroll the element to match how much the mouse moved
	}

	mouseUpHandler() {
		this.musetteEl.removeEventListener("mousemove", this.mouseMoveHandler);
		this.musetteEl.removeEventListener("mouseup", this.mouseUpHandler);
		this.musetteEl.removeEventListener("mouseleave", this.mouseUpHandler);

		let addOrRemove = this.mouseIsBeingDragged ? "addEventListener" : "removeEventListener";
		
		this.musetteEl.querySelectorAll("a").forEach(musetteLink => {
			musetteLink[addOrRemove]("click", this.preventClick);
		});

		this.mouseIsBeingDragged = false;
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
