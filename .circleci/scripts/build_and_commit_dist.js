const simpleGit = require('simple-git');
const git = simpleGit();
git.status((err, status) => { 
  console.log(status);
})