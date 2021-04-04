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
  }
}
