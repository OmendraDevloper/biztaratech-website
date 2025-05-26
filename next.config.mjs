/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // Removed basePath and assetPrefix for Hostgator deployment
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
};

export default nextConfig;