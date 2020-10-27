import html from "../../../.storybook/helpers/html";

export default {
  title: "Components/Wayfinding/Tab Controls"
}

const TabControls = () => {
	return html`<fieldset class="tabs-control-container">
		${["Current", "Upcoming", "Past"]
			.map((tabName, index) => {
				return html` <div class="tab-controls">
					<input
						id="${tabName}-tab-select-${index}"
						type="radio"
						name="storybook-demo-tab-select"
						class="tab-controls__input"
            value="${tabName}"
            ${index === 1 && "checked"}
					/>
					<label
						for="${tabName}-tab-select-${index}"
						class="tab-controls__label"
					>
						<h3>${tabName}</h3>
					</label>
				</div>`;
			})
			.join("")}
	</fieldset>`;
};

export { TabControls }
