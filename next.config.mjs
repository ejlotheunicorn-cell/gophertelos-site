/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Serve the interactive sample (a standalone HTML app in /public) at a clean URL.
      { source: '/demo', destination: '/demo.html' },
    ];
  },
};

export default nextConfig;
