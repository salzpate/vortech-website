const sitemap = require("nextjs-sitemap-generator");
const fs = require("fs");

const BUILD_ID = fs.readFileSync(".next/BUILD_ID").toString();

sitemap({
  baseUrl: "https://vortech-force-krammer.de",
  pagesDirectory: __dirname + "/.next/serverless/pages",
  targetDirectory: "public/",
  ignoredExtensions: ["js", "map"],
  ignoredPaths: ["404"],
  ignoreIndexFiles: true,
  nextConfigPath: __dirname + "/next.config.js",
  targetDirectory : 'out/',
});
