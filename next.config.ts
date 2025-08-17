import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  devIndicators: false,
  output: 'standalone',
};

export default nextConfig;
