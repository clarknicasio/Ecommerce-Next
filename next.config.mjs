import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve('.');
    return config;
  },
  images: {
    //domains: ['via.placeholder.com'], 
    domains: ['firebasestorage.googleapis.com'],
  },
};

export default nextConfig;
