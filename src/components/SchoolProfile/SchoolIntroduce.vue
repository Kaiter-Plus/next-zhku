<template>
  <div v-if="article" class="school-introduce">
    <h2 class="title">{{ article.title }}</h2>
    <p class="paragraph" v-for="paragraph in article.content" :key="paragraph.id">
      {{ paragraph.text }}
    </p>
  </div>
</template>

<script>
  // 请求
  import require from 'network/index.js'

  export default {
    name: 'SchoolIntroduce',
    data() {
      return {
        article: null
      }
    },
    created() {
      // 加载动画
      const loading = this.$loading({
        target: '.school-introduce',
        fullscreen: false
      })
      require(`/schoolProfile/school-introduce`).then(res => {
        this.article = res
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
  .school-introduce {
    padding: 3.125rem;
    @media screen and (max-width: 992px) {
      padding: 1rem;
    }
    .title {
      font-size: 2rem;
      text-align: center;
      line-height: 5rem;
    }
    .paragraph {
      font-size: 1rem;
      line-height: 2rem;
      text-indent: 2em;
      font-weight: 500;
    }
  }
</style>