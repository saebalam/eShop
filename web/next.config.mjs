/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-**", // You can customize this pattern based on your needs
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/premium_photo-**",
      },
    ],
  },
};

export default nextConfig;
