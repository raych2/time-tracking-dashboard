// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    output: 'export',
    basePath: '/time-tracking-dashboard',
    experimental: {
      appDir: true,
    },
  }
  
  module.exports = nextConfig