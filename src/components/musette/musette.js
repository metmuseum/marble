import { DragGesture } from "@use-gesture/vanilla";

class Musette {
	constructor(containerEl) {
		this.containerEl = containerEl;
		this.musetteWrapper = this.createWrapper();

		// new DragGesture(
		// 	this.containerEl,
		// 	this.handleDragging.bind(this),
		// 	{
		// 		axis: "x",
		// 		filterTaps: true,
		// 		rubberband: true,
		// 		tapsThreshold: 25,
		// 		preventDefault: true,
		// 		preventScroll: false,
		// 		pointer: { mouse: true, lock: true }
		// 	});

		this.observer = new IntersectionObserver(
			this.handleIntersections.bind(this),
			{
				root: this.containerEl,
				rootMargin: "0px",
				threshold: 0.9
			}
		);

		Array.from(this.containerEl.children).forEach((child) => {
			this.observer.observe(child);
		});
	}

	handleDragging(state) {
		this.containerEl.scrollLeft = state.movement[0] * -2;
	}

	handleIntersections(entries) {
		entries.forEach(entry => {
			if (entry.target == this.containerEl.firstElementChild) {
				entry.isIntersecting ?
					this.musetteWrapper.classList.remove("musette-has-left-button") :
					this.musetteWrapper.classList.add("musette-has-left-button");
			}
			if (entry.target == this.containerEl.lastElementChild) {
				entry.isIntersecting ?
					this.musetteWrapper.classList.remove("musette-has-right-button") :
					this.musetteWrapper.classList.add("musette-has-right-button");
			}
			entry.isIntersecting ? entry.target.style.border = "2px solid red" : entry.target.style.border = "2px solid blue";
		});
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

		this.containerEl.parentNode.insertBefore(wrapper, this.containerEl);

		wrapper.appendChild(this.containerEl);
		wrapper.appendChild(leftButton);
		wrapper.appendChild(rightButton);

		return wrapper;
	}

	handleButtonScrollLeft() {
		this.containerEl.scrollTo({
			left: (this.containerEl.scrollLeft - this.containerEl.offsetWidth),
			behavior: "smooth"
		});
	}

	handleButtonScrollRight() {
		this.containerEl.scrollTo({
			left: (this.containerEl.scrollLeft + this.containerEl.offsetWidth),
			behavior: "smooth"
		});
	}
}

const initialize = () => {
	const lesMusettes = document.querySelectorAll(".js-la-musette");
	lesMusettes.forEach((laMusette) => new Musette(laMusette));
};

export default Musette;
export { initialize };
