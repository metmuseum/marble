//For projects using webpack with a CSS and JS loader, this file can be referenced for both.
import "./marble.scss"
import Global from "./global/global.js";

const Marble = function(){};


Marble.prototype = {
  global: Global
}


export default Marble;
