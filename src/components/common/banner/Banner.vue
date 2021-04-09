<template>
  <transition name="fade">
    <div v-show="isShow" class="banner">
      <slot></slot>
      <div class="close" @click="hidden()">
        <i class="iconfont icon-cuowu"></i>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Banner',
    data() {
      return {
        isShow: true
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
      @media screen and (max-width: 991px) {
        width: 1rem;
        line-height: 1rem;
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