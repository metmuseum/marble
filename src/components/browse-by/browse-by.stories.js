import { html } from ".storybook/helpers";
import { useEffect } from "@storybook/client-api";
import browseByjs from "./browse-by.js";

export default { title: "Components/BrowseBy" };

export const BrowseBy = () => {

	useEffect(browseByjs);
	return html`
	<section class="browseby js-browseby">
		<div class="browseby-header">
			<span class="browseby-header__title">Browse by: </span>
			<fieldset class="tabs-control-container js-tabs-control-container">
				<legend class="screen-reader-only">Use your arrow keys to navigate the topics in the tabs below, and your tab key to choose an item</legend>
				<div class="tab-controls">
					<input id="topic1-tab" type="radio" name="browseby-tabset" class="tab-controls__input js-browseby-tab" value="topic1" checked>
					<label for="topic1-tab" class="tab-controls__label">
						<h3 class="tab-controls__heading"><span class="screen-reader-only">Show panel </span> Topic One</h3>
					</label>
				</div>
				<div class="tab-controls">
					<input id="topic2-tab" type="radio" name="browseby-tabset" class="tab-controls__input js-browseby-tab" value="topic2">
					<label for="topic2-tab" class="tab-controls__label">
						<h3 class="tab-controls__heading"><span class="screen-reader-only">Show panel </span> Topic Two</h3>
					</label>
				</div>
				<div class="tab-controls">
					<input id="topic3-tab" type="radio" name="browseby-tabset" class="tab-controls__input js-browseby-tab" value="topic3">
					<label for="topic3-tab" class="tab-controls__label">
						<h3 class="tab-controls__heading"><span class="screen-reader-only">Show panel </span> Topic Three</h3>
					</label>
				</div>
			</fieldset>
		</div>

		<section id="topic1" class="browseby-tabpanel js-browseby-tabpanel">
			<h3 class="screen-reader-only">Topic One</h3>
			<div class="browseby-tabpanel-body">
				<div class="article-card">
					<div class=" article-card__image-wrapper article-card__image-wrapper--4by3">
						<a href="link here" class="article-card__image-link" tabindex="-1">
							<img class="article-card__image" src="static/media/.storybook/assets/images/greek-hall/1x1/1240.jpg" alt="an example image alt for accessibility">
							</a>
					</div>
					<div class="article-card__subject">
						<h4 class="article-card__header-heading">
							<a href="http://www.metmuseum.org">
								American Art
							</a>
						</h4>
					</div>
				</div>
				<div class="article-card">
					<a href="link here" class="article-card__image-link" tabindex="-1">
						<div class=" article-card__image-wrapper article-card__image-wrapper--4by3  article-card__image-wrapper article-card__image-wrapper--4by3--4-3">
							<img class="article-card__image" src="static/media/.storybook/assets/images/greek-hall/4x3/1240.jpg" alt="an example image alt for accessibility">
						</div>
					</a>
					<div class="article-card__subject">
						<h4 class="article-card__header-heading">
							<a href="http://www.metmuseum.org">
								Ancient American Art
							</a>
						</h4>
					</div>
				</div>
				<div class="article-card">
					<a href="link here" class="article-card__image-link" tabindex="-1">
						<div class=" article-card__image-wrapper article-card__image-wrapper--4by3">
							<img class="article-card__image" src="static/media/.storybook/assets/images/greek-hall/1x1/1240.jpg" alt="an example image alt for accessibility">
						</div>
					</a>
					<div class="article-card__subject">
						<h4 class="article-card__header-heading">
							<a href="http://www.metmuseum.org">
								Ancient Near Eastern Art
							</a>
						</h4>
					</div>
				</div>
			</div>
		</section>
	
	<section id="topic2" class="browseby-tabpanel js-browseby-tabpanel" hidden="">
		<h3 class="screen-reader-only">Topic Two</h3>
		<div class="browseby-tabpanel-body">
			<div class="article-card">
				<a href="link here" class="article-card__image-link" tabindex="-1">
					<div class=" article-card__image-wrapper article-card__image-wrapper--4by3">
						<img class="article-card__image" src="static/media/.storybook/assets/images/greek-hall/4x3/1240.jpg" alt="an example image alt for accessibility">
					</div>
				</a>
				<div class="article-card__subject">
					<h4 class="article-card__header-heading">
						<a href="http://www.metmuseum.org">
							Greek and Roman Art
						</a>
					</h4>
				</div>
			</div>
			<div class="article-card">
				<a href="link here" class="article-card__image-link" tabindex="-1">
					<div class=" article-card__image-wrapper article-card__image-wrapper--4by3">
						<img class="article-card__image" src="static/media/.storybook/assets/images/greek-hall/1x1/1240.jpg" alt="an example image alt for accessibility">
					</div>
				</a>
				<div class="article-card__subject">
					<h4 class="article-card__header-heading">
						<a href="http://www.metmuseum.org">
							Islamic Art
						</a>
					</h4>
				</div>
			</div>
			<div class="article-card">
				<a href="link here" class="article-card__image-link" tabindex="-1">
					<div class=" article-card__image-wrapper article-card__image-wrapper--4by3">
						<img class="article-card__image" src="static/media/.storybook/assets/images/greek-hall/4x3/1240.jpg" alt="an example image alt for accessibility">
					</div>
				</a>
				<div class="article-card__subject">
					<h4 class="article-card__header-heading">
						<a href="http://www.metmuseum.org">
							The Robert Lehman Collection
						</a>
					</h4>
				</div>
			</div>
		</div>
	</section>

	<section id="topic3" class="browseby-tabpanel js-browseby-tabpanel" hidden="">
		<h3 class="screen-reader-only">Topic Three</h3>
		<div class="browseby-tabpanel-body">
			<div class="article-card">
				<a href="link here" class="article-card__image-link" tabindex="-1">
					<div class=" article-card__image-wrapper article-card__image-wrapper--4by3">
						<img class="article-card__image" src="static/media/.storybook/assets/images/greek-hall/4x3/1240.jpg" alt="an example image alt for accessibility">
					</div>
				</a>
				<div class="article-card__subject">
					<h4 class="article-card__header-heading">
						<a href="http://www.metmuseum.org">
							Asian Art
						</a>
					</h4>
				</div>
			</div>
			<div class="article-card">
			<a href="link here" class="article-card__image-link" tabindex="-1">
				<div class=" article-card__image-wrapper article-card__image-wrapper--4by3">
					<img class="article-card__image" src="static/media/.storybook/assets/images/greek-hall/4x3/1240.jpg" alt="an example image alt for accessibility">
				</div>
			</a>
			<div class="article-card__subject">
				<h4 class="article-card__header-heading">
					<a href="http://www.metmuseum.org">
						Drawings and Prints
					</a>
				</h4>
			</div>
		</div>
			<div class="article-card">
				<a href="link here" class="article-card__image-link" tabindex="-1">
					<div class=" article-card__image-wrapper article-card__image-wrapper--4by3">
						<img class="article-card__image" src="static/media/.storybook/assets/images/greek-hall/1x1/1240.jpg" alt="an example image alt for accessibility">
					</div>
				</a>
				<div class="article-card__subject">
					<h4 class="article-card__header-heading">
						<a href="http://www.metmuseum.org">
							The Costume Institute
						</a>
					</h4>
				</div>
			</div>
		</div>
	</section>
	</section>`;
};