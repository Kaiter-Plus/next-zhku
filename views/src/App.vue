<template>
  <div id="app">
    <nav-bar :navItems="navItems"></nav-bar>
    <el-row class="main-container">
      <el-col class="content-wrap" :span="24" :lg="{span: 20, offset: 2}">
        <router-view></router-view>
      </el-col>
    </el-row>
    <copyright-footer />
  </div>
</template>

<script>
  // 请求
  // import require from 'network/index.js'
  // 组件
  import NavBar from 'components/NavBar/NavBar.vue'
  import CopyrightFooter from 'components/CopyrightFooter/CopyrightFooter.vue'

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
            path: ''
          },
          {
            name: '人才招聘',
            path: ''
          },
          {
            name: '教育教学',
            path: ''
          },
          {
            name: '科学研究',
            path: ''
          },
          {
            name: '招生就业',
            path: ''
          },
          {
            name: '图书馆',
            path: ''
          },
          {
            name: '纪念馆',
            path: ''
          },
          {
            name: '雅思托福',
            path: ''
          },
          {
            name: '校友与基金',
            path: ''
          },
          {
            name: '公共服务',
            path: ''
          },
        ]
        // images: null
      }
    },
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
      NavBar,
      CopyrightFooter
    }
  }
</script>

<style lang="less">
  #app {
    background-color: #f6f6f6;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .content-wrap {
      margin-top: 0.75rem;
      background: #fff;
      overflow: hidden;
      border-radius: 0.2rem;
    }
  }
</style>
