module.exports = {
	extends: ["eslint:recommended", "plugin:storybook/recommended"],
	env: {
		browser: true,
		node: true,
		es2021: true
	},
	globals: {
		MediaMetadata: "readonly"
	},
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module"
	},
	rules: {
		"eol-last": 2,
		indent: [1, "tab"],
		"no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 0 }],
		"no-trailing-spaces": ["error"],
		quotes: ["error", "double", {
			avoidEscape: true
		}],
		semi: [2, "always"],
	}
};
