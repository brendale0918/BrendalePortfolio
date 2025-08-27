import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // skip ESLint errors
  },
  typescript: {
    ignoreBuildErrors: true, // skip TypeScript errors
  },
  output: "export", // needed for GitHub Pages
  images: {
    unoptimized: true, // fix Next/Image on static export
  },
};

export default nextConfig;
