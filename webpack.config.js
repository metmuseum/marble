const path = require("path");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const postcssFlexbugsFixes = require("postcss-flexbugs-fixes");

const commonConfig = {
	entry: ["./src/index.mjs", "./src/marble.scss"],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "marble.js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				sideEffects: true,
				use: [
					// 4. "extract" our CSS back out of the JS and into marble.css
					{
						loader: MiniCssExtractPlugin.loader,
					},
					// 3. translate CSS from postcss into CommonJS
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
						}
					},
					// 2. run our compiled css through postcss and its plugins
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								// add all our dank css transformation plugins here
								plugins: [
									"autoprefixer", // 2.b run autoprefxier
									postcssFlexbugsFixes, // 2.a: some flexbug fixes, because why not
								],
							},
						},
					},
					// 1. compile our sass into css
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({filename: "marble.css"}),
		new CleanWebpackPlugin(),
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin(),
			new CssMinimizerPlugin({
				parallel: true,
				minimizerOptions: {
					preset: [
						"default",
						{ discardComments: { removeAll: true }, discardDuplicates: true, calc: false },
					],
				},
			}),
		],
	},
};

const developmentConfig = {
	mode: "development",
	watch: true,
	plugins: [new WebpackNotifierPlugin({ emoji: true, onlyOnError: true })],
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
		publicPath: "/",
		historyApiFallback: true
	}
};

const productionConfig = {
	mode: "production",
	devtool: "source-map",
};

module.exports = (env, argv) => {
	switch (argv.mode) {
	case "development":
		console.log("compiling marble for dev, but this is only useful if you're using npm link or something. did you mean to run storybook?");
		return merge(commonConfig, developmentConfig);
	case "production":
		console.log("compiling marble for production");
		return merge(commonConfig, productionConfig);
	default:
		throw new Error("No matching configuration was found!");
	}
};
