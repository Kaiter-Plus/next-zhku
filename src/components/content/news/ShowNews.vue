<template>
  <div class="show-news" v-if="news">
    <page-header @back="$router.go(-1)" :content="news.title"></page-header>
    <zk-row class="news-container" :gutter="10">
      <zk-col tag="aside" class="news-aside" :span="6">
        <aside-item :recentUpdates="recentUpdates"></aside-item>
      </zk-col>
      <zk-col class="news-main" :span="18">
        <div class="news-content-box">
          <div class="news-header-box">
            <div class="news-title-box">
              <h1 class="news-title">{{ news.title }}</h1>
            </div>
            <div class="news-info-box">
              <img src="~assets/img/icon/medal.png" alt="排行榜" class="ranking-list">
              <div class="info">
                <span>{{ news.author }}</span>
                <span>{{ news.date }}</span>
              </div>
            </div>
          </div>
          <article class="news-content" v-for="item in news.content" :key="item.id">
            <!-- 段落 -->
            <template v-if="item.tag === 'p'">
              <a v-if="item.text.indexOf('http') === 0" :href="item.text">原文链接</a>
              <p v-else>{{ item.text }}</p>
            </template>
            <!-- 表格 -->
            <template v-else-if="item.tag === 'table'">
              <table v-html="item.text "></table>
            </template>
            <!-- 图片 -->
            <template v-else-if="item.tag === 'img'">
              <zk-image :src="item.src" fit="fill" :lazy="true" :preview-src-list="srcList">
                <div slot="placeholder" class="image-slot">
                  <svg t="1617676383747" class="icon" viewBox="0 0 1166 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="4277" width="48" height="48">
                    <path
                      d="M940.75011862 90.56399583H220.72382214A120.58936239 120.58936239 0 0 0 100.88657649 211.15335824v601.69328352a120.58936239 120.58936239 0 0 0 120.08795149 120.33865653H940.75011862a120.58936239 120.58936239 0 0 0 119.83724565-120.33865653v-601.69328352A120.58936239 120.58936239 0 0 0 940.75011862 90.56399583z m59.91862283 653.84003461l-144.15568264-184.26856732a47.63405138 47.63405138 0 0 0-77.9694216-6.01693319l-167.72200289 168.47411964-173.98964115-222.877221a44.87629106 44.87629106 0 0 0-71.95248839 0l-204.07430547 246.94495213V211.15335824a56.65945078 56.65945078 0 0 1 59.91862283-60.16932868H940.75011862a64.68202837 64.68202837 0 0 1 59.91862283 60.16932868zM794.33808571 297.6467675a90.50469805 90.50469805 0 1 0 2e-8 127.60911739 90.50469805 90.50469805 0 0 0 0-127.60911739z"
                      fill="#9f9f9f" p-id="4278"></path>
                  </svg>
                  图片加载中...
                </div>
                <div slot="error" class="image-slot">
                  <svg t="1617676296117" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2911" width="48" height="48">
                    <path d="M0 61.44h1024v901.12H0z" fill="#999999" p-id="2912"></path>
                    <path
                      d="M409.6 614.4s81.92-102.4 143.36-184.32c-167.936-116.736-366.592 108.544-532.48 319.488V942.08h368.64l204.8-204.8-184.32-122.88z"
                      fill="#DDDDDD" p-id="2913"></path>
                    <path
                      d="M1024 950.272V731.136C856.064 407.552 716.8 634.88 716.8 634.88c-40.96-102.4-73.728-149.504-122.88-184.32-61.44 61.44-143.36 163.84-143.36 163.84l204.8 102.4-180.224 221.184c178.176-6.144 370.688 34.816 548.864 12.288z"
                      fill="#DDDDDD" p-id="2914"></path>
                    <path d="M983.04 102.4v819.2H40.96V102.4h942.08m40.96-40.96H0v901.12h1024V61.44z" fill="#CCCCCC"
                      p-id="2915"></path>
                    <path
                      d="M126.976 305.152c-8.192-8.192-8.192-20.48 0-28.672l86.016-86.016c8.192-8.192 20.48-8.192 28.672 0 8.192 8.192 8.192 20.48 0 28.672l-86.016 86.016c-8.192 6.144-20.48 6.144-28.672 0z"
                      fill="#DDDDDD" p-id="2916"></path>
                    <path
                      d="M241.664 305.152c-8.192 8.192-20.48 8.192-28.672 0l-86.016-86.016c-8.192-8.192-8.192-20.48 0-28.672 8.192-8.192 20.48-8.192 28.672 0l86.016 86.016c8.192 6.144 8.192 20.48 0 28.672z"
                      fill="#DDDDDD" p-id="2917"></path>
                  </svg>
                  图片加载失败了...
                </div>
              </zk-image>
            </template>
          </article>
        </div>
      </zk-col>
    </zk-row>
  </div>
