module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        api: '@/api',
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
