const border = `============================================================================================================`;

console.log(`
${border}
  Thank you for using the latest version of Marble, the design system of the Metropolitan Museum of Art 🏛
`);

console.log("\x1b[36m%s\x1b[0m", `  Important message!`);

console.log(`
  The Marble package has a new name.

  Please update your project to reference @metmuseum/marble

  Example:
  Old: import { marble } from marble;
  New: import { marble } from @metmuseum/marble;

  Please reach out if you have any questions!
  github.com/metmuseum/marble
${border}
`);
