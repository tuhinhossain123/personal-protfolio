/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: { ignoreDuringBuilds: true },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.ibb.co.com',
          port: '',
          pathname: '/**',  // Allows all paths from i.ibb.co
        },
      ],
    },
  };
  
  export default nextConfig;