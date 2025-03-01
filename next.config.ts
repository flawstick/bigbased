import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["twitter-api-v2"],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Force App Router
  useFileSystemPublicRoutes: true,
  // Clean output
  output: "standalone",
  distDir: ".next",
};

export default nextConfig;
