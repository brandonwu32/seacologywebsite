/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.seacology.org",
      },
    ],
  },};

export default nextConfig;
