module.exports = {
	extends: [
		"eslint:recommended"
	],
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	globals: {
		MediaMetadata: "readonly"
	},
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module"
	},
	rules: {
		indent: [1, "tab"],
		quotes: ["error", "double", { avoidEscape: true }],
		semi: [2, "always"]
	}
};