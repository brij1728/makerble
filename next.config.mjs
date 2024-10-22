/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        pathname: '/**', // Optional: This allows all paths under the hostname
      },
    ],
  },
};

export default nextConfig;
