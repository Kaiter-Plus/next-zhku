<template>
  <div class="news">

    <!-- 推荐新闻 -->
    <recommend-news />

    <!-- 新闻卡片列表 -->
    <news-card-list v-for="(news, index) in newsList" :key="index" :news="news" />

  </div>
</template>

<script>
  import RecommendNews from 'components/News/RecommendNews'
  import NewsCardList from 'components/News/NewsCardList'
  export default {
    name: 'News',
    data() {
      return {
        newsList: [
          {
            title: '学校要闻',
            href: 'xxyw.htm'
          },
          {
            title: '校园快讯',
            href: 'xykx.htm'
          },
          {
            title: '媒体仲恺',
            href: 'mtzk.htm'
          },
          {
            title: '讲座预告',
            href: 'jzyg.htm'
          },
          {
            title: '仲恺人物',
            href: 'zkrw.htm'
          },
          {
            title: '仲园思政',
            href: 'zysz.htm'
          },
          {
            title: '仲恺讲坛',
            href: 'zkjt1.htm'
          }
        ]
      }
    },
    components: {
      RecommendNews,
      NewsCardList
    }
  }
</script>

<style lang="less" scoped>
  .news {
    margin: 0 1rem;
  }
</style>