// craco.config.js

const CracoLessPlugin = require('craco-less')

module.exports = {
  style: {
    css: {
      loaderOptions: {
        modules: {
          mode: 'local',
          localIdentName: '[name]__[local]--[hash:base64:5]',
        },
      },
    },
    less: {
      loaderOptions: {
        lessOptions: {
          modifyVars: {},
          javascriptEnabled: true,
        },
      },
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: { // 配置可以参照webpack的less-loader具体配置
          lessOptions: {
            javascriptEnabled: true // 允许less文件中使用js表达式
          }
        }
      }
    }
  ]
};
