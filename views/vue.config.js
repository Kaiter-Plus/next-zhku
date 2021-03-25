const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, '../public'),
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        network: '@/network',
        plugins: '@/plugins',
        views: '@/views'
      }
    }
  }
}
