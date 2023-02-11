const { configurePlugins } = require("./config");
const esbuild = require("esbuild");

module.exports = (config) => {
  configurePlugins(config);

  config.addPassthroughCopy("src/assets");

  config.on("eleventy.before", async () => {
    await esbuild.build({
      entryPoints: ["src/js/main.js"],
      bundle: true,
      outfile: "site/js/main.js",
      sourcemap: true,
    });
  });

  return {
    dir: { input: "src", output: "site" },
  };
};
