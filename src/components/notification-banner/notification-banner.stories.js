export default { title: "Notification Banner" };

const data = {
	header: "The Museum Has Temporarily Closed",
	description: "<p>The Museum has temporarily closed all three locations effective March 13, to support New York City’s effort to contain the spread of COVID-19.</p>",
	link: {
		url: "http://metmuseum.org",
		text: "Learn More"
	}
};

const notificationMarkup = (model) => {
	return `<section class="notification-banner ${model.className}">
			<h2 class="notification-banner__header">${model.header}</h2>
			<div class="notification-banner__body">
				<div class="notification-banner__subtext">${model.description}</div>
				<a href="${model.link.url}" class="notification-banner__link">${model.link.text}</a>
			</div>
	</section>`;
};


export const expressive = () => {
	let model = Object.assign(data, {className: "notification-banner--expressive"});
	return notificationMarkup(model);
};

export const productive = () => {
	let model = Object.assign(data, {className: "notification-banner--productive"});
	return notificationMarkup(model);
};
