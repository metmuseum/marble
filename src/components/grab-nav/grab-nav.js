class GrabNav {
	constructor(grabNavEl) {
		// properties
		this.grabNavEl = grabNavEl;
		this.musetteWrapper = this.createWrapper();
		this.mouseIsBeingDragged = false;
		this.pos = { top: 0, left: 0, x: 0, y: 0 };

		// 👀 observer
		this.observer = new IntersectionObserver(
			this.handleIntersections.bind(this),
			{
				root: this.grabNavEl,
				rootMargin: "0px",
				threshold: 0.9
			}
		);
		Array.from(this.grabNavEl.children).forEach((child) => {
			this.observer.observe(child);
		});

		// bind handlers 🧤
		this.mouseDownHandler = this.mouseDownHandler.bind(this);
		this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
		this.mouseUpHandler = this.mouseUpHandler.bind(this);

		// apply listener(s) 🎧
		this.grabNavEl.addEventListener("mousedown", this.mouseDownHandler);
	}

	handleIntersections(entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target == this.grabNavEl.firstElementChild && this.musetteWrapper.classList.remove("grab-nav--overflow-left");
				entry.target == this.grabNavEl.lastElementChild && this.musetteWrapper.classList.remove("grab-nav--overflow-right");
			} else {
				entry.target == this.grabNavEl.firstElementChild && this.musetteWrapper.classList.add("grab-nav--overflow-left");
				entry.target == this.grabNavEl.lastElementChild && this.musetteWrapper.classList.add("grab-nav--overflow-right");
			}
		});
	}

	mouseDownHandler(e) {
		e.preventDefault();
		this.pos = {
			left: this.grabNavEl.scrollLeft,
			x: e.clientX
		};
		this.grabNavEl.addEventListener("mousemove", this.mouseMoveHandler);
		this.grabNavEl.addEventListener("mouseup", this.mouseUpHandler);
		this.grabNavEl.addEventListener("mouseleave", this.mouseUpHandler);
	}

	mouseMoveHandler(e) {
		this.mouseIsBeingDragged = true;
		const xMovement = e.clientX - this.pos.x;
		this.grabNavEl.scrollLeft = this.pos.left - xMovement;
	}

	mouseUpHandler() {
		this.grabNavEl.removeEventListener("mousemove", this.mouseMoveHandler);
		this.grabNavEl.removeEventListener("mouseup", this.mouseUpHandler);
		this.grabNavEl.removeEventListener("mouseleave", this.mouseUpHandler);

		let addOrRemove = this.mouseIsBeingDragged ? "addEventListener" : "removeEventListener";
		
		this.grabNavEl.querySelectorAll("a").forEach(musetteLink => {
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
		wrapper.classList.add("grab-nav-wrapper");
		this.grabNavEl.parentNode.insertBefore(wrapper, this.grabNavEl);
		wrapper.appendChild(this.grabNavEl);

		return wrapper;
	}
}

// DS - the initialize is only for Storybook
// to use this in a project you need to init it there
const initialize = (selectorString = ".js-grab-nav") => {
	const grabNavs = document.querySelectorAll(selectorString);
	grabNavs.forEach((grabNavEl) => new GrabNav(grabNavEl));
};

export default GrabNav;
export { initialize };
