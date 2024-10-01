/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/raiz-map-app/' : '',
  };
  
  module.exports = nextConfig; // Usa `module.exports` en lugar de `export default`
  