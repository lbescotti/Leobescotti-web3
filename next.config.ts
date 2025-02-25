import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Forces Next.js to generate a fully static export
  trailingSlash: true,  // Ensures URLs end with `/` (important for IPFS)
  images: {
    unoptimized: true, // Prevents image optimization that requires a server
  },
};

export default nextConfig;
