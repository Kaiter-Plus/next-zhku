import Pager from './Pager.vue'

export default {
  name: 'Pagination',

  props: {
    // 每页显示数量
    pageSize: {
      type: Number,
      default: 10
    },

    // 小规格分页
    small: Boolean,

    // 项目总数
    total: Number,

    // 总页数
    pageCount: Number,

    // 页码按钮的数量，大于等于 5 且小于等于 21 的奇数
    pagerCount: {
      type: Number,
      validator(value) {
        return (value | 0) === value && value > 4 && value < 22 && value % 2 === 1
      },
      default: 7
    },

    // 设置当前页
    currentPage: {
      type: Number,
      default: 1
    },

    // 布局方式
    layout: {
      default: 'prev, pager, next, ->, total'
    },

    prevText: String,

    nextText: String,

    background: Boolean,

    disabled: Boolean,

    hideOnSinglePage: Boolean
  },

  data() {
    return {
      internalCurrentPage: 1,
      internalPageSize: 0,
      lastEmittedPage: -1,
      userChangePageSize: false
    }
  },

  render(h) {
    const layout = this.layout
    if (!layout) return null
    if (this.hideOnSinglePage && (!this.internalPageCount || this.internalPageCount === 1)) return null

    let template = (
      <div
        class={[
          'pagination',
          {
            'is-background': this.background,
            'pagination--small': this.small
          }
        ]}
      ></div>
    )
    const TEMPLATE_MAP = {
      prev: <prev></prev>,
      pager: (
        <pager
          currentPage={this.internalCurrentPage}
          pageCount={this.internalPageCount}
          pagerCount={this.pagerCount}
          on-change={this.handleCurrentChange}
          disabled={this.disabled}
        ></pager>
      ),
      next: <next></next>,
      slot: <slot>{this.$slots.default ? this.$slots.default : ''}</slot>,
      total: <total></total>
    }
    const components = layout.split(',').map(item => item.trim())
    const rightWrapper = <div class="pagination__rightwrapper"></div>
    let haveRightWrapper = false

    template.children = template.children || []
    rightWrapper.children = rightWrapper.children || []
    components.forEach(compo => {
      if (compo === '->') {
        haveRightWrapper = true
        return
      }

      if (!haveRightWrapper) {
        template.children.push(TEMPLATE_MAP[compo])
      } else {
        rightWrapper.children.push(TEMPLATE_MAP[compo])
      }
    })

    if (haveRightWrapper) {
      template.children.unshift(rightWrapper)
    }

    return template
  },

  components: {
    Prev: {
      render(h) {
        return (
          <button
            type="button"
            class="btn-prev"
            disabled={this.$parent.disabled || this.$parent.internalCurrentPage <= 1}
            on-click={this.$parent.prev}
          >
            {this.$parent.prevText ? <span>{this.$parent.prevText}</span> : <i class="icon iconfont icon-zuo"></i>}
          </button>
        )
      }
    },

    Next: {
      render(h) {
        return (
          <button
            type="button"
            class="btn-next"
            disabled={
              this.$parent.disabled ||
              this.$parent.internalCurrentPage === this.$parent.internalPageCount ||
              this.$parent.internalPageCount === 0
            }
            on-click={this.$parent.next}
          >
            {this.$parent.nextText ? <span>{this.$parent.nextText}</span> : <i class="icon iconfont icon-you"></i>}
          </button>
        )
      }
    },

    Total: {
      render(h) {
        return typeof this.$parent.total === 'number' ? (
          <span class="pagination__total">{this.t('el.pagination.total', { total: this.$parent.total })}</span>
        ) : (
          ''
        )
      }
    },

    Pager
  },

  methods: {
    handleCurrentChange(val) {
      this.internalCurrentPage = this.getValidCurrentPage(val)
      this.userChangePageSize = true
      this.emitChange()
    },

    prev() {
      if (this.disabled) return
      const newVal = this.internalCurrentPage - 1
      this.internalCurrentPage = this.getValidCurrentPage(newVal)
      this.$emit('prev-click', this.internalCurrentPage)
      this.emitChange()
    },

    next() {
      if (this.disabled) return
      const newVal = this.internalCurrentPage + 1
      this.internalCurrentPage = this.getValidCurrentPage(newVal)
      this.$emit('next-click', this.internalCurrentPage)
      this.emitChange()
    },

    getValidCurrentPage(value) {
      value = parseInt(value, 10)

      const havePageCount = typeof this.internalPageCount === 'number'

      let resetValue
      if (!havePageCount) {
        if (isNaN(value) || value < 1) resetValue = 1
      } else {
        if (value < 1) {
          resetValue = 1
        } else if (value > this.internalPageCount) {
          resetValue = this.internalPageCount
        }
      }

      if (resetValue === undefined && isNaN(value)) {
        resetValue = 1
      } else if (resetValue === 0) {
        resetValue = 1
      }

      return resetValue === undefined ? value : resetValue
    },

    emitChange() {
      this.$nextTick(() => {
        if (this.internalCurrentPage !== this.lastEmittedPage || this.userChangePageSize) {
          this.$emit('current-change', this.internalCurrentPage)
          this.lastEmittedPage = this.internalCurrentPage
          this.userChangePageSize = false
        }
      })
    }
  },

  computed: {
    internalPageCount() {
      if (typeof this.total === 'number') {
        return Math.max(1, Math.ceil(this.total / this.internalPageSize))
      } else if (typeof this.pageCount === 'number') {
        return Math.max(1, this.pageCount)
      }
      return null
    }
  },

  watch: {
    currentPage: {
      immediate: true,
      handler(val) {
        this.internalCurrentPage = this.getValidCurrentPage(val)
      }
    },

    pageSize: {
      immediate: true,
      handler(val) {
        this.internalPageSize = isNaN(val) ? 10 : val
      }
    },

    internalCurrentPage: {
      immediate: true,
      handler(newVal) {
        this.$emit('update:currentPage', newVal)
        this.lastEmittedPage = -1
      }
    },

    internalPageCount(newVal) {
      /* istanbul ignore if */
      const oldPage = this.internalCurrentPage
      if (newVal > 0 && oldPage === 0) {
        this.internalCurrentPage = 1
      } else if (oldPage > newVal) {
        this.internalCurrentPage = newVal === 0 ? 1 : newVal
        this.userChangePageSize && this.emitChange()
      }
      this.userChangePageSize = false
    }
  }
}
