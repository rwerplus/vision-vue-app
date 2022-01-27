const CompressionPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const path = require('path');
const WebpackBar = require("webpackbar");
const { externals, cdn } = require("./cdn");

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    host: '192.168.3.245',
    https: true,
    port: '8090',
    proxy: {
      '/api': {
        target: 'http://192.168.3.33:8090',
        changeOrigin: true,
        ws: true,
        hot: true,
        pathRewrite: { '^/api': '' }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
        .set("@", resolve("src"))
        .set("@assets", resolve("src/assets"))
        .set("@components", resolve("src/components"))
        .set("@views", resolve("src/views"));
    // if (process.env.NODE_ENV === 'production') {
    //   config.externals(externals)
    //   // 通过 html-webpack-plugin 将 cdn 注入到 index.html 之中
    //   config.plugin('html')
    //       .tap(args => {
    //         args[ 0 ].cdn = cdn
    //         return args
    //       })
    // } else {
    // }
    config.module
        .rule('svg')
        .exclude.add(resolve('src/assets/svg'))
        .end();
    config.module
        .rule('svg-loader')
        .test(/\.svg$/)
        .include.add(resolve('src/assets/svg'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
        .end();
  },
  configureWebpack: config => {
    config.cache = {
      type: "filesystem", // 使用文件缓存
    }
    config.plugins.push(
        new WebpackBar()
    )
    if (process.env.NODE_ENV === 'production') {
      // 生产环境
      config.plugins.push(
          new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
            threshold: 10240,
            minRatio: 0.8,
          }),
      )
    } else {
      // 开发环境
      config.devtool  = "eval-cheap-module-source-map"
    }

  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
}
