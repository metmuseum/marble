class Musette {
	constructor(musetteEl) {
		this.musetteEl = musetteEl;
		this.musetteWrapper = this.createWrapper();
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

	handleDragging(state) {
		this.musetteEl.scrollLeft = state.movement[0] * -2;
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
