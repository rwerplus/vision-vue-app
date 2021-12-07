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
  /**
   * 为静态资源添加路径前缀并支持发布到 CDN
   */
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://cdn.mydomain.com' : '',
  async headers() {
    return [{
      source: '/',
      headers: [{
          key: 'x-custom-header',
          value: 'my custom header value',
        },
        {
          key: 'x-another-custom-header',
          value: 'my other custom header value',
        },
      ],
    }, ]
  },
  webpack: (config, {
    buildId,
    dev,
    isServer,
    defaultLoaders,
    webpack
  }) => {
    // Important: return the modified config
    return config
  },
}
