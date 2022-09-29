import { html } from ".storybook/helpers";
import { Title } from "../object-title/object-title.stories";
import { ChronologicalInfo } from "../object-chronological-info/object-chronological-info.stories";
import { Creators } from "../object-creators/object-creators.stories";
import { Viewability } from "../object-viewability/object-viewability.stories";

export default { title: "Collection Objects/Label" };

export const Label = (args) => (
	html`<div class="object-label">
		${Title(args.Title)}
		${ChronologicalInfo(args.ChronologicalInfo)}
		${Creators(args.Creators)}
		${Viewability(args.Viewability)}
	</div>`
);

Label.args = {
	Title: Title.args,
	ChronologicalInfo: ChronologicalInfo.args,
	Creators: Creators.args,
	Viewability: Viewability.args
};
