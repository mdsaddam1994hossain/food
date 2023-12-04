/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'w7.pngwing.com',
        port: '',
        pathname: 'https://w7.pngwing.com/pngs/56/985/png-transparent-pizza-margherita-sushi-pizza-pizza-delivery-pizza-thumbnail.png',
      },
    ],
  },
}

module.exports = nextConfig
