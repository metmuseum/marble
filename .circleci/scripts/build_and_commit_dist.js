const simpleGit = require('simple-git');
const git = simpleGit();

const safetyCheck = (err, data) => {
  // 🚧 safety first
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(data);
  return data;
}

const main = async () => {
  const status = await git.status(safetyCheck);
  
  if (status.files.length > 0) {
    console.log("changes!");
    await git.add("dist/.", safetyCheck);
    const headSha = await git.revparse("HEAD", safetyCheck);
    const branchResult = await git.branch(safetyCheck);
    const branchName = branchResult.current
    console.log(branchName);
    await git.commit(`[skip ci] auto build dist for ${headSha}`, safetyCheck)
    await git.push("origin", branchName, safetyCheck)
  } else {
    console.log("build produced no changes");
  }
}

main();
