import { html } from ".storybook/helpers";
import { useEffect } from "@storybook/client-api";
import browseByjs from "./browse-by.js";
import viewMore from "../view-more/view-more.js";

export default { title: "Components/BrowseBy" };

const browseByMarkup = ({ mobileOnly }) => {

	useEffect(browseByjs);
	useEffect(viewMore);
	return html`
	<section class='browseby js-browseby'>
		<div class='browseby-header'>
			<span class='browseby-header__title'>Browse by: </span>
			<fieldset class='browseby-tabs-control-container tabs-control-container js-tabs-control-container'>
				<div class='browseby-tabs-control-body'>
					<legend class='screen-reader-only'>Use your arrow keys to navigate the topics in the tabs below, and your tab key to choose an item</legend>
					<div class='tab-controls browseby-tab-controls js-tab-controls browseby-highlighted-tab'>
						<input id='topic1-tab' type='radio' name='browseby-tabset' class='tab-controls__input js-browseby-tab' value='topic1' checked>
						<label for='topic1-tab' class='tab-controls__label'>
							<h3 class='tab-controls__heading'><span class='screen-reader-only'>Show panel </span> Topic One</h3>
						</label>
					</div>
					<div class='tab-controls browseby-tab-controls js-tab-controls'>
						<input id='topic2-tab' type='radio' name='browseby-tabset' class='tab-controls__input js-browseby-tab' value='topic2'>
						<label for='topic2-tab' class='tab-controls__label'>
							<h3 class='tab-controls__heading'><span class='screen-reader-only'>Show panel </span> Topic Two</h3>
						</label>
					</div>
					<div class='tab-controls browseby-tab-controls js-tab-controls'>
						<input id='topic3-tab' type='radio' name='browseby-tabset' class='tab-controls__input js-browseby-tab' value='topic3'>
						<label for='topic3-tab' class='tab-controls__label'>
							<h3 class='tab-controls__heading'><span class='screen-reader-only'>Show panel </span> Topic Three</h3>
						</label>
					</div>
				</div>
			</fieldset>
		</div>

		<section id='topic1' class='browseby-tabpanel js-browseby-tabpanel view-more-panel js-view-more-panel ${mobileOnly ? "view-more-panel--mobile-only js-view-more-panel--mobile-only" : ""} '>
			<h3 class='screen-reader-only'>Topic One</h3>
			<div class='browseby-tabpanel-body view-more-panel-body js-view-more-panel-body'>
				<div class='article-card'>
					<div class=' article-card__image-wrapper article-card__image-wrapper--4by3'>
						<a href='link here' class='article-card__image-link' tabindex='-1'>
							<img class='article-card__image' src='https://images.metmuseum.org/CRDImages/ep/mobile-large/EP648.jpg' alt='an example image alt for accessibility'>
						</a>
					</div>
					<div class='article-card__subject'>
						<h4 class='article-card__header-heading'>
							<a href='http://www.metmuseum.org'>
								American Art
							</a>
						</h4>
					</div>
				</div>
				<div class='article-card'>
					<div class=' article-card__image-wrapper article-card__image-wrapper--4by3  article-card__image-wrapper'>
						<a href='link here' class='article-card__image-link' tabindex='-1'>
							<img class='article-card__image' src='https://images.metmuseum.org/CRDImages/dp/mobile-large/DPB879267.jpg' alt='an example image alt for accessibility'>
						</a>
					</div>
					<div class='article-card__subject'>
						<h4 class='article-card__header-heading'>
							<a href='http://www.metmuseum.org'>
								Ancient American Art
							</a>
						</h4>
					</div>
				</div>
				<div class='article-card'>
					<div class=' article-card__image-wrapper article-card__image-wrapper--4by3'>
						<a href='link here' class='article-card__image-link' tabindex='-1'>
							<img class='article-card__image' src='https://collectionapi.metmuseum.org/api/collection/v1/iiif/436625/preview' alt='an example image alt for accessibility'>
						</a>
					</div>
					<div class='article-card__subject'>
						<h4 class='article-card__header-heading'>
							<a href='http://www.metmuseum.org'>
								Ancient Near Eastern Art
							</a>
						</h4>
					</div>
				</div>
				<div class='article-card'>
					<div class=' article-card__image-wrapper article-card__image-wrapper--4by3'>
						<a href='link here' class='article-card__image-link' tabindex='-1'>
							<img class='article-card__image' src='https://images.metmuseum.org/CRDImages/dp/mobile-large/DPB879267.jpg' alt='an example image alt for accessibility'>
						</a>
					</div>
					<div class='article-card__subject'>
						<h4 class='article-card__header-heading'>
							<a href='http://www.metmuseum.org'>
								Drawings and Prints
							</a>
						</h4>
					</div>
				</div>
				<div class='article-card'>
					<div class=' article-card__image-wrapper article-card__image-wrapper--4by3'>
						<a href='link here' class='article-card__image-link' tabindex='-1'>
							<img class='article-card__image' src='https://images.metmuseum.org/CRDImages/ep/mobile-large/DP-15762-001.jpg' alt='an example image alt for accessibility'>
						</a>
					</div>
					<div class='article-card__subject'>
						<h4 class='article-card__header-heading'>
							<a href='http://www.metmuseum.org'>
								Islamic Art
							</a>
						</h4>
					</div>
				</div>
				<div class='article-card'>
					<div class=' article-card__image-wrapper article-card__image-wrapper--4by3'>
						<a href='link here' class='article-card__image-link' tabindex='-1'>
							<img class='article-card__image' src='https://images.metmuseum.org/CRDImages/rl/mobile-large/DP146506.jpg' alt='an example image alt for accessibility'>
						</a>
					</div>
					<div class='article-card__subject'>
						<h4 class='article-card__header-heading'>
							<a href='http://www.metmuseum.org'>
								Ancient Near Eastern Art
							</a>
						</h4>
					</div>
				</div>
				<div class='article-card'>
					<div class=' article-card__image-wrapper article-card__image-wrapper--4by3'>
						<a href='link here' class='article-card__image-link' tabindex='-1'>
							<img class='article-card__image' src='https://images.metmuseum.org/CRDImages/dp/mobile-large/DP803355.jpg' alt='an example image alt for accessibility'>
						</a>
					</div>
					<div class='article-card__subject'>
						<h4 class='article-card__header-heading'>
							<a href='http://www.metmuseum.org'>
								Ancient Near Eastern Art
							</a>
						</h4>
					</div>
				</div>
				<div class='article-card'>
					<div class=' article-card__image-wrapper article-card__image-wrapper--4by3'>
						<a href='link here' class='article-card__image-link' tabindex='-1'>
							<img class='article-card__image' src='https://images.metmuseum.org/CRDImages/dp/mobile-large/DPB879267.jpg' alt='an example image alt for accessibility'>
						</a>
					</div>
					<div class='article-card__subject'>
						<h4 class='article-card__header-heading'>
							<a href='http://www.metmuseum.org'>
								Drawings and Prints
							</a>
						</h4>
					</div>
				</div>
				<div class='article-card'>
					<div class=' article-card__image-wrapper article-card__image-wrapper--4by3'>
						<a href='link here' class='article-card__image-link' tabindex='-1'>
							<img class='article-card__image' src='https://images.metmuseum.org/CRDImages/ep/mobile-large/DP145411.jpg' alt='an example image alt for accessibility'>
						</a>
					</div>
					<div class='article-card__subject'>
						<h4 class='article-card__header-heading'>
							<a href='http://www.metmuseum.org'>
								Islamic Art
							</a>
						</h4>
					</div>
				</div>
				<div class='article-card'>
					<div class=' article-card__image-wrapper article-card__image-wrapper--4by3'>
						<a href='link here' class='article-card__image-link' tabindex='-1'>
							<img class='article-card__image' src='https://images.metmuseum.org/CRDImages/ep/mobile-large/DP-15762-001.jpg' alt='an example image alt for accessibility'>
						</a>
					</div>
					<div class='article-card__subject'>
						<h4 class='article-card__header-heading'>
							<a href='http://www.metmuseum.org'>
								Ancient Near Eastern Art
							</a>
						</h4>
					</div>
				</div>
			</div>
			<button class='view-more-panel-cta js-view-more-panel-cta'><svg class='downward-arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 7.33'><path d='M10.5 0L6 4.4 1.5 0 0 1.47l6 5.86 6-5.86L10.5 0z'></path></svg> <span class='view-more-panel-cta-text js-view-more-panel-cta-text'>View more</span></button>
		</section>

		<section id='topic2' class='browseby-tabpanel js-browseby-tabpanel view-more-panel js-view-more-panel ${mobileOnly ? "view-more-panel--mobile-only js-view-more-panel--mobile-only" : ""}' hidden>
		<div class='browseby-tabpanel-body view-more-panel-body js-view-more-panel-body'>
			<h3 class='screen-reader-only'>Topic Two</h3>
			<div class='browseby-tabpanel-body view-more-panel-body js-view-more-panel-body'>
				<div class='article-card'>
					<div class=' article-card__image-wrapper article-card__image-wrapper--4by3'>
						<a href='link here' class='article-card__image-link' tabindex='-1'>
							<img class='article-card__image' src='https://images.metmuseum.org/CRDImages/dp/mobile-large/DPB879267.jpg' alt='an example image alt for accessibility'>
						</a>
					</div>
					<div class='article-card__subject'>
						<h4 class='article-card__header-heading'>
							<a href='http://www.metmuseum.org'>
								Greek and Roman Art
							</a>
						</h4>
					</div>
				</div>
				<div class='article-card'>
					<div class=' article-card__image-wrapper article-card__image-wrapper--4by3'>
						<a href='link here' class='article-card__image-link' tabindex='-1'>
							<img class='article-card__image' src='https://images.metmuseum.org/CRDImages/ep/mobile-large/DP-15762-001.jpg' alt='an example image alt for accessibility'>
						</a>
					</div>
					<div class='article-card__subject'>
						<h4 class='article-card__header-heading'>
							<a href='http://www.metmuseum.org'>
								Islamic Art
							</a>
						</h4>
					</div>
				</div>
				<div class='article-card'>
					<div class=' article-card__image-wrapper article-card__image-wrapper--4by3'>
						<a href='link here' class='article-card__image-link' tabindex='-1'>
							<img class='article-card__image' src='https://images.metmuseum.org/CRDImages/dp/mobile-large/DPB879267.jpg' alt='an example image alt for accessibility'>
						</a>
					</div>
					<div class='article-card__subject'>
						<h4 class='article-card__header-heading'>
							<a href='http://www.metmuseum.org'>
								The Robert Lehman Collection
							</a>
						</h4>
					</div>
				</div>
				<div class='article-card'>
					<div class=' article-card__image-wrapper article-card__image-wrapper--4by3'>
						<a href='link here' class='article-card__image-link' tabindex='-1'>
							<img class='article-card__image' src='https://images.metmuseum.org/CRDImages/ep/mobile-large/EP648.jpg' alt='an example image alt for accessibility'>
						</a>
					</div>
					<div class='article-card__subject'>
						<h4 class='article-card__header-heading'>
							<a href='http://www.metmuseum.org'>
								American Art
							</a>
						</h4>
					</div>
				</div>
			</div>
			<button class='view-more-panel-cta js-view-more-panel-cta'><svg class='downward-arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 7.33'><path d='M10.5 0L6 4.4 1.5 0 0 1.47l6 5.86 6-5.86L10.5 0z'></path></svg> <span class='view-more-panel-cta-text js-view-more-panel-cta-text'>View more</span></button>
		</section>

		<section id='topic3' class='browseby-tabpanel js-browseby-tabpanel view-more-panel js-view-more-panel ${mobileOnly ? "view-more-panel--mobile-only js-view-more-panel--mobile-only" : ""}' hidden>
			<h3 class='screen-reader-only'>Topic Three</h3>
			<div class='browseby-tabpanel-body view-more-panel-body js-view-more-panel-body'>
				<div class='article-card'>
					<div class=' article-card__image-wrapper article-card__image-wrapper--4by3'>
						<a href='link here' class='article-card__image-link' tabindex='-1'>
							<img class='article-card__image' src='https://images.metmuseum.org/CRDImages/dp/mobile-large/DPB879267.jpg' alt='an example image alt for accessibility'>
						</a>
					</div>
					<div class='article-card__subject'>
						<h4 class='article-card__header-heading'>
							<a href='http://www.metmuseum.org'>
								Asian Art
							</a>
						</h4>
					</div>
				</div>
				<div class='article-card'>
					<div class=' article-card__image-wrapper article-card__image-wrapper--4by3'>
						<a href='link here' class='article-card__image-link' tabindex='-1'>
							<img class='article-card__image' src='https://images.metmuseum.org/CRDImages/ep/mobile-large/DP-15762-001.jpg' alt='an example image alt for accessibility'>
						</a>
					</div>
					<div class='article-card__subject'>
						<h4 class='article-card__header-heading'>
							<a href='http://www.metmuseum.org'>
								Drawings and Prints
							</a>
						</h4>
					</div>
				</div>
				<div class='article-card'>
					<div class=' article-card__image-wrapper article-card__image-wrapper--4by3'>
						<a href='link here' class='article-card__image-link' tabindex='-1'>
							<img class='article-card__image' src='https://images.metmuseum.org/CRDImages/dp/mobile-large/DP803355.jpg' alt='an example image alt for accessibility'>
						</a>
					</div>
					<div class='article-card__subject'>
						<h4 class='article-card__header-heading'>
							<a href='http://www.metmuseum.org'>
								The Costume Institute
							</a>
						</h4>
					</div>
				</div>
			</div>
			<button class='view-more-panel-cta js-view-more-panel-cta'><svg class='downward-arrow' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 7.33'><path d='M10.5 0L6 4.4 1.5 0 0 1.47l6 5.86 6-5.86L10.5 0z'></path></svg> <span class='view-more-panel-cta-text js-view-more-panel-cta-text'>View more</span></button>
		</section>
	</section>
	<div style='width:100%;background:aqua;height:200px;'></div>`;
};

export const Standard = browseByMarkup.bind({});
Standard.args = {
	mobileOnly: false
};

export const MobileOnly = browseByMarkup.bind({});
MobileOnly.args = {
	mobileOnly: true
};