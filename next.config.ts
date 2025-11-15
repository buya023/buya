import { join } from "path";

const nextConfig = {
  experimental: { turbo: true },
  webpack: (config) => {
    config.resolve.alias["@"] = join(__dirname);
    return config;
  },
};

export default nextConfig;
