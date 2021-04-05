<template>
  <div class="news-wrap">
    <div class="news-container">
      <div class="news-title">
        <div class="title-wrap">
          <div class="news-icon"></div>
          <em class="title">{{newsTitle.title}}</em>
        </div>
        <div class="news-more">
          <a :href="newsTitle.href" class="more">查看更多>></a>
        </div>
      </div>
      <news-item :newsHrefs="newsTitle.href" />
    </div>
  </div>
</template>

<script>
  import NewsItem from 'components/Home/News/NewsItem.vue'
  export default {
    name: 'NewsWrap',
    props: {
      newsTitle: Object
    },
    components: {
      NewsItem
    }
  }
</script>

<style lang="less" scoped>
  .news-wrap {
    position: relative;
    .news-container {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      margin: 2rem auto;
      overflow: hidden;
      width: 98%;
      @media screen and (max-width: 768px) {
        height: 18.5rem;
      }
      .news-title {
        margin-bottom: 0.375rem;
        display: flex;
        justify-content: flex-start;
        line-height: 2rem;
        .title-wrap {
          margin-left: 1rem;
          .news-icon {
            display: inline-block;
            width: 1.25rem;
            height: 1.25rem;
            vertical-align: middle;
            background: url(~assets/img/icon/xinwen.png) no-repeat;
            background-size: contain;
          }
          .title {
            color: #20232c;
            font-size: 1.125rem;
            margin-left: 0.3125rem;
            font-weight: bolder;
            vertical-align: middle;
            font-style: normal;
          }
        }
        .news-more {
          margin: 0 2.0625rem 0 auto;
          .more {
            padding: 0.25rem;
            text-align: center;
            color: #27ae60;
            font-size: 0.875rem;
            width: 6.625rem;
            height: 1.5rem;
            text-decoration: none;
            background: rgba(39, 174, 96, 0.05);
            border-radius: 0.25rem;
            border: 1px solid rgba(39, 174, 96, 0.11);
          }
        }
      }
    }
  }
</style>