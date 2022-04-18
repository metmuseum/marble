class Musette {
	constructor(musetteEl) {
		this.musetteEl = musetteEl;
		this.musetteWrapper = this.createWrapper();
		this.handleDragging = this.handleDragging(this.musetteEl);
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
		entries.forEach(entry => {
			if (entry.target == this.musetteEl.firstElementChild) {
				entry.isIntersecting ?
					this.musetteWrapper.classList.remove("musette-has-left-button") :
					this.musetteWrapper.classList.add("musette-has-left-button");
			}
			if (entry.target == this.musetteEl.lastElementChild) {
				entry.isIntersecting ?
					this.musetteWrapper.classList.remove("musette-has-right-button") :
					this.musetteWrapper.classList.add("musette-has-right-button");
			}
			// todo: reimplement accessibility work from flickity fork here
			entry.isIntersecting ? entry.target.style.border = "2px solid red" : entry.target.style.border = "2px solid blue";
		});
	}

	handleDragging(musetteEl) {
		console.log("start");

		let pos = { top: 0, left: 0, x: 0, y: 0 };

		const mouseDownHandler = function (e) {

			pos = {
				left: musetteEl.scrollLeft,
				top: musetteEl.scrollTop,
				// Get the current mouse position
				x: e.clientX,
				y: e.clientY,
			};

			musetteEl.addEventListener("mousemove", mouseMoveHandler);
			musetteEl.addEventListener("mouseup", mouseUpHandler);
		};

		const mouseMoveHandler = function (e) {
			// How far the mouse has been moved
			const dx = e.clientX - pos.x;
			const dy = e.clientY - pos.y;

			// Scroll the element go match the mouse
			musetteEl.scrollTop = pos.top - dy;
			musetteEl.scrollLeft = pos.left - dx;
		};

		const mouseUpHandler = function () {
			musetteEl.removeEventListener("mousemove", mouseMoveHandler);
			musetteEl.removeEventListener("mouseup", mouseUpHandler);
		};

		// Attach the handler
		musetteEl.addEventListener("mousedown", mouseDownHandler);
	}

	createWrapper() {
		const wrapper = document.createElement("div");
		wrapper.classList.add("musette-wrapper");

		const leftButton = document.createElement("button");
		leftButton.classList.add("musette-move-left");
		leftButton.addEventListener("click", this.handleButtonScrollLeft.bind(this));

		const rightButton = document.createElement("button");
		rightButton.classList.add("musette-move-right");
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
}

const initialize = (selectorString = ".js-la-musette") => {
	const lesMusettes = document.querySelectorAll(selectorString);
	lesMusettes.forEach((laMusetteEl) => new Musette(laMusetteEl));
};

export default Musette;
export { initialize };
