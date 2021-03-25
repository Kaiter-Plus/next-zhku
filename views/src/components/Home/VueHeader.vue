<template>
  <header class="main">
    <div class="content-wrap">
      <div class="carousel-container">
        <el-carousel height="21.875rem">
          <!-- <el-carousel-item v-for="image in images" :key="image.id">
          <img class="carousel-img" :src="image.src" alt="images.alt">
        </el-carousel-item> -->
          <el-carousel-item>
            <div class="carousel-img one"></div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="carousel-img two"></div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="carousel-img three"></div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="carousel-img four"></div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="carousel-img five"></div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'VueHeader',
    props: {
      images: Array
    }
  }
</script>

<style lang="less" scoped>
  .main {
    .content-wrap {
      margin: 0 auto;
      padding-bottom: 32px;
      background: #fff;
      @media screen and (max-width: 1280px) {
        width: 1004px;
      }
      @media screen and (min-width: 1281px) and (max-width: 1439px) {
        width: 1004px;
      }
      @media screen and (min-width: 1440px) and (max-width: 1919px) {
        width: 1232px;
      }
      @media screen and (min-width: 1920px) {
        width: 1692px;
      }
    }
    .carousel-container {
      margin-top: 0.75rem;
      .carousel-img {
        width: 100%;
        height: 21.875rem;
      }
      .one {
        background-color: red;
      }
      .two {
        background-color: yellow;
      }
      .three {
        background-color: blue;
      }
      .four {
        background-color: green;
      }
      .five {
        background-color: gray;
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