module.exports = {
  publicPath: process.env.BASE_URL,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "/home/melnik/web/vdomkota_vue/src/assets/sass/common/style.scss";`,
      },
    },
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'VDOMKOTA';
      return args;
    });
  },
};
