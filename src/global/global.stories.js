import "./global.scss";

export default { title: 'Typography' };

const h1Expressive = (text) => `<h1 class="expressive">${text}</h1>`;
const h1 = (text) => `<h1>${text}</h1>`;
const h2 = (text) => `<h2>${text}</h2>`;
const h3 = (text) => `<h3>${text}</h3>`;
const h4 = (text) => `<h4>${text}</h4>`;

export const headings = () => {
  return h1Expressive("An Expressive h1 - the biggest heading we offer in Marble") +
  h1("A normal H1. Wow!") +
  h2("A humble H2") +
  h3("H3 - The heading of the people") +
  h4("That's right folks. We even go down to h4s")
}
