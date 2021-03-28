<template>
  <div class="carousel-container">
    <el-carousel :interval="2500">
      <!-- <el-carousel-item v-for="image in images" :key="image.id">
          <img class="carousel-img" :src="image.src" alt="images.alt">
        </el-carousel-item> -->
      <el-carousel-item>
        <img class="carousel-img one" src="" alt="1">
      </el-carousel-item>
      <el-carousel-item>
        <img class="carousel-img two" src="" alt="2">
      </el-carousel-item>
      <el-carousel-item>
        <img class="carousel-img three" src="" alt="3">
      </el-carousel-item>
      <el-carousel-item>
        <img class="carousel-img four" src="" alt="4">
      </el-carousel-item>
      <el-carousel-item>
        <img class="carousel-img five" src="" alt="5">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="less" scoped>
  .carousel-container {
    width: 98%;
    margin: 0.75rem;
    overflow: hidden;
    @media screen and (max-width: 1200px) {
      width: 100%;
      margin: 0;
    }
    .carousel-img {
      width: 100%;
      height: 100%;
      // 临时设置
      display: block;
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
        height: 17.9375rem;
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