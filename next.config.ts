import path from 'node:path';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'node_modules')],
  },
  // Performance-Optimierungen
  compress: process.env.NODE_ENV === 'production',
  productionBrowserSourceMaps: false,
  // Compiler-Optimierungen
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  // Experimental Features
  experimental: {
    optimizePackageImports: ['@salzpate/react-ui'],
    scrollRestoration: false,
  },
};

export default nextConfig;
