import image1240 from "./1240.jpg";
import image1920 from "./1920.jpg";
import image2440 from "./2440.jpg";

export default {
	alt: "A descriptive image alt, for accessibility",
	width: 2440,
	height: 1830,
	srcSet: {
		fallback: image1240,
		sizes: {
			"1240w": image1240,
			"1920w": image1920,
			"2440w": image2440,
		},
	},
};
