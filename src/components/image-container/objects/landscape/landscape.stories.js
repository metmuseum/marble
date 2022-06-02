import markup from "../markup.html.js";

import landscapeThumb from ".storybook/assets/images/mythical-landscape-with-immortals/70w.jpg";
import landscapeRestricted from ".storybook/assets/images/mythical-landscape-with-immortals/600w.jpg";
import landscapeOpenAccess from ".storybook/assets/images/mythical-landscape-with-immortals/4000w.jpg";

const defaultArgs = {
	containerWidth: 1000,
	containerHeight: 1000,
	imageAlt: "an example image, this is an example alt",
};

export default {
	title: "Image Containers/Objects/Landscape",
	args: defaultArgs
};

const Thumbnail = (args) => markup(args);
Thumbnail.args = { ...defaultArgs, imageSrc: landscapeThumb };

const Restricted = (args) => markup(args);
Restricted.args = { ...defaultArgs, imageSrc: landscapeRestricted };

const OpenAccess = (args) => markup(args);
OpenAccess.args = { ...defaultArgs, imageSrc: landscapeOpenAccess };

export { Thumbnail, Restricted, OpenAccess };
