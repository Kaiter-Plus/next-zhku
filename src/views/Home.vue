<template>
  <div class="home">

    <!-- 新闻 -->
    <news-wrap v-for="newsCategory in newsCategories" :newsCategory="newsCategory" :key="newsCategory.id" />

    <!-- 专题 -->
    <special />

    <!-- 友情链接 -->
    <friend-link />

  </div>
</template>

<script>
  // 请求
  import { getHomeNewsCategoies } from 'api/news'

  // 导入组件
  import NewsWrap from 'components/Home/News/NewsWrap.vue'
  import Special from 'components/Home/Special/Special.vue'
  import FriendLink from 'components/Home/friend-link/index.vue'

  export default {
    name: 'Home',
    components: { NewsWrap, FriendLink, Special },
    data() {
      return {
        newsCategories: null,
        loading: false
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        this.loading = true
        getHomeNewsCategoies().then(({ data }) => {
          this.newsCategories = data
          this.loading = false
        })
      }
    }
  }
</script>