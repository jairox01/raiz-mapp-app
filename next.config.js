/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/raiz-mapp-app/' : '',
};

module.exports = nextConfig;