</template>

<script>
  // 请求
  import require from 'network/index.js'

  // 组件
  import PageHeader from 'components/common/page-header/PageHeader.vue'
  import ZkRow from 'components/common/layout/Row.vue'
  import ZkCol from 'components/common/layout/Col.vue'
  import ZkImage from 'components/common/image/Imager.vue'
  import AsideItem from 'components/content/news/AsideItem.vue'
  export default {
    name: 'ShowNews',
    data() {
      return {
        news: null,
        srcList: [],
        recentUpdates: null
      }
    },
    mounted() {
      this.getData(this.$route.params)
    },
    methods: {
      getData(params) {
        const loading = this.$loading({
          target: '.show-news',
          fullscreen: false
        })
        require(`/news/${params.info}/${params.type}/${params.no}`).then(res => {
          this.srcList.length = 0
          this.news = res
          this.recentUpdates = res.recentUpdates
          res.content.forEach(v => {
            if (v.src) {
              this.srcList.push(v.src)
            }
          })
          this.$nextTick(() => {
            loading.close()
          })
        }).catch(err => {
          // 错误处理待写
          console.error(err)
        })
      }
    },
    // 防止组件复用不更新数据
    beforeRouteUpdate(to, from, next) {
      if (to.fullPath !== from.fullPath) {
        this.getData(to.params)
      }
      next()
    },
    components: {
      PageHeader,
      ZkRow,
      ZkCol,
      ZkImage,
      AsideItem
    }
  }
</script>

<style lang="less" scoped>
  .show-news {
    margin: 0 0.75rem 0.75rem;
    .news-container {
      .news-aside {
        margin-top: 1rem;
        position: sticky;
        top: 3.75rem;
        @media screen and (max-width: 992px) {
          display: none;
        }
      }
      .news-main {
        @media screen and (max-width: 992px) {
          width: 100%;
        }
        .news-content-box {
          margin-top: 1rem;
          position: relative;
          padding: 0 1.5rem 1rem;
          background: #ffffff60;
          .news-header-box {
            border-bottom: 1px solid #f5f6f7;
            padding-top: 0.5rem;
            z-index: 9;
            .news-title-box {
              margin-bottom: 0.5rem;
              .news-title {
                font-size: 1.75rem;
                word-wrap: break-word;
                color: #222226;
                font-weight: 600;
                line-height: 2rem;
                margin: 0;
                word-break: break-all;
              }
            }
            .news-info-box {
              position: relative;
              background: #f8f8f899;
              border-radius: 0.25rem;
              font-size: 0.875rem;
              line-height: 2rem;
              color: #999aaa;
              display: flex;
              .ranking-list {
                width: 1.5rem;
                height: 1.5rem;
                margin: 0.25rem;
                margin-right: 12px;
              }
              span {
                color: #555666;
                margin-right: 20px;
                vertical-align: top;
                line-height: 32px;
              }
            }
          }
          .news-content {
            position: relative;
            padding-top: 16px;
            word-wrap: break-word;
            p {
              text-indent: 2em;
              color: #4d4d4d;
              font-weight: 400;
              line-height: 26px;
              margin: 0 0 16px;
            }
            /deep/ .image,
            img {
              width: 100%;
              margin: 0 0 16px;
            }
          }
        }
      }
    }
    @media screen and (max-width: 992px) {
      /deep/ .page-header__left * {
        font-size: 0.8rem;
      }
      /deep/ .page-header__content {
        font-size: 0.85rem;
      }
    }
  }
</style>