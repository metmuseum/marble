class EventCard {
	constructor(el) {
		this.el = el;
		this.state = {
			isOpened: false,
		};
		this.toggleOpen = this.toggleOpen.bind(this);
		this.el.querySelector(".js-marble-event-card-toggle-open").addEventListener("click", this.toggleOpen);
	}

	toggleOpen() {
		this.state = {
			isOpened: !this.state.isOpened
		};
		// todo: ".js-marble-event-card-tabindex-toggle"
		// 				set tabindex if the state is opened
		// todo: ".js-marble-event-card-toggle-open"
		//				set aria-expanded to the state of isOpened
		// todo: call generateClasses and set them on itself
	}

	generateClasses() {
		let classes = ["attendable-card", "event-card", "js-marble-event-card"];
		if (this.state.isOpened) {
			classes.push("is-open");
		}
		return classes.join(" ");
	}
}

export default EventCard;
