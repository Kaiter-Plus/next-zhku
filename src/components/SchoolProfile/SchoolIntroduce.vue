<template>
  <div class="school-introduce" v-loading="loading" v-if="article">
    <h2 class="title">{{ article.title }}</h2>
    <div class="content" v-html="article.content"></div>
  </div>
</template>

<script>
// 请求
import { fetchSchoolIntrodece } from 'api/news'

export default {
  name: 'SchoolIntroduce',
  data() {
    return {
      article: null,
      loading: false
    }
  },
  created() {
    // 加载动画
    this.loading = true
    fetchSchoolIntrodece().then(({ data }) => {
      this.article = data
      // 数据请求完场，关闭加载动画
      this.loading = false
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
  .content {
    font-size: 1rem;
    line-height: 2rem;
    text-indent: 2em;
    font-weight: 500;
  }
}
</style>