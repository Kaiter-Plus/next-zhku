<template>
  <div class="carousel-container">
    <carousel :interval="2500">
      <carousel-item v-for="image in images" :key="image.id">
        <img class="carousel-img" :src="image.src" :alt="image.alt">
      </carousel-item>
    </carousel>
  </div>
</template>

<script>
  // 导入组件
  import Carousel from 'components/common/carousel/Carousel.vue'
  import CarouselItem from 'components/common/carousel/CarouselItem.vue'
  export default {
    name: 'CarouselContainer',
    props: {
      images: Array
    },
    components: {
      Carousel,
      CarouselItem
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
    /deep/ .carousel {
      overflow: hidden;
    }
    /deep/ .carousel__container {
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
    /deep/ .carousel__arrow {
      color: #27ae60;
      background-color: rgba(39, 174, 96, 0.11);
      @media screen and (max-width: 1200px) {
        width: 1.25rem;
        height: 1.25rem;
      }
    }
    /deep/ .carousel__indicators--horizontal {
      .carousel__button {
        background-color: #27ae60;
      }
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
  }
</style>