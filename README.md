# Marble

## Marble is the Design System used by [The Metropolitan Museum of Art](https://www.metmuseum.org/) ([@metmuseum](https://github.com/metmuseum/))

![marbling paper by MarbleJournals.com](https://ds62n8mqpnstb.cloudfront.net//full_Escanear-6r.jpg)

# Table Of Contents

- ### [Living Style Guide](#Living-Style-Guide)
- ### [Using Marble](#Using-Marble)
- ### [Marble Development As A Local Package](#Marble-Development-As-A-Local-Package)
- ### [Storybook Development](#Storybook-Development)
- ### [Snapshot Tests](#Snapshot-Tests)
- ### [Webpack Build for Release And Production](#[Webpack-Build-for-Release-And-Production)

# Living Style Guide

Our Living Style Guide, powered by [Storybook](https://storybook.js.org/docs/basics/introduction/), lives at:

## 🏛️ [metmuseum.github.io/Marble](https://metmuseum.github.io/Marble) 📙

For developer info on how to edit the styleguide, see the [Storybook Section](#Storybook) below.

# Using Marble

You can import Marble into your project using npm.

To continuously use the latest version: `npm install metmuseum/marble -S`

To lock in at a specific release: `npm install metmuseum/marble#vX.X.X -S`

To include all Marble CSS through SCSS:
`@include "marble/src/marble"`

To include a specific piece of marble:
`@include "marble/src/components/componentName"`

# Marble Development As A Local Package

You may want to see your changes to Marble locally _**and**_ in the context of another project you're working on. We can do this easily with [npm link](https://docs.npmjs.com/cli/link.html).

### Steps:

1.  Tell your `npm` that _this_ is the local folder where Marble lives.

    - Navigate to your local Marble repo (ie, where this README lives) and just run:

          		npm link

2)  Next, tell whatever project you're working on to use that local, linked version of Marble.

    - Navigate to a local project folder and find the directory that contains the `package.json` that originally specified Marble. \* For example, in Ghidorah, this wouldn't be the project root, it would be: `ghidorah/MMA.Ghidorah/`
    - From _that_ directory, run:

          		npm link Marble

    - Now, instead of what's installed in `node_modules`, npm knows to pull our Marble package files from the directory in Step 1. We can make our changes in our Marble repo (more on that below), and our other project will show them to us.

# Storybook Development

Storybook is the preferred way of developing components for Marble. To start Storybook locally, launch the app with: `npm run storybook`

To publish the Storybook to its web homepage (via GitHub pages), please commit your changes, then run: `npm run deploy-storybook`. Be mindful that this overwites the current Storybook with your local version.

We use the `html preset` for Storybook. There are many good exmaples of html stories and add-ons at the official "kitchen sink" example directory:

- https://github.com/storybookjs/storybook/tree/next/examples/html-kitchen-sink

# Snapshot Tests

Storybook helps us use automated snapshot tests to look for visual regresssions. The tests will run on CircleCI for every pull request.

To make sure the tests pass before you push, you can run the tests locally:

1. First, Storyshot needs a static copy of Storybook to check against. (This makes it easy to run the tests in CI versus hitting a local `webpack-dev-server`). Run `npm run build-storybook` to make a fresh static copy of Storybook for the tests to check against. If you don't want to manually rebuild the static Storybook every time you make a change, you can run `npm run build-and-watch-storybook` to create a fresh build every time a file changes.
2. Run tests with `npm run test`

# Webpack Build for Release And Production

- For releases of Marble, we'll want to compile everything into a production-ready `.css` and `.js` file.
- We use Webpack to build and bundle these files to `/dist`

- Our build step is aliased in package.json as:

      		npm run build

* See also: [/webpack.production.config.js](https://github.com/metmuseum/Marble/blob/master/webpack.production.config.js)

- Make sure you commit this production-ready build of Marble and not the development version that would also be generated to `/dist` anytime you run webpack-dev-server.
