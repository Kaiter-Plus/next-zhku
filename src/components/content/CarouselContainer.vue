<template>
  <div class="carousel-container">
    <el-carousel :interval="2500">
      <el-carousel-item v-for="image in images" :key="image.id">
        <img class="carousel-img" :src="image.content" :alt="image.title">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  // 请求
  import require from 'network/index.js'

  export default {
    name: 'CarouselContainer',
    data() {
      return {
        images: null
      }
    },
    created() {
      require('/public/image/carousel').then(({ data }) => {
        this.images = data
      })
    }
  }
</script>

<style lang="less" scoped>
  .carousel-container {
    margin: 0.75rem;
    overflow: hidden;
    @media screen and (max-width: 1200px) {
      width: 100%;
      margin: 0;
    }
    .carousel-img {
      width: 100%;
      height: 100%;
    }
    /deep/ .el-carousel {
      overflow: hidden;
    }
    /deep/ .el-carousel__container {
      @media screen and (max-width: 768px) {
        height: 9.9375rem;
      }
      @media screen and (min-width: 769px) and (max-width: 992px) {
        height: 12.9375rem;
      }
      @media screen and (min-width: 993px) and (max-width: 1200px) {
        height: 14.9375rem;
      }
      @media screen and (min-width: 1201px) and (max-width: 1920px) {
        height: 18.5rem;
      }
      @media screen and (min-width: 1921px) {
        height: 18.9375rem;
      }
    }
    /deep/ .el-carousel__arrow {
      color: #27ae60;
      background-color: rgba(39, 174, 96, 0.11);
      @media screen and (max-width: 1200px) {
        width: 1.25rem;
        height: 1.25rem;
      }
    }
    /deep/ .el-carousel__indicators--horizontal {
      .el-carousel__button {
        background-color: #27ae60;
      }
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
  }
</style>