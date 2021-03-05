<template>
  <header class="header">
    <nav-bar :navItems="navItems"></nav-bar>
    <div class="show">
      <el-carousel height="21.875rem">
        <el-carousel-item v-for="image in images" :key="image.id">
          <img class="carousel-img" :src="image.src" alt="images.alt">
        </el-carousel-item>
      </el-carousel>
    </div>
  </header>
</template>

<script>
  // 请求
  import require from 'network/index.js'
  // 组件
  import NavBar from 'components/Home/NavBar.vue'

  export default {
    name: 'VueHeader',
    data() {
      return {
        navItems: null,
        images: null
      }
    },
    created() {
      require('/home').then(res => {
        this.navItems = res.navItems
        this.images = res.images
      }).catch(err => {
        // 错误处理待写
        console.error(err)
      })
    },
    components: {
      NavBar
    }
  }
</script>

<style lang="less" scoped>
  .header {
    .show {
      margin-top: 0.75rem;
      .carousel-img {
        width: 100%;
        height: 21.875rem;
      }
      /deep/ .el-carousel__arrow {
        color: #27ae60;
        background-color: rgba(39, 174, 96, 0.11);
      }
      /deep/ .el-carousel__button {
        background-color: #27ae60;
      }
    }
  }
</style>