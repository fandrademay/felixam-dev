import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  devIndicators: false
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

// export default nextConfig;
