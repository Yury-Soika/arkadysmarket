import type { NextConfig } from "next";

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || process.env.DEMO_BASE_PATH || "").replace(/\/$/, "");

const nextConfig: NextConfig = {
  basePath,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: { root: process.cwd() },
};

export default nextConfig;
