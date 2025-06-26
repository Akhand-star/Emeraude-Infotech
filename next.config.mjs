/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://emeraudeinfotech.com',
  },
  // Hide Vercel toolbar in production
  experimental: {
    disableOptimizedLoading: true,
  },
}

export default nextConfig
