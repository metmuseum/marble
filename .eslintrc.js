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
		indent: [1, "tab"],
		quotes: ["error", "double", {
			avoidEscape: true
		}],
		semi: [2, "always"]
	},
	overrides: [
		{
			files: ["*.stories.@(ts|tsx|js|mjs|cjs)"],
			rules: {
				// temporarily disabling due to: https://github.com/storybookjs/eslint-plugin-storybook/issues/57
				"storybook/story-exports": "off",
			}
		}
	]
};

