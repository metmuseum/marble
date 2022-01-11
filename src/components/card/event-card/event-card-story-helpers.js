import { text, boolean } from "@storybook/addon-knobs";
import image16x9 from ".storybook/assets/images/greek-hall/16x9/index.js";

const defaultData = ({inSitu=true}) => {
	
	return {
		attendable: {
			building: text("Building", "The Met Fifth", "Data"),
			cta: text("CTA", "Call To Action", "Data"),
			programTitle: text("Program Title", "Program Title", "Data"),
			programUrl: text("Program URL", "#", "Data"),
			title: text("Event Title", "Event Title", "Data"),
			subProgramTitle: text("Subporgram Title", "Subprogram Title", "Data"),
			// startDate: "", changed this to Display Time for now
			teaserImage: text("Teaser Image", image16x9.srcSet.fallback, "Data"),
			ticketPricing: text("Ticket Pricing", "Free with Admission", "Data"),
			url: text("URL", "#", "Data"),
		},
		cardId: "abcd1234",
		displayTime: text("Display Time", "5pm", "Data"),
		inSitu: boolean("In Situ?", inSitu, "Display")
	};
};

export { defaultData };