# Marble
## `Marble` is the Design System used by [The Metropolitan Museum of Art](https://www.metmuseum.org/) (@metmuseum)

![marbling paper by MarbleJournals.com](https://ds62n8mqpnstb.cloudfront.net//full_Escanear-6r.jpg)



# Marble Development As A Local Package

You may want to see your changes to Marble locally _**and**_ in the context of another project you're working on.  We can do this easily with [npm link](https://docs.npmjs.com/cli/link.html).

### Steps:
1. Tell your `npm` that _this_ is the local folder where Marble lives.
	* Navigate to your local Marble repo (ie, where this README lives) and just run:

			npm link


2. Next, tell whatever project you're working on to use that local, linked version of `Marble`.
	* Navigate to a local project folder and find the directory that contains the `package.json` that originally specified `Marble`.
		* For example, in Ghidorah, this wouldn't be the project root, it would be: `ghidorah/MMA.Ghidorah/`
	* From _that_ directory, run:

			npm link Marble

	* Now, instead of what's installed in `node_modules`, npm knows to pull our `Marble` package files from the directory in Step 1.  We can make our changes in our Marble repo, and our other project will show them to us. (Well, as long as they're compiled into `/dist`), more on that below:.

# Webpack Development

1) Install the dependencies in this directory with `npm install`
2) Launch wepback-dev-server to watch our `/src` directory for changes and compile them into `/dist` with:
	* `npm run start`
3) This will also launch a browser pointed to: `src/index.html`.

 (Not much to see, but it works!)

# Webpack Build for Release And Production
* It would be bad form to commit the dev environment version of our files.  When you're ready to `git commit`, you should stop webpack-dev-server if it's running and then: `npm run build`.   This
