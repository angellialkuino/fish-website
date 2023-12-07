/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/t2023it2-keepsakes.appspot.com/o/**",
      },
    ],
  },
};

module.exports = nextConfig;
