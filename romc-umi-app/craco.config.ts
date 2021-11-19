// @ts-ignore
const CracoLessPlugin = require('craco-less');
const { whenDev } = require('@craco/craco')
const CracoAlias = require("craco-alias");
const fastRefreshCracoPlugin = require('craco-fast-refresh')
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");
const CircularDependencyPlugin = require('circular-dependency-plugin')
const WebpackBar = require('webpackbar')
/* craco.config.ts */
module.exports = {
  style: {
    sass: {
      loaderOptions: {
        test: /\.scss$/,
        // 注意:use 的别名 是 loaders。下面3个加载的执行顺序是 3 2 1
        use: [
          // 1.不用传递参数可以简写
          'style-loader',
          {
            loader: 'css-loader',
            // 2.给css-loader传递参数
            options: {
              url: true,
              import: true
            }
          },
          // 3.使用sass加载器
          'sass-loader'
        ]
      }
    }
  },
  webpack: {
    //....
    plugins: [
      // webpack构建进度条
      new WebpackBar({
        color: "pink",
        profile: true
      }),
      // 查看打包的进度
      new SimpleProgressWebpackPlugin(),
      // // 新增模块循环依赖检测插件
      ...whenDev(
          () => [
            new CircularDependencyPlugin({
              exclude: /node_modules/,
              include: /src/,
              failOnError: true,
              allowAsyncCycles: false,
              cwd: process.cwd()
            }),
          ], []
      ),
    ]
  },
  plugins: [{
    plugin: CracoAlias,
    options: {
      source: "tsconfig",
      baseUrl: "./src",
      // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
      tsConfigPath: "./tsconfig.extend.json"
    }
  },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1DA57A'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
    ...whenDev(
        () => [
          {
            plugin: fastRefreshCracoPlugin,
          }
        ]
    )
  ],
}
