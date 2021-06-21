[![metmuseum](https://circleci.com/gh/metmuseum/marble.svg?style=svg)](https://app.circleci.com/pipelines/github/metmuseum/marble) [![CodeFactor](https://www.codefactor.io/repository/github/metmuseum/marble/badge)](https://www.codefactor.io/repository/github/metmuseum/marble)

# Marble

## The Design System of [The Metropolitan Museum of Art](https://www.metmuseum.org/) ([@metmuseum](https://github.com/metmuseum/))

![marbling paper by MarbleJournals.com](https://ds62n8mqpnstb.cloudfront.net//full_Escanear-6r.jpg)

# Table Of Contents


- ### [What is Marble?](#What-is-Marble?)
- ### [Component Explorer](#Component-Explorer)
- ### [Design Documentation and Homepage](#Design-Documentation-and-Homepage)
- ### [Using Marble In Your Project](#Using-Marble-In-Your-Project)
- ### [How To Contribute To Marble](#Contributing-To-Marble)
  - ### [Marble Development As A Local Package](#Marble-Development-As-A-Local-Package)
  - ### [Storybook Development](#Storybook-Development)
  - ### [Webpack Build for Release And Production](#[Webpack-Build-for-Release-And-Production)

# What is Marble?

Marble is the design system of the Metropolitan Museum of Art's Digital Deptartment. Marble is currently only an [innersource](
https://about.gitlab.com/topics/version-control/what-is-innersource/) project.

# Component Explorer

Our component explorer, powered by [Storybook](https://storybook.js.org/docs/basics/introduction/), lives at:

## 🏛️ [metmuseum.github.io/marble](https://metmuseum.github.io/marble) 📙


# Design Documentation and Homepage:

Marble's design docs and homepage are at:

🎨 https://marble.metmuseum.org/ 🏡

# Using Marble In Your Project

## Installing Marble

Marble installs from GitHub, not the NPM registry.

It's recommended that your CI/CD process use [`npm ci`](https://docs.npmjs.com/cli/v7/commands/npm-ci) instead of `npm install` so that:

- [You get deterministic, reproducible builds](https://12factor.net/dependencies).
- You don't accidentally introduce a newer version of Marble than you intend to.

There are multiple ways to install Marble:

Lock to one version:

`npm install metmuseum/marble#0.11.15`

Lock to a specific commit:

`npm install metmuseum/marble#9e68bab`

Use any npm-compatible semantic versioning syntax:

`npm install metmuseum/marble#semver:^0.11.15`

Just get whatever's on main:
`npm install metmuseum/marble`

## Upgrading Marble

Remember, if you're using `npm ci` in production (recommended), then you'll need to periodically run `npm install ...` or `npm upgrade ...` and check in the updated package-lock.json.

## Importing Marble

Marble can be imported a few different ways, depending on how your project preprocesses and bundles things. If you're unsure, please reach out in our [#app-dev](https://met-museum.slack.com/archives/G29NSRAGL) Slack channel.

### Import Javascript:

- If your project only uses CommonJS syntax (vanilla Node.js environments):

  ```javascript
  const marble = require("@metmuseum/marble");
  ```

- ESM syntax (Webpack, etc):

  ```javascript
  import marble from "@metmuseum/marble";
  ```

- Reference the files directly (not recommended):
  - `Path/To/Your/Project/node_modules/@metmuseum/marble/dist/marble.js`
    - This exposes a variable called `marble`.
  - `Path/To/Your/Project/node_modules/@metmuseum/marble/dist/marble.js.map`
    - Source maps (recommended)

* TODO: Consider CDN-hosted file for `<script>` tag? (easy with CI, but like, version control?)

### Import SCSS:

This should work, please let us know if it does not:

```scss
@import "~@metmuseum/marble/src/marble.scss";
```

### Import Precompiled, Minified CSS:

- If your project supports the `~` syntax:
  ```scss
  import "~@metmuseum/marble";
  ```
- If not, production-ready assets are available to reference directly (not recommended):
  - `Path/To/Your/Project/node_modules/@metmuseum/marble/dist/marble.css`
- TODO: Consider CDN-hosted file for stylesheet `<link>` tag? (easy with CI, but like, version control?)

#### SCSS

We recommend just using all of Marble's styles, for now. See above. ☝️

TODO: investigate Sass `@import` vs new `@use` syntax:

- https://sass-lang.com/documentation/at-rules/import#import-only-files
- will inform if we need our file structure to have `module.import.scss` naming.
- TODO: Probably we should move away from: `@import "marble/src/base/base";` (_kinda_ bad/leaky abstraction because what if we change file structure?)
- Depending on SCSS preprocesssor, namely scss-loader+postcss (webpack) vs gulp sass, there is totally different behave regarding scope and iikjf it follows dependencies :(

### Using Marble's Components

Marble does not currently export component html or templates, only styles and javascript. Think of it a little bit like Twitter's [Bootstrap Framework](/github.com/twbs/bootstrap), or like a meal kit, but not dish you serve.

It's up to your project to implement the proper markup, based on examples you can find in `/src` and on our [Storybook](https://metmuseum.github.io/marble).

#### Example:

Take the structure and classes from Marble:

```javascript
// in src/components/section-heading/section-heading.html.js

html`<div
	class="section-heading section-heading--text-${textAlignment} ${inSitu
		? "productive-component"
		: ""}"
>
	<h2 class="section-heading__heading ${context}">${header}</h2>
	<div>${he.decode(bodyCopy)}</div>
	<a
		class="button tertiary-button section-heading__text-link"
		role="button"
		tabindex="0"
		href="#"
	>
		${CTA1}</a
	>
</div>`;
```

And interpret them for your project's framework and data models:

```HTML+Razor
<div class="section-heading section-heading--text-center productive-component section-header-@Model.Name">
	<h2 class="section-heading__heading expressive">@Html.Raw(Model.Header)</h2>
	<div>@Html.Raw(@Model.Description)</div>
	<a
		class="button tertiary-button section-heading__text-link"
		role="button"
		tabindex="0"
		href="@Model.UrlLink"
	>@Html.Raw(Model.CTA)</a>
</div>
```

##### Javascript

By design, Marble's Javascript should only cause one side-effect: exposing a variable called `marble`. It's up to your project to tell Marble what to do and when.

At the bare minimum, you probably want to run Marble's global code:

```javascript
import marble from "@metmuseum/marble";

marble.global();
```

If you use a specific component, say the `jumpLinkBanner`, you need to call that somewhere, as well:

```javascript
import marble from "@metmuseum/marble";
marble.jumpLinkBanner();
```

TODO: a `marble.everything();` option?

## Deployment and Continuous Integration

You can expect that Marble's default branch, `main`, is always stable and releaseable. If you installed as above, `npm install` and `npm update` should always be safe.

**Make sure you always check in your your package-lock.json**.

### Recommended CI

If you need something more deterministic and safe, say for staging or production environments, those environments should use `npm ci` **_instead of_** `npm install`. This will ensure the project only builds with the exact commit (and dependencies) that were specified earlier in the `package-lock.json`.

Example:

```json
"marble": {
    "version": "github:metmuseum/marble#d765ab8a340e1e989953207115414469307da93c",
    "from": "github:metmuseum/marble#main",
    "requires": {
        "he": "^1.2.0",
        "intersection-observer": "^0.7.0",
        "smoothscroll-polyfill": "^0.4.4",
        "vanilla-lazyload": "^12.5.1"
    }
}
```

More info: https://docs.npmjs.com/cli/ci.html

For a preview environment (example: on Ghidorah this is called the "development" server), you might want to only use `npm install` so each build has the latest and you can catch integration issues earlier.

It is **not recommended** to point your installation of Marble to an environment-specific branch on staging or production. Please always use `main`.

# Contributing To Marble

# WIP

## Conventions

- mock your data separately
- use component story format
- use knobs
- try to provide in-situ examples?
- make sure a11y passes!

* file organization

  - stories
  - scss
  - javascript
  - text casing (kebab-case?)

- linting
  - recommend prettier
  - explore: CI enforcement?

### Marble Development As A Local Package

You may want to see your changes to Marble locally _**and**_ in the context of another project you're working on. We can do this easily with [npm link](https://docs.npmjs.com/cli/link.html).

### Steps:

1.  Tell your `npm` that _this_ is the local folder where Marble lives.

    - Navigate to your local Marble repo (ie, where this README lives) and just run:

          		npm link

2)  Next, tell whatever project you're working on to use that local, linked version of Marble.

    - Navigate to a local project folder and find the directory that contains the `package.json` that originally specified Marble. \* For example, in Ghidorah, this wouldn't be the project root, it would be: `ghidorah/MMA.Ghidorah/`
    - From _that_ directory, run:

          		npm link @metmuseum/marble

    - Now, instead of what's installed in `node_modules`, npm knows to pull our Marble package files from the directory in Step 1. We can make our changes in our Marble repo (more on that below), and our other project will show them to us.

# Storybook Development

Storybook is the preferred way of developing components for Marble. To start Storybook locally, launch the app with: `npm run storybook`

To publish the Storybook to its web homepage (via GitHub pages), please commit your changes, then run: `npm run deploy-storybook`. Be mindful that this overwites the current Storybook with your local version.

We use the `html preset` for Storybook. There are many good exmaples of html stories and add-ons at the official "kitchen sink" example directory:

- https://github.com/storybookjs/storybook/tree/next/examples/html-kitchen-sink

# Webpack Build for Release And Production

TODO: update this to have CI build dist on merge

- For releases of Marble, we'll want to compile everything into a production-ready `.css` and `.js` file.
- We use Webpack to build and bundle these files to `/dist`

- Our build step is aliased in package.json as:

      		npm run build

* See also: [/webpack.production.config.js](https://github.com/metmuseum/marble/blob/master/webpack.production.config.js)

- Make sure you commit this production-ready build of Marble and not the development version that would also be generated to `/dist` anytime you run webpack-dev-server.

---

## License
Currently for internal use only. © Copyright 2021 The Metropolitan Museum of Art. All rights are reserved. 