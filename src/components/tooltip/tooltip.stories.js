import html from "../../../.storybook/helpers/html";

import { text, withKnobs } from "@storybook/addon-knobs";

export default { title: "Components/Tooltip", decorators: [withKnobs] };

const ToolTip = () => {
	return html`
    <p>In the ancient Americas, gold was a manifestation of the sacred, and objects fashioned from it were a means of connecting with a supernatural world. Far from passive deposits of wealth, objects made of gold were active agents in an ongoing engagement with powerful forces. Gold was particularly closely associated with the sun; indeed, it was often thought of as an excretion of this divine entity
        <div class="marble-inline-tooltip fixed-width show-tooltip">
            <div class="tooltip-descriptor">Artwork</div>
                <h5 class="tooltip-title">Figure Pendant</h5>
                <h6 class="tooltip-subtitle">Tairona</h6>
                <img class="tooltip-image" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/309540/1907006/main-image">
            </div>.
        </div>
    </p>`
};

const ToolTipUpwards = () => {
return html`
    <p class="tooltip-upwards" style="position:relative;">In the ancient Americas, gold was a manifestation of the sacred, and objects fashioned from it were a means of connecting with a supernatural world. Far from passive deposits of wealth, objects made of gold were active agents in an ongoing engagement with powerful forces. Gold was particularly closely associated with the sun; indeed, it was often thought of as an excretion of this divine entity
        <div class="marble-inline-tooltip fixed-width show-tooltip is-upwards">
            <div class="tooltip-descriptor">Artwork</div>
                <h5 class="tooltip-title">Figure Pendant</h5>
                <h6 class="tooltip-subtitle">Tairona</h6>
                <img class="tooltip-image" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/309540/1907006/main-image">
            </div>.
        </div>
    </p>
    <p>
    In the ancient Americas, gold was a manifestation of the sacred, and objects fashioned from it were a means of connecting with a supernatural world. Far from passive deposits of wealth, objects made of gold were active agents in an ongoing engagement with powerful forces. Gold was particularly closely associated with the sun; indeed, it was often thought of as an excretion of this divine entity.</p>`
}

export { ToolTip, ToolTipUpwards };
