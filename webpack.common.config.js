const JsConfigWebpackPlugin = require("js-config-webpack-plugin");
const ScssConfigWebpackPlugin = require("scss-config-webpack-plugin");
const FontConfigWebpackPlugin = require("font-config-webpack-plugin");

module.exports = {
	entry: ["./src/index.mjs", "./src/marble.scss"],
	plugins: [
		new JsConfigWebpackPlugin({ babelConfigFile: "./babel.config.js" }),
		new ScssConfigWebpackPlugin(), // TODO: remove these plugins and move to the custom config that's in ghidorah/sculptured, so we can use postcss8
		new FontConfigWebpackPlugin(),
	],
	target: "node",
};
