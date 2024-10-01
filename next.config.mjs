/** @type {import('next').NextConfig} */
const nextConfig = {};

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/raiz-map-app/' : '',
};

export default nextConfig;
