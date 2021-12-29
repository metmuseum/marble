import html from "../../../.storybook/helpers/html";
import { withKnobs, text } from "@storybook/addon-knobs";
import metStoriesImage from "../../../.storybook/assets/images/misc/2020_Met_Stories_Ep_01_4k_NEW-3.jpg";
export default {
	title: "RTE Components/All",
	decorators: [withKnobs],
};

const data = () => {
	return {
		h1: text("Headhing 1", "Heading One"),
		h2: text("Headhing 2", "Heading Two"),
		h3: text("Headhing 3", "Heading Three"),
		h4: text("Headhing 4", "Heading Four"),
		p1: text("Paragraph 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur accumsan ligula, ac gravida nibh. Nulla vitae placerat odio. Nullam ac mattis arcu. Fusce mattis non lorem a consectetur. Phasellus eu nunc non justo ullamcorper feugiat. Nam ac dictum eros. Nulla facilisi. Fusce consectetur, arcu et mattis convallis, velit leo aliquam urna, in malesuada nunc nulla sit amet felis. Aliquam tempor volutpat leo, sed gravida metus tempor non. Proin iaculis lobortis massa, vel vehicula nisl aliquet ut. Vivamus rhoncus lacus lacus, et bibendum libero viverra in. Vivamus id eros arcu. Ut libero lectus, vulputate sit amet nibh id, egestas rhoncus leo. Sed nec tortor bibendum, pulvinar elit et, dignissim ligula. Pellentesque ut est justo."),
		p2: text("Paragraph 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur accumsan ligula, ac gravida nibh. Nulla vitae placerat odio. Nullam ac mattis arcu. Fusce mattis non lorem a consectetur. Phasellus eu nunc non justo ullamcorper feugiat. Nam ac dictum eros. Nulla facilisi. Fusce consectetur, arcu et mattis convallis, velit leo aliquam urna, in malesuada nunc nulla sit amet felis. Aliquam tempor volutpat leo, sed gravida metus tempor non. Proin iaculis lobortis massa, vel vehicula nisl aliquet ut. Vivamus rhoncus lacus lacus, et bibendum libero viverra in. Vivamus id eros arcu. Ut libero lectus, vulputate sit amet nibh id, egestas rhoncus leo. Sed nec tortor bibendum, pulvinar elit et, dignissim ligula. Pellentesque ut est justo."),
		youtubeId: text(
			"Youtube Video ID",
			"kSYaFH1H-uo"
		),
		backgroundImage: `${metStoriesImage}`,
		inlineCaption: text("Inline Caption", "This is a curious little snippet we use for an `inline caption`")
	};
};

//Responsive 16x9 wrapper for YouTube videos
const RTEComponentsMarkUp = (model) => {
	return html`
	<div class="rich-text" style="margin: 40px auto; max-width: 85%;">
		<h1>${model.h1}</h1>
		<h2>${model.h2}</h2>
		<h3>${model.h3}</h3>
		<h3>${model.h4}</h3>
		<hr>
		<div class="media__youtube-wrapper">
			<iframe
				class="a11y-ignore"
				title="Youtube Embed"
				width="720"
				height="428"
				src="https://www.youtube.com/embed/${model.youtubeId}?rel=0"
				frameborder="0"
				allow="autoplay; encrypted-media">
			</iframe>
		</div>
		<hr>
		</hr>
		<p>${model.p1}</p>
		<img src="${model.backgroundImage}" alt="RTE Image">
		<div class="inline-caption">${model.inlineCaption}</div>
		<p>${model.p2}</p>
	</div>
	`;
};

export const RTEComponents = () => {
	const storyData = data();
	return html`${RTEComponentsMarkUp(storyData)}`;
};
