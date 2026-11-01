import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Temporary: site is under construction, every route shows the bare background.
  async redirects() {
    return [
      { source: "/projects", destination: "/", permanent: false },
      { source: "/projects/:path*", destination: "/", permanent: false },
      { source: "/books", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
