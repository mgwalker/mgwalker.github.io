const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const purgeCssPlugin = require("eleventy-plugin-purgecss");
const sassPlugin = require("@grimlink/eleventy-plugin-sass");
const sass = require("sass");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

dayjs.extend(utc);

module.exports = (config) => {
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
