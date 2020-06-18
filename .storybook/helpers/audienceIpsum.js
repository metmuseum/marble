function adj() {
	return random(adjectives);
}

function conjunction() {
	return random(conjunctions);
}

function noun() {
	return capitalize(random(nouns));
}

function phrase() {
	return random(phrases());
}

function place() {
	return random(places);
}

const adjectives = [
	"expressive",
	"productive",
	"nimble",
	"agile",
	"down",
	"up",
	"404ing",
	"cached",
	"featured",
	"sunsetted",
	"working",
	"bonky",
	"three point",
	"janky",
	"holistic",
	"150th",
];

const conjunctions = ["and", "and", "and", "but", "however", "although"];

const nouns = [
	"sitecore configuration",
	"solr",
	"FY21",
	"jira",
	"board",
	"sprint ICP",
	"IS&T",
	"sitecore tree",
	"featured module",
	"scrum goblin",
	"150th",
	"landing pages",
	"homepage",
	"component",
	"Marble",
	"Ghidorah",
	"Youtube",
	"Brightcove",
	"Vimeo",
	"Content Editors",
	"Zodiac",
	"Fantasy",
	"Jenkins",
	"RAZR",
	".net framework",
	"product",
	"stakeholder",
	"group",
	"featured card",
	"the nav",
	"WAF",
	"simple card",
	"breakout",
	"Jessica",
	"David",
	"Velocity",
	"exhibition",
	"membership",
	"Storybook",
	"Gala",
	"featured banner",
	"y'all",
	".NET Core",
	"Github",
	"@here",
	`join Us CTA`,
];

function phrases() {
	return [
		`${number()} clicks to transact`,
		`wwreview seems to be ${adj()}`,
		`you need to publish the ${noun()}`,
		`UX QA pass`,
		`in the cshtml`,
		`isolating technical risk and debt`,
		`the nav on ${noun()} pages`,
		`the ${noun()} API`,
		`can you invite ${noun()} to the ${noun()} in ${place()}?`,
		`yesterday I worked on the ${adj()} ${noun()} for the ${noun()}`,
		`swarm on ${noun()}`,
		`${noun()} workflow`,
		`create a view in ${noun()}`,
		`bring it to the ${noun()} working group`,
		`review the board`,
		`i'm working from ${place()}`,
		`${noun()} will take a look at it`,
		`thanks ${noun()}, off to you, ${noun()}`,
		`clear your ${noun()} cache`,
		`the ${adj()} ${noun()} is ready for UAT`,
		`${noun()} deployed to prod`,
		`that's handled by the ${noun()} service`,
		`timebox ${noun()} to ${number()} days`,
		`can we decouple ${noun()} from ${noun()}?`,
		`is anyone at ${place()}, right now? can you restart ${noun()}? ...Nevermind`,
		`updating the ${noun()} landing page`,
		`it looks like the ${adj()} ${noun()} is breaking the ${adj()} ${noun()} again`,
		`you said ${number()}, wanna go down to a ${number()} on that?`,
		`is ${noun()} down for anyone else?`,
	];
}

const places = [
	"Audience Alley",
	"5th avenue",
	"The Cloisters",
	"5th floor",
	"Home",
	"The Breuer",
	"David's house",
];

function capitalize(s) {
	if (typeof s !== "string") return "";
	return s.charAt(0).toUpperCase() + s.slice(1);
}

function random(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function number() {
	return Math.round(Math.random() * 100);
}

function sentence() {
	if (Date.now % 2) {
		return `${capitalize(phrase())}`;
	}
	return `${capitalize(phrase())}, ${conjunction()} ${phrase()}.`;
}

function paragraph() {
	const numberOfSentences = random([2, 3, 4, 5, 6, 7, 8]);
	const sentences = [];
	for (var i = 0; i < numberOfSentences; i++) {
		let currentSentence = sentence();
		// console.log(currentSentence);
		sentences.push(currentSentence);
	}
	return sentences.join(" ");
}

// console.log(paragraph());

export default paragraph;
