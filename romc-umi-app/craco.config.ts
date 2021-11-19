// @ts-ignore
const CracoLessPlugin = require('craco-less');
const { whenDev } = require('@craco/craco')
const CracoAlias = require("craco-alias");
const fastRefreshCracoPlugin = require('craco-fast-refresh')
/* craco.config.js */
module.exports = {
  webpack: {
    //....
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
