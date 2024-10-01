/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/raiz-mapp-app/' : '',
};

module.exports = nextConfig;