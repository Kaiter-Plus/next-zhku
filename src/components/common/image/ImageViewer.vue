<template>
  <transition name="viewer-fade">
    <div tabindex="-1" ref="image-viewer__wrapper" class="image-viewer__wrapper" :style="{ 'z-index': zIndex }">
      <div class="image-viewer__mask" @click.self="handleMaskClick"></div>
      <!-- CLOSE -->
      <span class="image-viewer__btn image-viewer__close" @click="hide">
        <i class="iconfont icon-cuowu"></i>
      </span>
      <!-- ARROW -->
      <template v-if="!isSingle">
        <span class="image-viewer__btn image-viewer__prev" :class="{ 'is-disabled': !infinite && isFirst }"
          @click="prev">
          <i class="iconfont icon-zuo" />
        </span>
        <span class="image-viewer__btn image-viewer__next" :class="{ 'is-disabled': !infinite && isLast }"
          @click="next">
          <i class="iconfont icon-you" />
        </span>
      </template>
      <!-- ACTIONS -->
      <div class="image-viewer__btn image-viewer__actions">
        <div class="image-viewer__actions__inner">
          <i class="iconfont icon-suoxiao" @click="handleActions('zoomOut')"></i>
          <i class="iconfont icon-fangda" @click="handleActions('zoomIn')"></i>
          <i class="image-viewer__actions__divider"></i>
          <i :class="mode.icon" @click="toggleMode"></i>
          <i class="image-viewer__actions__divider"></i>
          <i class="iconfont icon-nizhuan" @click="handleActions('anticlocelise')"></i>
          <i class="iconfont icon-shunzhuan" @click="handleActions('clocelise')"></i>
        </div>
      </div>
      <!-- CANVAS -->
      <div class="image-viewer__canvas">
        <img v-for="(url, i) in urlList" v-if="i === index" ref="img" class="image-viewer__img" :key="url"
          :src="currentImg" :style="imgStyle" @load="handleImgLoad" @error="handleImgError"
          @mousedown="handleMouseDown">
      </div>
    </div>
  </transition>
</template>

