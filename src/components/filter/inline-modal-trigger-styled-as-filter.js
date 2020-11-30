import html from "../../../.storybook/helpers/html";

export default (checked) => {
	return html`
		<div class="inline-modal-trigger-styled-as-filter">
			<input
				name="Events Modal"
				type="checkbox"
				class="filter__control"
				id="Events-modal-trigger"
				${!!checked ? "checked" : ""}
				aria-label="Open advanced search controls"
			/>
			<label for="Events-modal-trigger" class="filter__label">
				<span>
					Find Events
					<span class="filter__control-icon">
						<div style="align-self: center; display: inline-flex;">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								id="Chevron-expanded"
								viewBox="0 0 24 14"
								style="height: 8px; max-width: 8px;"
							>
								<path
									fill="currentColor"
									d="M2 0L0 2l12 11.996L24 2l-1.995-2L12 10z"
								/>
							</svg>
						</div>
					</span>
				</span>
			</label>
		</div>
	`;
};
