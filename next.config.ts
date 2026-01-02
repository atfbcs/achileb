import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.screenshotone.com",
      },
      {
        protocol: "https",
        hostname: "htmlcsstoimage.com",
      },
      {
        protocol: "https",
        hostname: "**.htmlcsstoimage.com",
      },
    ],
  },
};

export default nextConfig;
