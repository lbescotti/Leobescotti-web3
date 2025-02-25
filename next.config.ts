import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // Ensures paths end with `/`
  images: { unoptimized: true }, // Avoids Next.js image optimization
  headers: async () => {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Content-Type",
            value: "text/html",
          },
          {
            key: "Content-Disposition",
            value: 'inline; filename="index.html"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;


