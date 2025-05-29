/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const isVercel = process.env.VERCEL === '1';

const nextConfig = {
  // Removed basePath and assetPrefix for deployment
  // as we'll be deploying to the root domain
  /** output: "export", // Disabled to allow API routes and NextAuth.js*/
  images: {
    unoptimized: true,
  },
  // Skip API routes during build to prevent MongoDB connection issues
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  // Vercel-specific configurations
  typescript: {
    // Temporarily ignore TypeScript errors during build for production
    ignoreBuildErrors: isProd && isVercel,
  },
  eslint: {
    // Temporarily ignore ESLint errors during build for production
    ignoreDuringBuilds: isProd && isVercel,
  },
};

export default nextConfig;