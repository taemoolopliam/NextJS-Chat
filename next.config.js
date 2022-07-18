const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});

const nextConfig = {
  reactStrictMode: false,
  optimizeFonts: true,
  // distDir: 'build',
  // useFileSystemPublicRoutes: false,
  compiler: {
    styledComponents: true,
    removeConsole: false,
  },
};

module.exports = nextConfig;
