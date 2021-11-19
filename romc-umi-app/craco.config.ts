// @ts-ignore
const CracoLessPlugin = require('craco-less');
const { whenDev } = require('@craco/craco')
const CracoAlias = require("craco-alias");
const fastRefreshCracoPlugin = require('craco-fast-refresh')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const WebpackBar = require('webpackbar')
/* craco.config.ts */
module.exports = {
  webpack: {
    //....
    plugins: [
      // webpack构建进度条
      new WebpackBar({
        color: "skyblue",
        profile: true
      }),
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
