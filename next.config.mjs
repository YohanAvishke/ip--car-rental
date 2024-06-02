/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.carlogos.org"
      },
      {
        protocol: "https",
        hostname: "classicthrottleshop.com"
      },
      {
        protocol: "https",
        hostname: "drive.google.com"
      }
    ]
  }
}

export default nextConfig
