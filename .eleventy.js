const configure = require("./config");
const esbuild = require("esbuild");
const yaml = require("js-yaml");

module.exports = (eleventyConfig) => {
  configure(eleventyConfig);

  eleventyConfig.ignores.add("src/sass/modules/**/*.scss");

  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->",
  });

  eleventyConfig.on("eleventy.before", async () => {
    await esbuild.build({
      entryPoints: ["src/js/main.js"],
      bundle: true,
      outfile: "site/js/main.js",
      sourcemap: true,
    });
  });

  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

  return {
    dir: { input: "src", output: "site", data: "_data" },
  };
};
