<template>
  <div class="news" v-loading="loading">

    <!-- 推荐新闻 -->
    <!-- <recommend-news /> -->

    <!-- 新闻卡片列表 -->
    <news-card-list v-for="category in categories" :key="category.id" :category="category" />

  </div>
</template>

<script>
// 请求
import { getAllNewsCategoies } from 'api/news'
import RecommendNews from 'components/News/RecommendNews'
import NewsCardList from 'components/News/NewsCardList'
export default {
  name: 'News',
  components: { RecommendNews, NewsCardList },
  data() {
    return {
      categories: null,
      loading: false
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.loading = true
      getAllNewsCategoies().then(({ data }) => {
        this.categories = data
        this.loading = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.news {
  margin: 0 1rem;
}
</style>