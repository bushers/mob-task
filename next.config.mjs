/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.mob-cdn.co.uk",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
