/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "kadinle.com",
      "66.29.142.115",
      "media.kadinle.com",
      "lh3.googleusercontent.com",
      "png.pngtree.com",
      "*",
    ],
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // output: "export",
  i18n: {
    locales: ["en", "fr", "es"],
    defaultLocale: 'en'
  }
};

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.js"
);

module.exports = withNextIntl(nextConfig);
