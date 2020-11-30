import html from "../../../.storybook/helpers/html";

export default () => {
	return html`
		<style>
			.svg-icon {
				align-self: center;
				display: inline-flex;
			}

			.svg-icon svg {
				height: 8px;
				max-width: 8px;
			}
		</style>

		<div class="inline-modal-trigger-styled-as-filter">
			<input
				name="Events Modal"
				type="checkbox"
				class="filter__control"
				id="Events-modal-trigger"
			/><label for="Events-modal-trigger" class="filter__label"
				><span
					>Find Events
					<span class="filter__control-icon"
						><div class="svg-icon svg-baseline ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
							>
								<svg
									id="Chevron-expanded"
									viewBox="0 0 24 14"
									width="100%"
									height="100%"
								>
									<path d="M2 0L0 2l12 11.996L24 2l-1.995-2L12 10z"></path>
								</svg>
							</svg></div></span></span
			></label>
		</div>
	`;
};
