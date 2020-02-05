 const merge = require("webpack-merge");
const common = require("./webpack.common.config.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    path: __dirname + "/dist",
    filename: "marble.js"
  },
  plugins: [
    // new CnameWebpackPlugin({
    // domain: 'a-savage.com'
    // }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
      base: "https://stephenmarsh.co/a-savage/", // TODO: change this, obviously
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    })
  ]
});
