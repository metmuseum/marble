//Waypoints needs this dumb hack. sorry
require('waypoints/lib/noframework.waypoints.min.js');

export default function scrollEffects() {
	const promoItems = document.querySelectorAll(".js-scroll-effect");
	promoItems.forEach((promoItem) => {
		promoItem.classList.add("is-oov");
		new Waypoint({
			element: promoItem,
			offset: "99%",
			handler: () => {
				promoItem.classList.remove("is-oov");
			}
		});
	});
}
