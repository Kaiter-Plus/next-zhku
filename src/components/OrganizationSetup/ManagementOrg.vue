<template>
  <div class="management-org" v-loading="loading">
    <link-container :links="links" />
  </div>
</template>

<script>
// 请求
import { fetchLinks } from 'api/link.js'

// 类型常量
import { MANAGEMENT } from '@/constant/link'

// 导入组件
import LinkContainer from 'components/content/LinkContainer.vue'

export default {
  name: 'ManegementOrg',
  data() {
    return {
      links: null,
      loading: false
    }
  },
  created() {
    // 加载动画
    this.loading = true
    fetchLinks(MANAGEMENT).then(({ data }) => {
      this.links = data
      // 数据请求完场，关闭加载动画
      this.loading = false
    })
  },
  components: {
    LinkContainer
  }
}
</script>