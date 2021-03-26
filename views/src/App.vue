<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <!-- <nav-bar :navItems="navItems"></nav-bar> -->
  </div>
</template>

<script>
  // 请求
  // import require from 'network/index.js'
  // 组件
  import NavBar from 'components/NavBar/NavBar.vue'

  export default {
    name: 'app',
    // data() {
    //   return {
    //     navItems: null,
    //     images: null
    //   }
    // },
    // created() {
    //   require('/home').then(res => {
    //     this.navItems = res.navItems
    //     this.images = res.images
    //   }).catch(err => {
    //     // 错误处理待写
    //     console.error(err)
    //   })
    // },
    components: {
      NavBar
    }
  }
</script>

<style lang="less">
  #app {
    background-color: #f6f6f6;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
