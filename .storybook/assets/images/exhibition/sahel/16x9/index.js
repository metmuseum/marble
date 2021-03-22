import image5120 from "./5120.jpg";


export default {
	alt: "A descriptive image alt, for accessibility",
	width: 5120,
	height: 2880,
	srcSet: {
		fallback: image5120,
		sizes: {
			"5120w": image5120
		},
	},
};
