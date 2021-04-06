<template>
  <div class="theme" :title="tip" @dblclick.stop="resetTheme" :style="{'right': styleRight, 'bottom': styleBottom}">
    <div class="theme-color-container">
      <div class="theme-color" v-for="(color, index) in theme" :key="index" :style="`background: ${color}`"
        @click.stop="colorClick(color)">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Theme',
    props: {
      tip: {
        type: String,
        default: '切换主题'
      },
      theme: {
        type: Array,
        default: () => [
          '#fff;',
          'linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%);',
          'linear-gradient( 135deg, #43CBFF 10%, #9708CC 100%);',
          'linear-gradient( 135deg, #FFD26F 10%, #3677FF 100%);',
          'linear-gradient( 135deg, #FFF5C3 10%, #9452A5 100%);',
          'linear-gradient( 135deg, #81FFEF 10%, #F067B4 100%);',
          'linear-gradient( 135deg, #FF96F9 10%, #C32BAC 100%);',
          'linear-gradient( 135deg, #3C8CE7 10%, #00EAFF 100%);',
          'linear-gradient( 135deg, #A0FE65 10%, #FA016D 100%);',
          'linear-gradient( 135deg, #FFF720 10%, #3CD500 100%);'
        ]
      },
      bottom: {
        type: Number,
        default: 40
      },
      right: {
        type: Number,
        default: 40
      }
    },
    computed: {
      styleBottom() {
        return `${this.bottom}px`;
      },
      styleRight() {
        return `${this.right}px`;
      }
    },
    methods: {
      // 点击颜色事件
      colorClick(color) {
        this.$emit('selectTheme', color)
      },
      // 霍夫默认主题
      resetTheme() {
        this.$emit('selectTheme', '#81ffef;')
      }
    }
  }
</script>

<style lang="less" scoped>
  .theme {
    width: 40px;
    height: 40px;
    position: fixed;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    background: #fff url(~assets/img/icon/theme.png) no-repeat center / 80%;
    border-radius: 50%;
    &:hover {
      &::before,
      .theme-color-container {
        visibility: visible;
        opacity: 1;
      }
    }
    // 小箭头
    &::before {
      content: '';
      border: 10px solid;
      border-color: transparent transparent transparent #fff;
      position: absolute;
      right: 35px;
      bottom: 50%;
      transform: translateY(50%);
    }
    // 所有主题
    .theme-color-container {
      display: flex;
      position: absolute;
      flex-wrap: wrap;
      right: 55px;
      bottom: 50%;
      width: 250px;
      background-color: #fff;
      transform: translateY(50%);
      padding: 5px;
      .theme-color {
        width: 40px;
        height: 40px;
        margin: 5px;
        cursor: pointer;
        border: solid 1px #ccc;
        box-sizing: border-box;
      }
    }
    &::before,
    .theme-color-container {
      transition: all 0.3s;
      visibility: hidden;
      opacity: 0;
    }
  }
</style>