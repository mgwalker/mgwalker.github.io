import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import purgeCssPlugin from "eleventy-plugin-purgecss";
import sassPlugin from "@grimlink/eleventy-plugin-sass";
import sass from "sass";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import markdownIt from "markdown-it";
import markdownAttr from "markdown-it-attrs";

dayjs.extend(utc);

export default (config) => {
  const mdParser = markdownIt({
    html: true,
  });
  mdParser.use(markdownAttr);
  config.setLibrary("md", mdParser);

  config.addPlugin(purgeCssPlugin);
  config.addPlugin(sassPlugin, { sass });
  config.addPlugin(syntaxHighlight);

  config.addFilter(
    "json",
    (o) => `<pre><code>${JSON.stringify(o, null, 2)}</code></pre>`,
  );

  config.addFilter("datestamp", (date) => {
    if (date) {
      return dayjs(date).utc().format("D MMMM YYYY");
    }
    return "";
  });
};
