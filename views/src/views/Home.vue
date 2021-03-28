<template>
  <div class="home">
    <!-- 轮播图开始 -->
    <carousel />
    <!-- 轮播图结束 -->
    <!-- 主要内容开始 -->
    <!-- 新闻通知开始 -->
    <news-wrap v-for="(title, index) in titles" :title="title" :key="index" />
    <!-- 新闻通知结束 -->
    <!-- 专题开始 -->
    <special />
    <!-- 专题结束 -->
    <!-- 主要内容结束 -->
    <!-- 友情链接开始 -->
    <friend-link :links="links" />
    <!-- 友情链接结束 -->
  </div>
</template>

<script>
  import Carousel from 'components/Carousel/Carousel.vue'
  import NewsWrap from 'components/NewsWrap/NewsWrap.vue'
  import FriendLink from 'components/FriendLink/FriendLink.vue'
  import Special from 'components/Special/Special.vue'

  export default {
    name: 'Home',
    data() {
      return {
        titles: [
          '学校要闻',
          '校园快讯',
          '讲座预告',
          '媒体仲恺',
          '通知'
        ],
        links: [
          '校内链接',
          '管理机构',
          '教学机构',
          '教辅及研究机构',
          '学生园地',
          '友情链接'
        ]
      }
    },
    // 加载动画
    // created() {
    //   const loading = this.$loading({
    //     fullscreen: true
    //   })
    //   this.$nextTick(() => {
    //     loading.close()
    //   })
    // },
    // props: {
    //   images: Array
    // },
    components: {
      Carousel,
      NewsWrap,
      FriendLink,
      Special
    }
  }
</script>