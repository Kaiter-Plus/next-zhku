<template>
  <transition name="fade">
    <div v-show="isShow" class="banner">
      <img :src="bannerSrc" alt="banner">
      <div class="close" @click="hidden()">
        <i class="el-icon-close"></i>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Banner',
    props: {
      bannerSrc: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        isShow: true
      }
    },
    created() {
      // 如果没有 banner 图片则直接不显示
      if ('' === this.bannerSrc) {
        this.isShow = false
      }
    },
    methods: {
      hidden() {
        this.isShow = false
      }
    }
  }
</script>

<style lang="less" scoped>
  .banner {
    position: relative;
    img {
      width: 100%;
    }
    .close {
      position: absolute;
      width: 1.6875rem;
      line-height: 1.6875rem;
      background-color: rgba(0, 0, 0, 0.5);
      right: 1rem;
      top: 50%;
      border-radius: 50%;
      transform: translateY(-50%);
      text-align: center;
      color: #f5f5f5;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>