import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export',
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'node_modules')],
  },
};

export default nextConfig;
