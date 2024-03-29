function deepFreeze(object) {
	// Retrieve the property names defined on object
	const propNames = Object.getOwnPropertyNames(object);

	// Freeze properties before freezing self
	for (const name of propNames) {
		const value = object[name];

		if (value && typeof value === "object") {
			deepFreeze(value);
		}
	}

	return Object.freeze(object);
}

const SETTINGS = deepFreeze({
	initializedClassName: "js-marble-initialized",
	chromatic: {
		extraViewports: [320, 1200, 1700, 2500]
	},
	mobileBreakpoint: 499,
	shadowOffset: 95,
	FOCUSABLES_SELECTOR: "a[href]:not(.invisible-redundant-link), button, input, textarea, select, details, [tabindex]:not(.invisible-redundant-link)"
});


export default SETTINGS;
