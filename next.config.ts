import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Produce a fully static export suitable for simple hosting
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
