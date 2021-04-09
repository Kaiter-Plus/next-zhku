<template>
  <div class="management-org">
    <link-container :links="links" />
  </div>
</template>

<script>
  // 请求
  import require from 'network/index.js'

  // 导入组件
  import LinkContainer from 'components/content/LinkContainer.vue'

  export default {
    name: 'ManegementOrg',
    data() {
      return {
        links: null
      }
    },
    created() {
      // 加载动画
      const loading = this.$loading({
        target: '.management-org',
        fullscreen: false
      })
      require(`/organizationSetup/gljg.htm`).then(res => {
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