import configurePlugins from "./plugins.js";
import addShortcodes from "./shortcodes.js";

export default (config) => {
  configurePlugins(config);
  addShortcodes(config);
};
