/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: { ignoreDuringBuilds: true },
    images: {
      domains: ["i.ibb.co", "images.domains", "lh3.googleusercontent.com"],
    },
  };
  
  export default nextConfig;