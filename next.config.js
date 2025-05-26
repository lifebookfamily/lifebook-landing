/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true, // 👈 active le système basé sur /app
  },
}

module.exports = nextConfig
