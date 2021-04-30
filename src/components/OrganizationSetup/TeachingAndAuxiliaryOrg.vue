<template>
  <div class="teaching-and-auxiliary-org" v-loading="loading">
    <link-container :links="links" />
  </div>
</template>

<script>
// 请求
import { fetchLinks } from 'api/link.js'

// 类型常量
import { TEACHING, TEACHINGASSISTANT, DETACHMENT } from '@/constant/link'

// 导入组件
import LinkContainer from 'components/content/LinkContainer.vue'

export default {
  name: 'TeachingAndAuxiliaryOrg',
  components: { LinkContainer },
  data() {
    return {
      links: [],
      loading: false
    }
  },
  created() {
    this.getLinks()
  },
  methods: {
    getLinks() {
      // 加载动画
      this.loading = true
      fetchLinks(TEACHING).then(({ data }) => {
        this.links = [...this.links, ...data]
        // 数据请求完场，关闭加载动画
        this.loading = false
      })
      fetchLinks(TEACHINGASSISTANT).then(({ data }) => {
        this.links = [...this.links, ...data]
        // 数据请求完场，关闭加载动画
        this.loading = false
      })
      fetchLinks(DETACHMENT).then(({ data }) => {
        this.links = [...this.links, ...data]
        // 数据请求完场，关闭加载动画
        this.loading = false
      })
    }
  }
}
</script>