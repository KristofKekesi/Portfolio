/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: [
    {
      source: "/rss.xml",
      headers: [
        {"key": "Content-Type", "value": "text/xml"},
      ],
    },
  ],
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
}

module.exports = nextConfig;