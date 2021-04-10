module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        network: '@/network',
        plugins: '@/plugins',
        views: '@/views',
        utils: '@/utils',
        mixins: '@/mixins',
        transitions: '@/transitions'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.zhku.edu.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
