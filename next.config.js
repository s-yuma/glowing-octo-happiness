/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/react",
]);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  // any other next.js settings here
});