<template>
  <div class="teaching-and-auxiliary-org">
    <link-container :links="links" />
  </div>
</template>

<script>
  // 请求
  import require from 'network/index.js'

  // 导入组件
  import LinkContainer from 'components/content/LinkContainer.vue'

  export default {
    name: 'TeachingAndAuxiliaryOrg',
    data() {
      return {
        links: null
      }
    },
    created() {
      // 加载动画
      const loading = this.$loading({
        target: '.teaching-and-auxiliary-org',
        fullscreen: true
      })
      require(`/organizationSetup/jxjjfjg.htm`).then(res => {
        this.links = res
        // 数据请求完场，关闭加载动画
        this.$nextTick(() => {
          loading.close()
        })
      }).catch(err => {
        // 错误处理待写
        console.error(err)
      })
    },
    components: {
      LinkContainer
    }
  }
</script>