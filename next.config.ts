import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Forces Next.js to generate a static site
  trailingSlash: true,  // Ensures all URLs end with `/` (important for IPFS)
  images: {
    unoptimized: true, // Prevents image optimizations that require a server
  },
};

export default nextConfig;
