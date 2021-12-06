/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['www.pexels.com'],
  },
  env: {
    appKey: 'cbf51611-4cd3-11ec-a3bc-a31e20495f20',
    url: '',

  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value',
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value',
          },
        ],
      },
    ]
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  },
}
