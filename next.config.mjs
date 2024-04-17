import million from 'million/compiler'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.TARGET}/:path*`,
      },
    ];
  },
  compiler: {},
  trailingSlash: false,
  images: {
    deviceSizes: [390, 435, 768, 1024, 1280]
  },
};

const millionConfig = {
  auto: {
    rsc: true
  }
}

const config = million.next(nextConfig, millionConfig)

export default config;
