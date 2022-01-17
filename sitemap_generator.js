const sitemap = require("nextjs-sitemap-generator");
const fs = require("fs");

const BUILD_ID = fs.readFileSync(".next/BUILD_ID").toString();

sitemap({
  baseUrl: "https://www.vortech-force-krammer.de",
  pagesDirectory: __dirname + "/.next/server/pages",
  ignoredExtensions: ["js", "map"],
  ignoredPaths: ["404"],
  ignoreIndexFiles: true,
  nextConfigPath: __dirname + "/next.config.js",
  targetDirectory : 'out/',
});
