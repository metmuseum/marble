// ported from ghidorah/MMA.Ghidorah/frontend/components/AttendablesSearchApp/EventCard.jsx

class EventCard {
	constructor(el) {
		this.el = el;
		this.state = {isOpened: false};
		this.toggleOpen = this.toggleOpen.bind(this);
		this.el.querySelector(".js-marble-event-card-toggle-open").addEventListener("click", this.toggleOpen);
	}

	toggleOpen() {
		this.state = {isOpened: !this.state.isOpened};
		this.el.querySelectorAll(".js-marble-event-card-tabindex-toggle").forEach(toggle=>{
			toggle.setAttribute("tabindex", this.state.isOpened ? "0" : "-1");
		});
		this.el.querySelector(".js-marble-event-card-toggle-open").setAttribute("aria-expanded", this.state.isOpened);
		this.el.classList = this.generateClasses();
	}

	generateClasses() {
		return `attendable-card event-card js-marble-event-card ${this.state.isOpened ? "is-open" : ""}`;
	}
}

export default EventCard;
