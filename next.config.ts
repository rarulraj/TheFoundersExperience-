import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Official TSE artwork uses 90/95 so Next does not coerce to the default 75.
    qualities: [75, 90, 95],
  },
};

export default nextConfig;
