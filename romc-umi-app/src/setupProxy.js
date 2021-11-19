const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', createProxyMiddleware({
      target: 'http://192.168.3.99:64399/',
      changeOrigin: true,
    })
  )
}