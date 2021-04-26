<template>
  <div id="app" :style="`background: ${background}`" ref="app">

    <!-- Banner -->
    <banner v-if="banner">
      <a :href="banner.href">
        <img :src="banner.content" alt="banner" style="width: 100%">
      </a>
    </banner>

    <!-- 导航栏 -->
    <nav-bar :navItems="navItems" ref="navBar" />

    <!-- 主要内容区域 -->
    <el-row class="main-container">
      <el-col class="content-wrap" :span="24" :lg="{span: 20, offset: 2}" :xl="{span: 18, offset: 3}">

        <!-- 轮播图 -->
        <carousel-container />

        <!-- 主要内容 -->
        <keep-alive exclude="ShowNews">
          <router-view />
        </keep-alive>

      </el-col>
    </el-row>

    <!-- 页脚，授权信息 -->
    <copyright-footer :footer="footer" />

    <!-- 切换主题 -->
    <theme @selectTheme="switchTheme" :right="20" />

    <!-- 返回顶部 -->
    <el-backtop :visibility-height="100" :right="20" :bottom="95">
      <i class="el-icon-caret-top" style="color: #5cc989"></i>
    </el-backtop>

  </div>
</template>

<script>
  // 请求
  import require from 'network/index.js'

  // 组件
  import Banner from 'components/common/banner/Banner.vue'
  import NavBar from 'components/content/NavBar.vue'
  import CarouselContainer from 'components/content/CarouselContainer.vue'
  import CopyrightFooter from 'components/content/CopyrightFooter.vue'
  import Theme from 'components/common/theme/Theme.vue'

  export default {
    name: 'app',
    components: {
      NavBar,
      CarouselContainer,
      CopyrightFooter,
      Banner,
      Theme
    },
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
        banner: null,
        footer: null,
        background: null
      }
    },
    created() {
      // const loading = this.$loading({
      //   fullscreen: true
      // })
      // 获取 banner 图
      require('/public/image/banner').then(({ data }) => {
        this.banner = data
      })
      // 获取页脚
      require('/public/footer').then(({ data }) => {
        this.footer = data
      })
      require('/home').then(res => {
        this.bannerSrc = res.bannerSrc
        this.images = res.images
        this.newsTitles = res.newsTitles
        this.friendLink = res.friendLink
        this.visits = res.visits
        // 如果已经取到数据，关闭加载动画
        // const timer = setInterval(() => {
        //   if (this.bannerSrc) {
        //     loading.close()
        //     clearInterval(timer)
        //   }
        // }, 500)
      }).catch(err => {
        // 错误处理待写
        console.error(err)
      })

      // 在页面加载时读取 localStorage 里的主题信息
      if (localStorage.getItem('theme')) {
        this.background = localStorage.getItem('theme')
      }

      // 在页面加载时读取 sessionStorage 里的状态信息
      if (sessionStorage.getItem('state')) {
        this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('state'))))
      }

      // 页面刷新时将 state 数据存储到 sessionStorage 中
      window.addEventListener('pagehide', () => {
        sessionStorage.setItem('state', JSON.stringify(this.$store.state))
      })
    },
    mounted() {
      // 如果是特殊节日，切换背景为特定的图片
      const date = new Date()
      const month = `${date.getMonth() + 1}`.padStart(2, '0')
      const day = `${date.getDate()}`.padStart(2, '0')
      const month_day = `${month}.${day}`
      switch (month_day) {
        case '04.23': {
          this.$refs.app.style = `background: url(./img/background/${month_day}.jpeg) no-repeat fixed 0 0 / cover`
          break
        }
        case '07.01': {
          this.$refs.app.style = `background: url(./img/background/${month_day}.jpeg) no-repeat fixed 0 0 / cover`
          break
        }
        case '08.01': {
          this.$refs.app.style = `background: url(./img/background/${month_day}.jpeg) no-repeat fixed 0 0 / cover`
          break
        }
        case '10.01': {
          this.$refs.app.style = `background: url(./img/background/${month_day}.jpeg) no-repeat fixed 0 0 / cover`
          break
        }
        default: {
          break
        }
      }
    },
    methods: {
      // 切换主题
      switchTheme(background) {
        this.background = background
        this.storageTheme(background)
      },
      // 保存主题到本地
      storageTheme(background) {
        localStorage.setItem('theme', background)
      }
    }
  }
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #81ffef;
    .content-wrap {
      margin-top: 0.75rem;
      background: #ffffff60;
      border-radius: 0.2rem;
    }
  }
</style>
