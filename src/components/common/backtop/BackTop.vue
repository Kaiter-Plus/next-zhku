<template>
  <transition name="fade">
    <div v-if="visible" @click.stop="handleClick" :style="{'right': styleRight, 'bottom': styleBottom}" class="backtop">
      <slot>
        🚀
      </slot>
    </div>
  </transition>
</template>

<script>
  // 导入节流函数
  import throttle from 'throttle-debounce/throttle';

  // easeInOut动画
  const cubic = value => Math.pow(value, 3);
  const easeInOutCubic = value => value < 0.5
    ? cubic(value * 2) / 2
    : 1 - cubic((1 - value) * 2) / 2;

  export default {
    name: 'Backtop',

    props: {
      // 可见高度
      visibilityHeight: {
        type: Number,
        default: 200
      },
      // 出发滚动的对象
      target: [String],
      // 固定定位下的右边位置
      right: {
        type: Number,
        default: 40
      },
      // 固定定位下的下边位置
      bottom: {
        type: Number,
        default: 40
      }
    },

    data() {
      return {
        // 保存触发滚动的对象
        el: null,
        // 触发滚动的容器
        container: null,
        // 元素是否可见
        visible: false
      };
    },

    computed: {
      // 固定定位下的右边位置字符串
      styleBottom() {
        return `${this.bottom}px`;
      },
      // 固定定位下的下边位置字符串
      styleRight() {
        return `${this.right}px`;
      }
    },

    mounted() {
      // 初始化
      this.init();
      // 对滚动监听函数做节流处理
      this.throttledScrollHandler = throttle(300, this.onScroll);
      // 注册监听滚动事件
      this.container.addEventListener('scroll', this.throttledScrollHandler);
    },

    methods: {
      // 初始化
      init() {
        // 默认的滚动容器为 document
        this.container = document;
        // 默认的滚动元素为 html
        this.el = document.documentElement;
        // 如果传入了 target，则把 target 设置为需要滚动的元素
        if (this.target) {
          this.el = document.querySelector(this.target);
          // 如果不存在传入的 target 元素，则抛出一个错误，否则将滚动容器设置为该元素
          if (!this.el) {
            throw new Error(`target is not existed: ${this.target}`);
          }
          this.container = this.el;
        }
      },
      // 初始化滚动函数
      onScroll() {
        const scrollTop = this.el.scrollTop;
        this.visible = scrollTop >= this.visibilityHeight;
      },
      // 处理点击事件
      handleClick(e) {
        this.scrollToTop();
        this.$emit('click', e);
      },
      // 滚动到顶部的具体实现
      scrollToTop() {
        const el = this.el;
        // 滚动的开始时间
        const beginTime = Date.now();
        // 滚动的开始高度
        const beginValue = el.scrollTop;
        // 使用 60 fps 的速率执行滚动到顶部的动画
        const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16));
        const frameFunc = () => {
          // 500 毫秒内滚动到顶部
          const progress = (Date.now() - beginTime) / 500;
          if (progress < 1) {
            el.scrollTop = beginValue * (1 - easeInOutCubic(progress));
            rAF(frameFunc);
          } else {
            el.scrollTop = 0;
          }
        };
        rAF(frameFunc);
      }
    },

    beforeDestroy() {
      // 组件销毁之前清除滚动时间，防止再次组件创建时重复注册事件出现 bug
      this.container.removeEventListener('scroll', this.throttledScrollHandler);
    }
  };
</script>

<style lang="less" scoped>
  .fade-enter-active,
  .fade-leave-active {
    opacity: 1;
    transition: opacity 0.2s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
