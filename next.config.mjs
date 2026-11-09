/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/contact', destination: '/get-started', permanent: true },
    ]
  },
}
export default nextConfig