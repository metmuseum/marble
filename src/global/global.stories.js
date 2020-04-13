import "./global.scss";

export default { title: 'Typography' };

const h1 = (text) => `<h1>${text}</h1>`;
const h1p = (text) => `<p>${text}</p>`;
const h1Fixed = (text) => `<div class="fixed-width"><h1>${text}</h1></div>`;
const h1f = (text) => `<p>${text}</p>`;
const h1Expressive = (text) => `<h1 class="expressive">${text}</h1>`;
const h1e = (text) => `<p>${text}</p>`;
const h2 = (text) => `<h2>${text}</h2>`;
const h2p = (text) => `<p>${text}</p>`;
const h2Fixed = (text) => `<div class="fixed-width"><h2>${text}</h2></div>`;
const h2f = (text) => `<p>${text}</p>`;
const h2Subtext = (text) => `<h2 class="notification-banner__subtext">${text}</h2>`;
const h2s = (text) => `<p>${text}</p>`;
const h2SubtextFixed = (text) => `<div class="fixed-width"><h2 class="notification-banner__subtext">${text}</h2></div>`;
const h2sf = (text) => `<p>${text}</p>`;
const h3 = (text) => `<h3>${text}</h3>`;
const h3p = (text) => `<p>${text}</p>`;
const h4 = (text) => `<h4>${text}</h4>`;
const h4p = (text) => `<p>${text}</p>`;

export const headings = () => {
  return h1("By Jove, my quick study of lexicography won a prize!") +
  h1p("fluid size - mixin is <i>typography-h1</i>") +
  h1Fixed("By Jove, my quick study of lexicography won a prize!") +
  h1f("fixed size - mixin is <i>typography-h1</i> inside <i>.fixed-width</i>") +
  h1Expressive("By Jove, my quick study of lexicography won a prize!") +
  h1e("fluid size - mixin is <i>typography-h1-expressive</i>") +
  h2("By Jove, my quick study of lexicography won a prize!") +
  h2p("fluid size - mixin is <i>typography-h2</i>") +
  h2Fixed("By Jove, my quick study of lexicography won a prize!") +
  h2f("fixed size - mixin is <i>typography-h2</i> inside <i>.fixed-width</i>") +
  h2Subtext("By Jove, my quick study of lexicography won a prize!") +
  h2s("fluid size - mixin is <i>typography-h2-subtext</i>") +
  h2SubtextFixed("By Jove, my quick study of lexicography won a prize!") +
  h2sf("fixed size - mixin is <i>typography-h2-subtext</i> inside <i>.fixed-width</i>") +
  h3("By Jove, my quick study of lexicography won a prize!") +
  h3p("fluid size - mixin is <i>typography-h3</i>") +
  h4("By Jove, my quick study of lexicography won a prize!") +
  h4p("fixed size - mixin is <i>typography-h4</i>")
}
