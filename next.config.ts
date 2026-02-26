import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // 🔥 REQUIRED for GitHub Pages
  images: {
    unoptimized: true,   // 🔥 REQUIRED for static export
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
