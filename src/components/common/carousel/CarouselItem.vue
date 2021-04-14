<template>
  <div v-show="ready" class="carousel__item" :class="{
      'is-active': active,
      'carousel__item--card': $parent.type === 'card',
      'is-in-stage': inStage,
      'is-hover': hover,
      'is-animating': animating
    }" @click="handleItemClick" :style="itemStyle">
    <div v-if="$parent.type === 'card'" v-show="!active" class="carousel__mask">
    </div>
    <slot></slot>
  </div>
</template>

<script>
  // 为了兼容浏览器添加 transform transition animation 的前缀
  import { autoprefixer } from 'utils/util';

  // 如果时 card 类型，设置卡片的缩放率
  const CARD_SCALE = 0.83;

  export default {
    name: 'CarouselItem',

    props: {
      name: String,
      label: {
        type: [String, Number],
        default: ''
      }
    },

    data() {
      return {
        hover: false,
        translate: 0,
        scale: 1,
        active: false,
        ready: false,
        inStage: false,
        animating: false
      };
    },

    methods: {
      // 处理下一个展示元素的下标
      processIndex(index, activeIndex, length) {
        if (activeIndex === 0 && index === length - 1) {
          return -1;
        } else if (activeIndex === length - 1 && index === 0) {
          return length;
        } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
          return length + 1;
        } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
          return -2;
        }
        return index;
      },
      // 计算卡片的 translate
      calcCardTranslate(index, activeIndex) {
        const parentWidth = this.$parent.$el.offsetWidth;
        if (this.inStage) {
          return parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1) / 4;
        } else if (index < activeIndex) {
          return -(1 + CARD_SCALE) * parentWidth / 4;
        } else {
          return (3 + CARD_SCALE) * parentWidth / 4;
        }
      },
      // 计算 translate
      calcTranslate(index, activeIndex, isVertical) {
        const distance = this.$parent.$el[isVertical ? 'offsetHeight' : 'offsetWidth'];
        return distance * (index - activeIndex);
      },
      // translate 的元素
      translateItem(index, activeIndex, oldIndex) {
        const parentType = this.$parent.type;
        const parentDirection = this.parentDirection;
        const length = this.$parent.items.length;
        if (parentType !== 'card' && oldIndex !== undefined) {
          this.animating = index === activeIndex || index === oldIndex;
        }
        if (index !== activeIndex && length > 2 && this.$parent.loop) {
          index = this.processIndex(index, activeIndex, length);
        }
        if (parentType === 'card') {
          if (parentDirection === 'vertical') {
            console.warn('[Element Warn][Carousel]vertical direction is not supported in card mode');
          }
          this.inStage = Math.round(Math.abs(index - activeIndex)) <= 1;
          this.active = index === activeIndex;
          this.translate = this.calcCardTranslate(index, activeIndex);
          this.scale = this.active ? 1 : CARD_SCALE;
        } else {
          this.active = index === activeIndex;
          const isVertical = parentDirection === 'vertical';
          this.translate = this.calcTranslate(index, activeIndex, isVertical);
        }
        this.ready = true;
      },
      // 处理元素的点击
      handleItemClick() {
        const parent = this.$parent;
        if (parent && parent.type === 'card') {
          const index = parent.items.indexOf(this);
          parent.setActiveItem(index);
        }
      }
    },

    computed: {
      // 容器的方向
      parentDirection() {
        return this.$parent.direction;
      },
      // 初始化样式
      itemStyle() {
        const translateType = this.parentDirection === 'vertical' ? 'translateY' : 'translateX';
        const value = `${translateType}(${this.translate}px) scale(${this.scale})`;
        const style = {
          transform: value
        };
        return autoprefixer(style);
      }
    },

    created() {
      // 执行容器的元素更新方法
      this.$parent && this.$parent.updateItems();
    },

    destroyed() {
      // 执行容器的元素更新方法
      this.$parent && this.$parent.updateItems();
    }
  };
</script>
