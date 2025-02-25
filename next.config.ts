import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Tells Next.js to export the app as static files
  trailingSlash: true, // Ensures URLs end with a slash
  images: {
    unoptimized: true, // Avoid image optimization issues when deploying to IPFS
  },
};

export default nextConfig;