<script>
  // 导入注册事件和关闭事件函数
  import { on, off } from '@/utils/dom';
  // 导入 使用 requestAnimatioinFrame 来进行节流操作 判断时候时 firefox 浏览器
  import { rafThrottle, isFirefox } from '@/utils/util';

  // 初始化图标
  const Mode = {
    CONTAIN: {
      name: 'contain',
      icon: 'iconfont icon-zhankai'
    },
    ORIGINAL: {
      name: 'original',
      icon: 'iconfont icon-huanyuan'
    }
  };

  // 鼠标滚轮事件的事件名
  const mousewheelEventName = isFirefox() ? 'DOMMouseScroll' : 'mousewheel';

  export default {
    name: 'ImageViewer',

    props: {
      urlList: {
        type: Array,
        default: () => []
      },
      zIndex: {
        type: Number,
        default: 2000
      },
      onSwitch: {
        type: Function,
        default: () => { }
      },
      onClose: {
        type: Function,
        default: () => { }
      },
      initialIndex: {
        type: Number,
        default: 0
      },
      appendToBody: {
        type: Boolean,
        default: true
      },
      maskClosable: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        index: this.initialIndex,
        isShow: false,
        infinite: true,
        loading: false,
        mode: Mode.CONTAIN,
        transform: {
          scale: 1,
          deg: 0,
          offsetX: 0,
          offsetY: 0,
          enableTransition: false
        }
      };
    },
    computed: {
      isSingle() {
        return this.urlList.length <= 1;
      },
      isFirst() {
        return this.index === 0;
      },
      isLast() {
        return this.index === this.urlList.length - 1;
      },
      currentImg() {
        return this.urlList[this.index];
      },
      imgStyle() {
        const { scale, deg, offsetX, offsetY, enableTransition } = this.transform;
        const style = {
          transform: `scale(${scale}) rotate(${deg}deg)`,
          transition: enableTransition ? 'transform .3s' : '',
          'margin-left': `${offsetX}px`,
          'margin-top': `${offsetY}px`
        };
        if (this.mode === Mode.CONTAIN) {
          style.maxWidth = style.maxHeight = '100%';
        }
        return style;
      }
    },
    watch: {
      index: {
        handler: function (val) {
          this.reset();
          this.onSwitch(val);
        }
      },
      currentImg(val) {
        this.$nextTick(_ => {
          const $img = this.$refs.img[0];
          if (!$img.complete) {
            this.loading = true;
          }
        });
      }
    },
    methods: {
      hide() {
        this.deviceSupportUninstall();
        this.onClose();
      },
      deviceSupportInstall() {
        // 监听键盘点击事件
        this._keyDownHandler = rafThrottle(e => {
          const keyCode = e.keyCode;
          switch (keyCode) {
            // ESC
            case 27:
              this.hide();
              break;
            // SPACE
            case 32:
              this.toggleMode();
              break;
            // LEFT_ARROW
            case 37:
              this.prev();
              break;
            // UP_ARROW
            case 38:
              this.handleActions('zoomIn');
              break;
            // RIGHT_ARROW
            case 39:
              this.next();
              break;
            // DOWN_ARROW
            case 40:
              this.handleActions('zoomOut');
              break;
          }
        });
        // 监听鼠标滚轮事件
        this._mouseWheelHandler = rafThrottle(e => {
          const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
          if (delta > 0) {
            this.handleActions('zoomIn', {
              zoomRate: 0.015,
              enableTransition: false
            });
          } else {
            this.handleActions('zoomOut', {
              zoomRate: 0.015,
              enableTransition: false
            });
          }
        });
        on(document, 'keydown', this._keyDownHandler);
        on(document, mousewheelEventName, this._mouseWheelHandler);
      },
      // 移除事件
      deviceSupportUninstall() {
        off(document, 'keydown', this._keyDownHandler);
        off(document, mousewheelEventName, this._mouseWheelHandler);
        this._keyDownHandler = null;
        this._mouseWheelHandler = null;
      },
      handleImgLoad(e) {
        this.loading = false;
      },
      handleImgError(e) {
        this.loading = false;
        e.target.alt = '加载失败';
      },
      handleMouseDown(e) {
        if (this.loading || e.button !== 0) return;

        const { offsetX, offsetY } = this.transform;
        const startX = e.pageX;
        const startY = e.pageY;
        this._dragHandler = rafThrottle(ev => {
          this.transform.offsetX = offsetX + ev.pageX - startX;
          this.transform.offsetY = offsetY + ev.pageY - startY;
        });
        on(document, 'mousemove', this._dragHandler);
        on(document, 'mouseup', ev => {
          off(document, 'mousemove', this._dragHandler);
        });

        e.preventDefault();
      },
      handleMaskClick() {
        if (this.maskClosable) {
          this.hide();
        }
      },
      reset() {
        this.transform = {
          scale: 1,
          deg: 0,
          offsetX: 0,
          offsetY: 0,
          enableTransition: false
        };
      },
      toggleMode() {
        if (this.loading) return;

        const modeNames = Object.keys(Mode);
        const modeValues = Object.values(Mode);
        const index = modeValues.indexOf(this.mode);
        const nextIndex = (index + 1) % modeNames.length;
        this.mode = Mode[modeNames[nextIndex]];
        this.reset();
      },
      prev() {
        if (this.isFirst && !this.infinite) return;
        const len = this.urlList.length;
        this.index = (this.index - 1 + len) % len;
      },
      next() {
        if (this.isLast && !this.infinite) return;
        const len = this.urlList.length;
        this.index = (this.index + 1) % len;
      },
      handleActions(action, options = {}) {
        if (this.loading) return;
        const { zoomRate, rotateDeg, enableTransition } = {
          zoomRate: 0.2,
          rotateDeg: 90,
          enableTransition: true,
          ...options
        };
        const { transform } = this;
        switch (action) {
          case 'zoomOut':
            if (transform.scale > 0.2) {
              transform.scale = parseFloat((transform.scale - zoomRate).toFixed(3));
            }
            break;
          case 'zoomIn':
            transform.scale = parseFloat((transform.scale + zoomRate).toFixed(3));
            break;
          case 'clocelise':
            transform.deg += rotateDeg;
            break;
          case 'anticlocelise':
            transform.deg -= rotateDeg;
            break;
        }
        transform.enableTransition = enableTransition;
      }
    },
    mounted() {
      this.deviceSupportInstall();
      if (this.appendToBody) {
        document.body.appendChild(this.$el);
      }
      // add tabindex then wrapper can be focusable via Javascript
      // focus wrapper so arrow key can't cause inner scroll behavior underneath
      this.$refs['image-viewer__wrapper'].focus();
    },
    destroyed() {
      // if appendToBody is true, remove DOM node after destroy
      if (this.appendToBody && this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  };
</script>
