<template>
  <div class="home">

    <!-- 新闻通知 -->
    <news-wrap v-for="newsTitle in newsTitles" :newsTitle="newsTitle" :key="newsTitle.id" />

    <!-- 专题 -->
    <special />

    <!-- 友情链接 -->
    <friend-link />

  </div>
</template>

<script>
  // 导入组件
  import NewsWrap from 'components/Home/News/NewsWrap.vue'
  import FriendLink from 'components/Home/FriendLink.vue'
  import Special from 'components/Home/Special/Special.vue'

  export default {
    name: 'Home',
    props: {
      newsTitles: Array
    },
    components: {
      NewsWrap,
      FriendLink,
      Special
    }
  }
</script>