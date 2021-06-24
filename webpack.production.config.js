const merge = require("webpack-merge");
const common = require("./webpack.common.config.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = merge(common, {
	mode: "production",
	devtool: "source-map",
	output: {
		path: __dirname + "/dist",
		filename: "marble.js",
		libraryTarget: "commonjs2"
	},
	plugins: [
		new CleanWebpackPlugin()
	]
});
