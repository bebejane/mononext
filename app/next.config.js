const sharedDir = '/Users/bebejane/Projects/mononext/shared';
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(["../shared"]);

module.exports = withPlugins([withTM], {reactStrictMode: true});
