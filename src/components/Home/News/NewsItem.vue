<template>
  <zk-row class="news-item">
    <zk-col class="news-item-wrap" :span="24">
      <zk-row class="item-list">
        <zk-col class="item" :span="11" :xs="{span: 22}" v-for="news in newsList" :key="news.id">
          <router-link :to="`/news/${news.href}`" :title="news.title" replace>
            <p>{{news.title}}</p>
            <p>{{news.date}}</p>
          </router-link>
        </zk-col>
      </zk-row>
    </zk-col>
  </zk-row>
</template>

<script>
  // 请求
  import require from 'network/index.js'

  // 组件
  import ZkRow from 'components/common/layout/Row.vue'
  import ZkCol from 'components/common/layout/Col.vue'

  export default {
    name: 'NewsItem',
    props: {
      newsHrefs: String
    },
    data() {
      return {
        newsList: null
      }
    },
    created() {
      const loading = this.$loading({
        target: '.item-list',
        fullscreen: false
      })
      require(`/news/${this.newsHref}`).then(res => {
        this.newsList = res.news
        // 如果已经渠道数据，关闭加载动画
        const timer = setInterval(() => {
          if (this.newsList) {
            loading.close()
            clearInterval(timer)
          }
        }, 500)
      }).catch(err => {
        // 错误处理待写
        console.error(err)
      })
    },
    computed: {
      newsHref() {
        return this.newsHrefs.split(/\/{1,2}/g)[2]
      }
    },
    components: {
      ZkRow,
      ZkCol
    }
  }
</script>

<style lang="less" scoped>
  .news-item-wrap {
    flex: 1;
    overflow: hidden;
    .item-list {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-content: flex-start;
      width: 100%;
      .item {
        display: flex;
        height: 2.5rem;
        margin: 0.25rem 0.625rem 0.5rem;
        background: #ffffff90;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
        border-radius: 0.25rem;
        a {
          display: flex;
          text-decoration: none;
          width: 100%;
          height: 100%;
          justify-content: space-between;
          p {
            display: block;
            font-size: 14px;
            font-weight: 400;
            line-height: 2.5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:nth-child(1) {
              flex: 1;
              margin-left: 0.625rem;
            }
            &:nth-child(2) {
              width: 4.5rem;
              margin-right: 0.625rem;
            }
          }
        }
      }
    }
  }
</style>