const https = require('https');
const { execSync } = require('child_process');
const currentPackageJSON = require("../../package.json");

const dryRun = !process.env.CIRCLECI

https.get(
  "https://api.github.com/repos/metmuseum/marble/releases/latest",
  {
    headers: {
      'User-Agent': 'node'
    }
  },
  (response) => {
    let data = '';
    // A chunk of data has been received.
    response.on('data', (chunk) => { data += chunk; });

    // The whole responseonse has been received.
    response.on('end', () => {
      main(JSON.parse(data).tag_name)
    });
  }).on("error", (err) => {
    console.log("Error: " + err.message);
    process.exit(1);
  });


const main = (tag) => {
  console.log("latest version on GitHub:", tag)
  console.log("current version of local package:", currentPackageJSON.version)
  const versionIsSame = tag == currentPackageJSON.version;
  console.log("version is the same?", versionIsSame)

  const latestGitHubSemVer = tag.split(".").map((num) => parseInt(num));
  console.log("latest github semver:", latestGitHubSemVer);

  const latestLocalSemVer = currentPackageJSON.version.split(".").map((num) => parseInt(num));
  console.log("latest local semver:", latestLocalSemVer);

  let increment = versionIsSame ? "patch" : "--no-increment";

  console.log("increment is", increment)

  if (dryRun) {
    console.log("performing dry run")
  }

  const command = `DEBUG=release-it:* npm run release -- ${increment} ${dryRun ? "--dry-run" : ""} --ci -VV --no-git.requireUpstream --set-upstream origin main`
  console.log("running:", command);
  execSync(command)
}