<template>
  <div :class="carouselClasses" @mouseenter.stop="handleMouseEnter" @mouseleave.stop="handleMouseLeave">
    <div class="carousel__container" :style="{ height: height }">
      <transition v-if="arrowDisplay" name="carousel-arrow-left">
        <button type="button" v-show="(arrow === 'always' || hover) && (loop || activeIndex > 0)"
          @mouseenter="handleButtonEnter('left')" @mouseleave="handleButtonLeave"
          @click.stop="throttledArrowClick(activeIndex - 1)" class="carousel__arrow carousel__arrow--left">
          <i class="iconfont icon-zuo"></i>
        </button>
      </transition>
      <transition v-if="arrowDisplay" name="carousel-arrow-right">
        <button type="button" v-show="(arrow === 'always' || hover) && (loop || activeIndex < items.length - 1)"
          @mouseenter="handleButtonEnter('right')" @mouseleave="handleButtonLeave"
          @click.stop="throttledArrowClick(activeIndex + 1)" class="carousel__arrow carousel__arrow--right">
          <i class="iconfont icon-you"></i>
        </button>
      </transition>
      <slot></slot>
    </div>
    <ul v-if="indicatorPosition !== 'none'" :class="indicatorsClasses">
      <li v-for="(item, index) in items" :key="index" :class="[
          'carousel__indicator',
          'carousel__indicator--' + direction,
          { 'is-active': index === activeIndex }]" @mouseenter="throttledIndicatorHover(index)"
        @click.stop="handleIndicatorClick(index)">
        <button class="carousel__button">
          <span v-if="hasLabel">{{ item.label }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  // 节流函数
  import throttle from 'throttle-debounce/throttle';
  // 尺寸大小改变事件
  import { addResizeListener, removeResizeListener } from 'utils/resize-event';

  export default {
    name: 'Carousel',

    props: {
      // 初始化默认展示的下标
      initialIndex: {
        type: Number,
        default: 0
      },
      // 整体高度
      height: String,
      // 设置出发的条件，默认为 hover，可设置为 click
      trigger: {
        type: String,
        default: 'hover'
      },
      // 是否自动滚动
      autoplay: {
        type: Boolean,
        default: true
      },
      // 设置滚动到下一张的事件
      interval: {
        type: Number,
        default: 3000
      },
      // 下方的迭代器位置
      indicatorPosition: String,
      // 是否需要下方的迭代器图标
      indicator: {
        type: Boolean,
        default: true
      },
      // 设置什么时候显示左右箭头，可使用的值有：always hover never， 默认为 hover
      arrow: {
        type: String,
        default: 'hover'
      },
      // 设置轮播图的类型，除了默认值之外，可选的值为 card，卡片化处理
      type: String,
      // 是否循环展示
      loop: {
        type: Boolean,
        default: true
      },
      // 轮播图展示的方向，默认为 horizontal，可设置为 vertical
      direction: {
        type: String,
        default: 'horizontal',
        // 验证传入的值只能为 	horizontal 和 vertical
        validator(val) {
          return ['horizontal', 'vertical'].indexOf(val) !== -1;
        }
      }
    },

    data() {
      return {
        // 初始化数据
        items: [],
        activeIndex: -1,
        containerWidth: 0,
        timer: null,
        hover: false
      };
    },

    computed: {
      // 设置箭头的显示时机以及显示方向
      arrowDisplay() {
        return this.arrow !== 'never' && this.direction !== 'vertical';
      },
      // 当展示的元素的个数大于 1 时才显示下方的迭代器图标
      hasLabel() {
        return this.items.some(item => item.label.toString().length > 0);
      },
      // 设置伦比图的类名
      carouselClasses() {
        const classes = ['carousel', 'carousel--' + this.direction];
        if (this.type === 'card') {
          classes.push('carousel--card');
        }
        return classes;
      },
      // 设置下方迭代器的类名
      indicatorsClasses() {
        const classes = ['carousel__indicators', 'carousel__indicators--' + this.direction];
        if (this.hasLabel) {
          classes.push('carousel__indicators--labels');
        }
        if (this.indicatorPosition === 'outside' || this.type === 'card') {
          classes.push('carousel__indicators--outside');
        }
        return classes;
      }
    },

    watch: {
      // 监视 items 的变化
      items(val) {
        if (val.length > 0) this.setActiveItem(this.initialIndex);
      },
      // 监视 activeIndex 的变化
      activeIndex(val, oldVal) {
        this.resetItemPosition(oldVal);
        if (oldVal > -1) {
          this.$emit('change', val, oldVal);
        }
      },
      // 监视自动播放的变化
      autoplay(val) {
        val ? this.startTimer() : this.pauseTimer();
      },
      // 监视 loop 的变化
      loop() {
        this.setActiveItem(this.activeIndex);
      }
    },

    methods: {
      // 监听 mouseenter 事件
      handleMouseEnter() {
        this.hover = true;
        this.pauseTimer();
      },
      // 监听 mouseleave 事件
      handleMouseLeave() {
        this.hover = false;
        this.startTimer();
      },
      // 处理当展示的元素被手动触发了变化之后的滚动方向
      itemInStage(item, index) {
        const length = this.items.length;
        if (index === length - 1 && item.inStage && this.items[0].active ||
          (item.inStage && this.items[index + 1] && this.items[index + 1].active)) {
          return 'left';
        } else if (index === 0 && item.inStage && this.items[length - 1].active ||
          (item.inStage && this.items[index - 1] && this.items[index - 1].active)) {
          return 'right';
        }
        return false;
      },
      // 处理箭头的覆盖事件
      handleButtonEnter(arrow) {
        if (this.direction === 'vertical') return;
        this.items.forEach((item, index) => {
          if (arrow === this.itemInStage(item, index)) {
            item.hover = true;
          }
        });
      },
      // 处理箭头的离开事件
      handleButtonLeave() {
        if (this.direction === 'vertical') return;
        this.items.forEach(item => {
          item.hover = false;
        });
      },
      // 元素更新事件
      updateItems() {
        this.items = this.$children.filter(child => child.$options.name === 'CarouselItem');
      },
      // 元素重置事件
      resetItemPosition(oldIndex) {
        this.items.forEach((item, index) => {
          item.translateItem(index, this.activeIndex, oldIndex);
        });
      },
      // 设置往返播放
      playSlides() {
        if (this.activeIndex < this.items.length - 1) {
          this.activeIndex++;
        } else if (this.loop) {
          this.activeIndex = 0;
        }
      },
      // 暂停轮播图的自动播放
      pauseTimer() {
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
      },
      // 开始轮播图的播放
      startTimer() {
        if (this.interval <= 0 || !this.autoplay || this.timer) return;
        this.timer = setInterval(this.playSlides, this.interval);
      },
      // 设置激活的元素
      setActiveItem(index) {
        if (typeof index === 'string') {
          const filteredItems = this.items.filter(item => item.name === index);
          if (filteredItems.length > 0) {
            index = this.items.indexOf(filteredItems[0]);
          }
        }
        index = Number(index);
        if (isNaN(index) || index !== Math.floor(index)) {
          console.warn('[Element Warn][Carousel]index must be an integer.');
          return;
        }
        let length = this.items.length;
        const oldIndex = this.activeIndex;
        if (index < 0) {
          this.activeIndex = this.loop ? length - 1 : 0;
        } else if (index >= length) {
          this.activeIndex = this.loop ? 0 : length - 1;
        } else {
          this.activeIndex = index;
        }
        if (oldIndex === this.activeIndex) {
          this.resetItemPosition(oldIndex);
        }
      },
      // 左箭头
      prev() {
        this.setActiveItem(this.activeIndex - 1);
      },
      // 右箭头
      next() {
        this.setActiveItem(this.activeIndex + 1);
      },
      // 处理迭代器的点击事件
      handleIndicatorClick(index) {
        this.activeIndex = index;
      },
      // 处理迭代器的覆盖事件
      handleIndicatorHover(index) {
        if (this.trigger === 'hover' && index !== this.activeIndex) {
          this.activeIndex = index;
        }
      }
    },

    created() {
      // 初始化左右箭头个下方迭代器的节流事件
      this.throttledArrowClick = throttle(300, true, index => {
        this.setActiveItem(index);
      });
      this.throttledIndicatorHover = throttle(300, index => {
        this.handleIndicatorHover(index);
      });
    },

    mounted() {
      // 更新元素
      this.updateItems();
      // 添加事件
      this.$nextTick(() => {
        addResizeListener(this.$el, this.resetItemPosition);
        if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
          this.activeIndex = this.initialIndex;
        }
        this.startTimer();
      });
    },

    beforeDestroy() {
      // 移除事件
      if (this.$el) removeResizeListener(this.$el, this.resetItemPosition);
      this.pauseTimer();
    }
  };
</script>
