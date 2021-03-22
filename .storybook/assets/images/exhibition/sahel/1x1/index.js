import image750 from "./750.jpg";

export default {
	alt: "A descriptive image alt, for accessibility",
	width: 750,
	height: 750,
	srcSet: {
		fallback: image750,
		sizes: {
			"750w": image750
		},
	},
};
