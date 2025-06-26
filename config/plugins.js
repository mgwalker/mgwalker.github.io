const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const purgeCssPlugin = require("eleventy-plugin-purgecss");
const sassPlugin = require("@grimlink/eleventy-plugin-sass");
const sass = require("sass");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownAttr = require("markdown-it-attrs");

dayjs.extend(utc);

module.exports = (config) => {
  const mdParser = markdownIt();
  mdParser.use(markdownAttr);
  config.setLibrary("md", mdParser);

  config.addPlugin(purgeCssPlugin);
  config.addPlugin(sassPlugin, { sass });
  config.addPlugin(syntaxHighlight);

  config.addFilter(
    "json",
    (o) => `<pre><code>${JSON.stringify(o, null, 2)}</code></pre>`
  );

  config.addFilter("datestamp", (date) => {
    if (date) {
      return dayjs(date).utc().format("D MMMM YYYY");
    }
    return "";
  });
};
