import html from "../../../.storybook/helpers/html";
import idHelper from "../../../.storybook/helpers/idHelper";

const markup = ({ checked, classHelpers, filterName, label }) => {
	const filterId = idHelper(label);

	return html`<div class="filter">
		<input
			name=${filterName}
			type="checkbox"
			class="filter__input ${classHelpers}"
			${checked ? "checked" : ""}
			id="${filterId}"
		/>
		<label for="${filterId}" class="filter__label ${classHelpers}">
			${label}
		</label>
	</div>`;
};

export default markup;
