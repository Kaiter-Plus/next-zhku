module.exports = {
  outputDir: __dirname + '/../public',
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
