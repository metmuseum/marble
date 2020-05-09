const presets = [
	[
		"@babel/preset-env",
		{
			corejs: 3,
			useBuiltIns: "usage",
			shippedProposals: true,
		},
	],
];

const plugins = ["@babel/plugin-transform-runtime"];

module.exports = { presets, plugins };
