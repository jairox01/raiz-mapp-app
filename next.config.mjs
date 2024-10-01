/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/raiz-map-app/' : '',
  };
  
export default nextConfig;