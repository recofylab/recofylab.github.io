/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { 
    unoptimized: true 
  },
  // Descomente a linha abaixo se o repositório não for o principal (ex: username.github.io)
  // basePath: '/site-recofy',
};

module.exports = nextConfig;
