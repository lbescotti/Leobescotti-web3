import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // Ensures paths end with `/`
  images: { unoptimized: true }, // Avoids Next.js image optimization
  basePath: "/static", // Makes Next.js serve pages from `/static`
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
  async redirects() {
    return [
      {
        source: "/",
        destination: "/static", // Redirect root to `/static`
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


