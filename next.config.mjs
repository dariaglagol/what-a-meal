/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.buzzfeed.com',
        port: '',
        pathname: '/*/**',
      },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/*/**',
      },
    ],
  },
};

export default nextConfig;
