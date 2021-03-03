import html from "../../../.storybook/helpers/html";

export default {
	title: "Components/Wayfinding/Tab Controls",
};

const defaultTabNames = ["Past", "Current", "Upcoming"];

const TabControls = (tabNames) => {
	tabNames = tabNames.length > 0 ? tabNames : defaultTabNames
	const screenreaderLegendText = "Select between Past, Current, or Upcoming Exhibitions";
	const inputGroupName = "my-cool-tabs";
	return html`<fieldset class="tabs-control-container">
		<legend class="screen-reader-only">${screenreaderLegendText}</legend>
		${tabNames
			.map((tabName, index) => {
				return html` <div class="tab-controls">
					<input
						id="${tabName}-tab-id"
						type="radio"
						name=${inputGroupName}
						class="tab-controls__input"
						value="${tabName}"
						${index === 1 && "checked"}
					/>
					<label for="${tabName}-tab-id" class="tab-controls__label">
						<h3>${tabName}</h3>
					</label>
				</div>`;
			})
			.join("")}
	</fieldset>`;
};

export { TabControls };
