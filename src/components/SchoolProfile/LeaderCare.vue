<template>
  <div class="leader-care" v-loading="loading" v-if="article">
    <h2 class="title">{{ article.title }}</h2>
    <div class="paragraph" v-html="article.content"></div>
  </div>
</template>

<script>
// 请求
import { fetchLeaderCare } from 'api/news'

export default {
  name: 'LeaderCare',
  data() {
    return {
      article: null,
      loading: false
    }
  },
  created() {
    // 加载动画
    this.loading = true
    fetchLeaderCare().then(({ data }) => {
      this.article = data
      // 数据请求完场，关闭加载动画
      this.loading = false
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

<style lang="less">
@media screen and (max-width: 768px) {
  .paragraph > p > img {
    width: 90%;
    height: auto;
  }
}
</style>