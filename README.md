[![metmuseum](https://circleci.com/gh/metmuseum/marble.svg?style=svg)](https://app.circleci.com/pipelines/github/metmuseum/marble)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/metmuseum/marble?sort=semver&style=flat-square)

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

___

# Using Marble In Your Project

## Installing Marble

Marble installs from GitHub, not the NPM registry.

It's recommended that your CI/CD process use [`npm ci`](https://docs.npmjs.com/cli/v7/commands/npm-ci) instead of `npm install` so that you get [deterministic, reproducible builds](https://12factor.net/dependencies).


### Example Usage

Lock to one version (recommended):

`npm install metmuseum/marble#0.11.15`

Lock to a specific commit:

`npm install metmuseum/marble#9e68bab`

Use any npm-compatible semantic versioning syntax:

`npm install metmuseum/marble#semver:^0.11.15`

Just get whatever's on `main` currently:

`npm install metmuseum/marble`

___

## Importing Marble

Marble can be imported a few different ways, depending on your projects' needs and build tools. If you're unsure, please reach out in our [#met-developers Slack channel](https://met-museum.slack.com/archives/C022VD1NZNG) .

### Node environments (Gulp, Webpack, etc):

- Javascript default export:
```javascript
import marble from "@metmuseum/marble";

marble.global()
```

- Single module (doesn't include any styles):
```javascript
import { AudioPlayer } from "@metmuseum/marble";


new AudioPlayer(document.querySelector(".my-cool-audio-player"));
```

- SCSS:
```scss
  @use "~@metmuseum/marble/scss" as marble;

  .my-cool-heading {
    @include marble.typography-h1;
  }
```

- CSS:
```scss
 @use "~@metmuseum/marble";
```

____ 

### Production-ready assets (transpiled, minified)
- Javascript:
```javascript
  import "@metmuseum/marble/browser";
```

- CSS:
```scss
  @use "~@metmuseum/marble";
```

<small>TODO: Consider CDN-hosted file for `<script>` tags? </small>
___
## Using Marble's Components

Marble does not currently export component html or templates, only styles and javascript. Think of it like a _meal kit_ that needs to be cooked before you serve. (Or a little bit like Twitter's [Bootstrap Framework](/github.com/twbs/bootstrap)).

In other words, the component stories are just recipes, and it's up to your project to implement the proper markup, based on examples in `/src` and in [Storybook](https://metmuseum.github.io/marble).

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

```razor
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

___

## Marble Development As A Local Package with NPM Link

You may want to see your changes to Marble locally _**and**_ in the context of another project you're working on. We can do this easily with [npm link](https://docs.npmjs.com/cli/link.html).

### Steps:

1.  Tell your `npm` that _this_ is the local folder where Marble lives.

    - Navigate to your local Marble repo (ie, where this README lives) and just run:

          		npm link

2)  Next, tell whatever downstream project you're working on to use that local, linked version of Marble.

    - Navigate to a local project folder and find the directory that contains the `package.json` that originally specified Marble. \* For example, in Ghidorah, this wouldn't be the project root, it would be: `ghidorah/MMA.Ghidorah/`
    - From _that_ directory, run:

          		npm link @metmuseum/marble

    - Now, instead of what's installed in `node_modules`, npm knows to pull our Marble package files from the directory in Step 1. We can make our changes in our Marble repo (more on that below), and our other project will show them to us.

  **IMPORTANT**: If your project pulls in any Marble assets through /dist (ie, `@use "~@metmuseum/marble";` for CSS, like in Sculptured), you'll want't make sure that you're running `npm run build-dev` in this repo, so that Webpack watches for changes and compiles them to `/dist` for your other project to find. 

# Storybook Development

Storybook is the best way to develop components for Marble. To start Storybook locally, launch the app with: `npm run storybook`

We use the `html preset` for Storybook. There are many good exmaples of html stories and add-ons at the official "kitchen sink" example directory:

- https://github.com/storybookjs/storybook/tree/next/examples/html-kitchen-sink

# Webpack Build for Release And Production

Our CI will automatically do this for you before a release (when pull requests are merged), but if you need to do this manually, please note:

- For releases of Marble, we'll want to compile everything into a production-ready `.css` and `.js` file.
- We use Webpack to build and bundle these files to `/dist`

- Our build step is aliased in package.json as:

      		npm run build

* See also: [/webpack.production.config.js](https://github.com/metmuseum/marble/blob/master/webpack.config.js)

---

## License
<mark>Currently for internal use only. © Copyright 2021 The Metropolitan Museum of Art. All rights are reserved.</mark>
