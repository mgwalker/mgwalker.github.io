const configurePlugins = require("./plugins.js");
const addShortcodes = require("./shortcodes.js");

module.exports = (config) => {
  configurePlugins(config);
  addShortcodes(config);
};
