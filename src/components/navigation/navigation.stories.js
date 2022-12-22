import { html } from ".storybook/helpers";
import bareNav from "./navigation-bare/navigation-bare.js";
import { useEffect } from "@storybook/client-api";

import { withKnobs } from "@storybook/addon-knobs";

export default { title: "Navigation/Bare Navigation", decorators: [withKnobs] };

const BareNav = () => {
	useEffect(bareNav);
	return html`<section class="subnav subnav--contentstreams">
    <div class="navigation-bare js-navigation-bare">
        <div class="navigation-bare--item navigation-bare--item__home">
            <a class="navigation-bare--link navigation-bare--item__home--link" href="/">Home</a>
        </div>
        <div class="navigation-bare--item">
            <a class="navigation-bare--link" href="/">LINK 1</a>
        </div>
        <div class="navigation-bare--item is-selected">
            <a class="navigation-bare--link" href="/">LINK 2</a>
        </div>
        <div class="navigation-bare--item">
            <a class="navigation-bare--link" href="/">LINK 3</a>
        </div>
    </div>
</section>`;
};

export { BareNav };