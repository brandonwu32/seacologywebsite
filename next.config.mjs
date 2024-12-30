/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.seacology.org",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
    ],
  },};

export default nextConfig;
