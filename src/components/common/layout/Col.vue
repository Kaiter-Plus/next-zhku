<template>
  <div :style="style" :class="classList">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Col',
    props: {
      span: {
        type: Number,
        default: 24
      },
      offset: Number,
      pull: Number,
      push: Number,
      xs: [Number, Object],
      sm: [Number, Object],
      md: [Number, Object],
      lg: [Number, Object],
      xl: [Number, Object]
    },
    data() {
      return {
        classList: ['col'],
        style: {}
      }
    },
    created() {

      // 遍历是否添加了 span offset pull push， 如果有则添加对应的类名
      ;['span', 'offset', 'pull', 'push'].forEach(prop => {
        if (this[prop] || this[prop] === 0) {
          this.classList.push(
            prop !== 'span'
              ? `col-${prop}-${this[prop]}`
              : `col-${this[prop]}`
          )
        }
      })
        // 遍历是否添加了 xs sm md lg xl 如果有则添加对应的类名
        ;['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
          if (typeof this[size] === 'number') {
            this.classList.push(`col-${size}-${this[size]}`)
          } else if (typeof this[size] === 'object') {
            let props = this[size];
            Object.keys(props).forEach(prop => {
              this.classList.push(
                prop !== 'span'
                  ? `col-${size}-${prop}-${props[prop]}`
                  : `col-${size}-${props[prop]}`
              )
            })
          }
        })

      // 判断父组件是否有 gutter 有则添加 padding
      if (this.gutter) {
        this.style.paddingLeft = this.gutter / 2 + 'px';
        this.style.paddingRight = this.style.paddingLeft;
      }
    },
    computed: {
      gutter() {
        let parent = this.$parent;
        while (parent && parent.$options.componentName !== 'Row') {
          parent = parent.$parent;
        }
        return parent ? parent.gutter : 0;
      }
    },
  }
</script>