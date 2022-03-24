class Musette {
	constructor(containerEl) {
		this.containerEl = containerEl;
		this.mouseIsDown = false;
		this.mouseIsBeingDragged = false;
		this.startPositionX = null;
		this.scrollLeft = this.null;
		this.musetteWrapper = this.createWrapper(this.containerEl);

		this.checkButtonStatus();
		// listen for scroll, so we can check for buttons when it"s finished
		this.containerEl.addEventListener("scroll", this.handleScroll, false);
		// musette grabbing and dragging controls
		containerEl.addEventListener("mousedown", this.handleMouseDown);
		containerEl.addEventListener("mouseleave", this.handleMouseLeave);
		containerEl.addEventListener("mouseup", this.handleMouseUp);
		containerEl.addEventListener("mousemove", this.handleMouseMove);
	}

	handleScroll() {
		var isScrollingNow;
		// Clear timeout throughout the scroll
		window.clearTimeout(isScrollingNow);
		// Set a timeout to run after scrolling ends
		isScrollingNow = setTimeout(this.checkButtonStatus, 66);
	}

	handleMouseDown(e) {
		e.preventDefault();
		this.mouseIsDown = true;
		this.this.startPositionX = e.pageX - this.containerEl.offsetLeft;
		this.scrollLeft = this.this.containerEl.scrollLeft;
	}

	handleMouseUp() {
		const musetteLinks = this.containerEl.querySelectorAll("a");
		if (this.mouseIsBeingDragged) {
			musetteLinks.forEach(link => link.addEventListener("click", this.preventClick));
		} else {
			musetteLinks.forEach(link => link.removeEventListener("click", this.preventClick));
		}
		this.mouseIsDown = false;
		this.mouseIsBeingDragged = false;
	}

	handleMouseLeave() {
		this.mouseIsDown = false;
	}

	handleMouseMove(e) {
		if (!this.mouseIsDown) return;
		this.mouseIsBeingDragged = true;
		e.preventDefault();
		const x = e.pageX - this.containerEl.offsetLeft;
		const walk = (x - this.startPositionX) * 2; //scroll-fast
		this.containerEl.scrollLeft = this.scrollLeft - walk;
	}

	preventClick(e) {
		e.preventDefault();
		e.stopImmediatePropagation();
	}

	createWrapper() {
		const wrapper = document.createElement("div");
		wrapper.classList.add("musette-wrapper");

		const leftButton = this.createLeftButton();
		const rightButton = this.createRightButton();

		// insert wrapper before musette
		this.containerEl.parentNode.insertBefore(wrapper, this.containerEl);

		// put elements into wrapper
		wrapper.appendChild(this.containerEl);
		wrapper.appendChild(leftButton);
		wrapper.appendChild(rightButton);

		return wrapper;
	}

	// get dimensions, used exclusively for buttons
	// imported from old Madaveousel and maybe more specs than we need
	getMusetteSpecs() {
		var wiewportWidth = this.containerEl.offsetWidth;
		var trackWidth = this.containerEl.scrollWidth;
		var positionLeft = this.containerEl.scrollLeft;
		var remainingRight = trackWidth - (positionLeft + wiewportWidth);
		var moreLeft = (positionLeft > 0) ? true : false;
		var moreRight = (remainingRight > 1) ? true : false;
	
		var specs = {
			viewportWidth: wiewportWidth,
			trackWidth: trackWidth,
			positionLeft: positionLeft,
			remainingRight: remainingRight,
			moreLeft: moreLeft,
			moreRight: moreRight
		};
		return specs;
	}

	buttonScrollLeft() {
		const thisMusette = this.getMusetteSpecs();
		const scrollToPosition = thisMusette.positionLeft - thisMusette.viewportWidth;
		this.containerEl.scrollTo({ left: scrollToPosition, behavior: "smooth" });
		this.checkButtonStatus();
	}

	createLeftButton() {
		const leftButton = document.createElement("button");
		leftButton.classList.add("musette-move-left");

		leftButton.addEventListener("click", (e) => {
			e.preventDefault();
			this.buttonScrollLeft();
		});

		return leftButton;
	}

	// should buttons be hidden?
	checkButtonStatus() {
		var thisMusette = this.getMusetteSpecs();
		if (thisMusette.moreLeft) {
			this.musetteWrapper.classList.add("musette-has-left-button");
		} else {
			this.musetteWrapper.classList.remove("musette-has-left-button");
		}
		if (thisMusette.moreRight) {
			this.musetteWrapper.classList.add("musette-has-right-button");
		} else {
			this.musetteWrapper.classList.remove("musette-has-right-button");
		}
	}

	buttonScrollRight() {
		const thisMusette = this.getMusetteSpecs();
		const scrollToPosition = thisMusette.positionLeft + thisMusette.viewportWidth;
		this.containerEl.scrollTo({ left: scrollToPosition, behavior: "smooth" });
		this.checkButtonStatus();
	}

	createRightButton() {
		const rightButton = document.createElement("button");
		rightButton.classList.add("musette-move-right");

		rightButton.addEventListener("click", (e) => {
			e.preventDefault();
			this.buttonScrollRight();
		});

		return rightButton;
	}
}

const initialize = () => {
	const lesMusettes = document.querySelectorAll(".js-la-musette");
	lesMusettes.forEach((laMusette) => new Musette(laMusette));
};

export default Musette;
export { initialize };
