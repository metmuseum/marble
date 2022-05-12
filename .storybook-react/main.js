const path = require("path");

module.exports = {
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.resolve ||= {}
    config.resolve.alias ||= {}
    config.resolve.alias[".storybook"] = path.resolve('.storybook')

    // Return the altered config
    return config;
  },
  "stories": [
    "../src/**/*.stories.react.mdx",
    "../src/**/*.stories.react.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    // "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/addon-interactions",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  // refs: {
  //   html: {
  //     title: 'HTML',
  //     url: 'http://localhost:54525',
  //   },
  // }
}
