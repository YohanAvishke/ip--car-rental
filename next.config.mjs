/** @type {import("next").NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
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
