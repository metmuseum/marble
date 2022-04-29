import markup from "../markup.html.js";

import portraitThumb from ".storybook/assets/images/playing-the-zither-for-a-crane/70h.jpg";
import portraitRestricted from ".storybook/assets/images/playing-the-zither-for-a-crane/600h.jpg";
import portraitOpenAccess from ".storybook/assets/images/playing-the-zither-for-a-crane/4000h.jpg";

const defaultArgs = {
	containerWidth: 1000,
	containerHeight: 1000,
	imageAlt: "an example image, this is an example alt",
};

export default {
	title: "Image Containers/Objects/Portrait",
	args: defaultArgs
};

const Thumbnail = (args) => markup(args);
Thumbnail.args = { ...defaultArgs, imageSrc: portraitThumb };

const Restricted = (args) => markup(args);
Restricted.args = { ...defaultArgs, imageSrc: portraitRestricted };

const OpenAccess = (args) => markup(args);
OpenAccess.args = { ...defaultArgs, imageSrc: portraitOpenAccess };

export { Thumbnail, Restricted, OpenAccess };
