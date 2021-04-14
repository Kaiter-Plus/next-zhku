<template>
  <div class="image">
    <slot v-if="loading" name="placeholder">
      <div class="image__placeholder"></div>
    </slot>
    <slot v-else-if="error" name="error">
      <div class="image__error">{{ t('el.image.error') }}</div>
    </slot>
    <img v-else class="image__inner" v-bind="$attrs" v-on="$listeners" @click="clickHandler" :src="src"
      :style="imageStyle" :class="{ 'image__inner--center': alignCenter, 'image__preview': preview }">
    <template v-if="preview">
      <image-viewer :z-index="zIndex" :initial-index="imageIndex" v-if="showViewer" :on-close="closeViewer"
        :url-list="previewSrcList" />
    </template>
  </div>
</template>

<script>
  // 图片放大展示的容器
  import ImageViewer from './ImageViewer.vue';
  // 导入注册事件、取消事件、获取滚动容器、一个元素是否在指定的容器内的方法
  import { on, off, getScrollContainer, isInContainer } from '@/utils/dom';
  // 导入判断一个变量的类型方法
  import { isString, isHtmlElement } from '@/utils/types';
  // 导入节流函数
  import throttle from 'throttle-debounce/throttle';

  // 是否支持 object-fit 属性
  const isSupportObjectFit = () => document.documentElement.style.objectFit !== undefined;
  // 初始化 object-fit 的值
  const ObjectFit = {
    NONE: 'none',
    CONTAIN: 'contain',
    COVER: 'cover',
    FILL: 'fill',
    SCALE_DOWN: 'scale-down'
  };

  let prevOverflow = '';

  export default {
    name: 'Imager',

    inheritAttrs: false,

    components: {
      ImageViewer
    },

    props: {
      src: String,
      fit: String,
      lazy: Boolean,
      scrollContainer: {},
      previewSrcList: {
        type: Array,
        default: () => []
      },
      zIndex: {
        type: Number,
        default: 2000
      }
    },

    data() {
      return {
        loading: true,
        error: false,
        show: !this.lazy,
        imageWidth: 0,
        imageHeight: 0,
        showViewer: false
      };
    },

    computed: {
      imageStyle() {
        const { fit } = this;
        if (!this.$isServer && fit) {
          return isSupportObjectFit()
            ? { 'object-fit': fit }
            : this.getImageStyle(fit);
        }
        return {};
      },
      alignCenter() {
        return !this.$isServer && !isSupportObjectFit() && this.fit !== ObjectFit.FILL;
      },
      preview() {
        const { previewSrcList } = this;
        return Array.isArray(previewSrcList) && previewSrcList.length > 0;
      },
      imageIndex() {
        let previewIndex = 0;
        const srcIndex = this.previewSrcList.indexOf(this.src);
        if (srcIndex >= 0) {
          previewIndex = srcIndex;
        }
        return previewIndex;
      }
    },

    watch: {
      src(val) {
        this.show && this.loadImage();
      },
      show(val) {
        val && this.loadImage();
      }
    },

    mounted() {
      if (this.lazy) {
        this.addLazyLoadListener();
      } else {
        this.loadImage();
      }
    },

    beforeDestroy() {
      this.lazy && this.removeLazyLoadListener();
    },

    methods: {
      loadImage() {
        if (this.$isServer) return;

        // 状态重置
        this.loading = true;
        this.error = false;

        const img = new Image();
        img.onload = e => this.handleLoad(e, img);
        img.onerror = this.handleError.bind(this);

        // 绑定 html 属性
        Object.keys(this.$attrs)
          .forEach((key) => {
            const value = this.$attrs[key];
            img.setAttribute(key, value);
          });
        img.src = this.src;
      },
      // 处理加载中
      handleLoad(e, img) {
        this.imageWidth = img.width;
        this.imageHeight = img.height;
        this.loading = false;
        this.error = false;
      },
      // 处理加载失败
      handleError(e) {
        this.loading = false;
        this.error = true;
        this.$emit('error', e);
      },
      // 处理懒加载
      handleLazyLoad() {
        if (isInContainer(this.$el, this._scrollContainer)) {
          this.show = true;
          this.removeLazyLoadListener();
        }
      },
      // 添加懒加载监听函数
      addLazyLoadListener() {
        if (this.$isServer) return;

        const { scrollContainer } = this;
        let _scrollContainer = null;

        if (isHtmlElement(scrollContainer)) {
          _scrollContainer = scrollContainer;
        } else if (isString(scrollContainer)) {
          _scrollContainer = document.querySelector(scrollContainer);
        } else {
          _scrollContainer = getScrollContainer(this.$el);
        }

        if (_scrollContainer) {
          this._scrollContainer = _scrollContainer;
          this._lazyLoadHandler = throttle(200, this.handleLazyLoad);
          on(_scrollContainer, 'scroll', this._lazyLoadHandler);
          this.handleLazyLoad();
        }
      },
      // 移除懒加载监听函数
      removeLazyLoadListener() {
        const { _scrollContainer, _lazyLoadHandler } = this;

        if (this.$isServer || !_scrollContainer || !_lazyLoadHandler) return;

        off(_scrollContainer, 'scroll', _lazyLoadHandler);
        this._scrollContainer = null;
        this._lazyLoadHandler = null;
      },

      // 对不兼容 object-fit 的浏览器做出兼容处理
      getImageStyle(fit) {
        const { imageWidth, imageHeight } = this;
        const {
          clientWidth: containerWidth,
          clientHeight: containerHeight
        } = this.$el;

        if (!imageWidth || !imageHeight || !containerWidth || !containerHeight) return {};

        const imageAspectRatio = imageWidth / imageHeight;
        const containerAspectRatio = containerWidth / containerHeight;

        if (fit === ObjectFit.SCALE_DOWN) {
          const isSmaller = imageWidth < containerWidth && imageHeight < containerHeight;
          fit = isSmaller ? ObjectFit.NONE : ObjectFit.CONTAIN;
        }

        switch (fit) {
          case ObjectFit.NONE:
            return { width: 'auto', height: 'auto' };
          case ObjectFit.CONTAIN:
            return (imageAspectRatio < containerAspectRatio) ? { width: 'auto' } : { height: 'auto' };
          case ObjectFit.COVER:
            return (imageAspectRatio < containerAspectRatio) ? { height: 'auto' } : { width: 'auto' };
          default:
            return {};
        }
      },
      // 处理点击事件
      clickHandler() {
        // 如果只有一张，不做处理
        if (!this.preview) {
          return;
        }
        // 循环展示 srcList 的图片
        prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        this.showViewer = true;
      },
      // 处理关闭 Viewer 的事件
      closeViewer() {
        document.body.style.overflow = prevOverflow;
        this.showViewer = false;
      }
    }
  };
</script>
