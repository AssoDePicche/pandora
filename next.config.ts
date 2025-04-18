import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default nextConfig;

module.exports = {
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "Access-Control-Allow-Methods", value: "GET" },
      ],
    }];
  },
};
