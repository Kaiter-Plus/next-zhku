<template>
  <div class="row" :style="style" :class="classList">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Row',
    // 自定义属性
    componentName: 'Row',
    props: {
      // col 之间的距离
      gutter: Number,
      // 类型
      type: String,
      // 当类型为 flex 是的 justify-content 属性的值
      justify: {
        type: String,
        default: 'start'
      },
      // 当类型为 flex 是的 align-item 属性的值
      align: {
        type: String,
        default: 'top'
      }
    },
    data() {
      return {
        marginLeft: 0,
        marginright: 0,
        classList: []
      }
    },
    created() {
      // 判断是否传入了 type 属性，且为 flex，如果是则添加类使其变成 flex
      if (this.type === 'flex') {
        this.classList.push('row--flex')
        if (this.justify !== 'start') {
          this.classList.push(`is-justify-${this.justify}`)
        }
        if (this.align !== 'top') {
          this.classList.push(`is-align-${this.align}`)
        }
      }
    },
    computed: {
      // 判断是否有 gutter 属性，添加对应的 margin
      style() {
        const ret = {};
        if (this.gutter) {
          ret.marginLeft = `-${this.gutter / 2}px`;
          ret.marginRight = ret.marginLeft;
        }
        return ret;
      }
    },
  }
</script>