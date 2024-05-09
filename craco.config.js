// craco.config.js
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
};
