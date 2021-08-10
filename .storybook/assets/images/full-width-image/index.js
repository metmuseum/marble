import image768 from "./seurat_circus_sideshow.jpg";
import image960 from "./seurat_circus_sideshow-960.jpg";
import image1440 from "./seurat_circus_sideshow-1440.jpg";
import image2160 from "./seurat_circus_sideshow-2160.jpg";
import image3240 from "./seurat_circus_sideshow-3240.jpg";
import image4860 from "./seurat_circus_sideshow-4860.jpg";
import image5760 from "./seurat_circus_sideshow-5760.jpg";

// Example of srcsets using arbitrary 1.5 multiples of 960px
// Goes to just above 5k (5120px, @ 1x density).
export default {
	alt: "A descriptive image alt, for accessibility",
	width: 3920,
	height: 2621,
	srcSet: {
		fallback: image768,
		sizes: {
			"768w": image768,
			"960w": image960,
			"1440w": image1440,
			"2160w": image2160,
			"3240w": image3240,
			"4860w": image4860,
			"5760w": image5760,
		},
	},
};
