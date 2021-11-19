// @ts-ignore
const CracoLessPlugin = require('craco-less');
const CracoAlias = require("craco-alias");
/* craco.config.js */
module.exports = {
  webpack: {
    //....
  },
  plugins: [{
    plugin: CracoAlias,
    options: {
      source: "tsconfig",
      // baseUrl SHOULD be specified
      // plugin does not take it from tsconfig
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
  ],
}