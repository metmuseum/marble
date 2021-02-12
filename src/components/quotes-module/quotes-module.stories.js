import html from "../../../.storybook/helpers/html";
import he from "he";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { fullWidth } from "../image-container/image-container.stories.js";
import { useEffect } from "@storybook/client-api";
import quotesModuleJs from "./quotes-module.js";
export default {
	title: "Quotes Module",
	decorators: [withKnobs],
};

export const quotesModule = () => {
	useEffect(quotesModuleJs);
	return html`
		<div class="quotes-module js-quotes-module">
			<div class="quotes-module__contents">
				<div class="quotes-module__header">
					<h3>Latest Reviews</h3>
					<h4><a href="#">All press</a></h4>
				</div>
				<div class="quotes-module__quotes">
				<figure class="quotes-module__quote js-quotes-module__quote">
					<blockquote cite="#" class="quotes-module__quote-text">
						But web browsers aren’t like web servers. If your back-end code is getting so big that it’s starting to run noticably slowly, you can throw more computing power at it by scaling up your server. That’s not an option on the front-end where you don’t really have one run-time environment—your end users have their own run-time environment with its own constraints around computing power and network connectivity.
					</blockquote>
					<figcaption class="quotes-module__quote-citation">
						&mdash;The New York Times
					</figcaption>
				</figure>

				<figure class="quotes-module__quote js-quotes-module__quote">
					<blockquote cite="#" class="quotes-module__quote-text">
						That’s not an option on the front-end where you don’t really have one run-time environment—your end users have their own run-time environment with its own constraints around computing power and network connectivity.
					</blockquote>
					<figcaption class="quotes-module__quote-citation">
						&mdash;The New York Times
					</figcaption>
				</figure>

				<figure class="quotes-module__quote js-quotes-module__quote">
					<blockquote cite="#" class="quotes-module__quote-text">
						starting to run noticably slowly, you can throw more computing power at it by scaling up your server. That’s not an option on the front-end where you don’t really have one run-time environment—your end users have their own run-time environment with its own constraints around computing power and network connectivity.
					</blockquote>
					<figcaption class="quotes-module__quote-citation">
						&mdash;The New York Times
					</figcaption>
				</figure>

				<figure class="quotes-module__quote js-quotes-module__quote">
					<blockquote cite="#" class="quotes-module__quote-text">
						starting to run noticably slowly, you can throw more computing power at it by scaling up your server. That’s not an option on the front-end where you don’t really have one run-time environment—your end users have their own run-time environment with its own constraints around computing power and network connectivity.
					</blockquote>
					<figcaption class="quotes-module__quote-citation">
						&mdash;The New York Times
					</figcaption>
				</figure>

				<figure class="quotes-module__quote js-quotes-module__quote">
					<blockquote cite="#" class="quotes-module__quote-text">
						starting to run noticably slowly, you can throw more computing power at it by scaling up your server. That’s not an option on the front-end where you don’t really have one run-time environment—your end users have their own run-time environment with its own constraints around computing power and network connectivity.
					</blockquote>
					<figcaption class="quotes-module__quote-citation">
						&mdash;The New York Times
					</figcaption>
				</figure>

				<figure class="quotes-module__quote js-quotes-module__quote">
					<blockquote cite="#" class="quotes-module__quote-text">
						starting to run noticably slowly, you can throw more computing power at it by scaling up your server. That’s not an option on the front-end where you don’t really have one run-time environment—your end users have their own run-time environment with its own constraints around computing power and network connectivity.
					</blockquote>
					<figcaption class="quotes-module__quote-citation">
						&mdash;The New York Times
					</figcaption>
				</figure>

				<figure class="quotes-module__quote js-quotes-module__quote">
					<blockquote cite="#" class="quotes-module__quote-text">
						starting to run noticably slowly, you can throw more computing power at it by scaling up your server. That’s not an option on the front-end where you don’t really have one run-time environment—your end users have their own run-time environment with its own constraints around computing power and network connectivity.
					</blockquote>
					<figcaption class="quotes-module__quote-citation">
						&mdash;The New York Times
					</figcaption>
				</figure>

				</div>
				&mdash; <button class="js-quotes-module__expander quotes-module__expander button tertiary-button">Show More</button>
			</div>
		</div>
	`;
};
