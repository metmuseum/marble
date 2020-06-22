const merge = require("webpack-merge");
const common = require("./webpack.common.config.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	output: {
		path: __dirname + "/dist",
		filename: "marble.js"
	},
	devServer: {
		contentBase: "./dist",
		publicPath: "/",
		historyApiFallback: true
	},
	plugins: [
		new CleanWebpackPlugin()
	]
});
