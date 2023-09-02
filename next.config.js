/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordery.com",
        port: "",
        pathname: "/jackets/**",
      },
    ],
  },
};

module.exports = nextConfig;
