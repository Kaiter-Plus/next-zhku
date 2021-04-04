<template>
  <div id="app">
    <!-- Banner -->
    <banner>
      <img :src="bannerSrc" alt="banner" style="width: 100%">
    </banner>

    <!-- 导航栏 -->
    <nav-bar :navItems="navItems" ref="navBar" />

    <!-- 主要内容区域 -->
    <zk-row class="main-container">
      <zk-col class="content-wrap" :span="24" :lg="{span: 20, offset: 2}">

        <!-- 轮播图 -->
        <carousel-container :images="images" />

        <!-- 主要内容 -->
        <router-view :newsTitles="newsTitles" />

      </zk-col>
    </zk-row>

    <!-- 页脚，授权信息 -->
    <copyright-footer />

    <!-- 返回顶部 -->
    <back-top :visibility-height="100" :right="20">
      <i class="iconfont icon-fanhuidingbu"></i>
    </back-top>

  </div>
</template>

<script>
  // 请求
  import require from 'network/index.js'

  // 组件
  import ZkRow from 'components/common/layout/Row.vue'
  import ZkCol from 'components/common/layout/Col.vue'
  import Banner from 'components/common/banner/Banner.vue'
  import NavBar from 'components/content/NavBar.vue'
  import CarouselContainer from 'components/content/CarouselContainer.vue'
  import CopyrightFooter from 'components/content/CopyrightFooter.vue'
  import BackTop from 'components/common/backtop/BackTop.vue'

  export default {
    name: 'app',
    data() {
      return {
        navItems: [
          {
            name: '首页',
            path: '/'
          },
          {
            name: '学校概况',
            path: '/school-profile'
          },
          {
            name: '机构设置',
            path: '/organization-setup'
          },
          {
            name: '学校新闻',
            path: '/news'
          }
        ],
        bannerSrc: null,
        images: null,
        newsTitles: null
      }
    },
    created() {
      const loading = this.$loading({
        fullscreen: true
      })
      require('/home').then(res => {
        this.bannerSrc = res.bannerSrc
        this.images = res.images
        this.newsTitles = res.newsTitles
        this.$nextTick(() => {
          loading.close()
        })
      }).catch(err => {
        // 错误处理待写
        console.error(err)
      })
    },
    components: {
      ZkRow,
      ZkCol,
      NavBar,
      CarouselContainer,
      CopyrightFooter,
      Banner,
      BackTop
    }
  }
</script>

<style lang="less">
  #app {
    // 背景图片加载失败时的背景色
    background-color: #27ae6060;
    // 默认背景，后面做背景切换可用
    background: url('~assets/img/background/bg0.png');
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .content-wrap {
      margin-top: 0.75rem;
      background: #ffffff60;
      border-radius: 0.2rem;
    }
  }
</style>
