/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com']
  },
  env: {
    API_KEY: process.env.BASE_URL,
  }
}

module.exports = nextConfig
