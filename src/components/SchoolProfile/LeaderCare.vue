<template>
  <div class="leader-care">
    <h2 class="title">{{ article.title }}</h2>
    <div class="paragraph" v-html="article.content"></div>
  </div>
</template>

<script>
  // 请求
  import require from 'network/index.js'

  export default {
    name: 'LeaderCare',
    data() {
      return {
        article: null
      }
    },
    created() {
      // 加载动画
      const loading = this.$loading({
        target: '.leader-care',
        fullscreen: false
      })
      require(`/public/news/leader-care`).then(({ data }) => {
        this.article = data
        // 数据请求完场，关闭加载动画
        this.$nextTick(() => {
          loading.close()
        })
      }).catch(err => {
        // 错误处理待写
        console.error(err)
      })
    },
  }
</script>


<style lang="less" scoped>
  .leader-care {
    padding: 1rem;
    .title {
      font-size: 2rem;
      text-align: center;
      line-height: 5rem;
    }
    .paragraph {
      line-height: 2rem;
    }
  }
</style>