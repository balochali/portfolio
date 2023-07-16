const withTM = require('next-transpile-modules')(['tailwindcss']);

module.exports = withTM({
  reactStrictMode: true,
});