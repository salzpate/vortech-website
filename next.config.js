const path = require('path');

module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
  target: 'serverless',
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'node_modules')],
  },
  future: {
    webpack5: true
  }
};
