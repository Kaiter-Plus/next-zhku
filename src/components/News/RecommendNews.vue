<template>
  <zk-row class="recommend-news" ref="recommendNews">
    <zk-col class="image-container" :span="24" :md="15" :xl="12">
      <a v-show="isShow" href="https://news.zhku.edu.cn/info/1001/22206.htm">
        <img src="https://news.zhku.edu.cn/__local/3/6C/92/0088691E3AB45EE9E69494C7324_D7943D5F_1955E.jpg" alt="test">
      </a>
      <a v-show="!isShow" href="https://news.zhku.edu.cn/info/1002/23417.htm">
        <img src="https://news.zhku.edu.cn/__local/6/65/25/747DE9AA3EB90CEE5C389022A3F_EEAE896E_37B07.jpg" alt="test">
      </a>
    </zk-col>
    <zk-col class="news-title-wrap" :span="24" :md="9" :xl="12">
      <zk-row class="news-title">
        <zk-col :span="12" :md="24" class="title">
          <div>
            <a title="省委第十巡视组向仲恺农业工程学院党委反馈巡视情况" href="https://news.zhku.edu.cn/info/1001/22206.htm"
              @mouseover="isShow=true">
              省委第十巡视组向仲恺农业工程学院党委反馈巡视情况
            </a>
          </div>
        </zk-col>
        <zk-col :span="12" :md="24" class="title">
          <div>
            <a title="仲恺农业工程学院举行校训发布仪式" href="https://news.zhku.edu.cn/info/1002/23417.htm" @mouseover="isShow=false">
              仲恺农业工程学院举行校训发布仪式
            </a>
          </div>
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
    name: 'RecommendNews',
    data() {
      return {
        isShow: true,
        recommendNews: null
      }
    },
    created() {
      // 加载动画
      const loading = this.$loading({
        target: this.$refs.recommendNews
      })
      require(`/news`).then(res => {
        this.recommendNews = res
        // 数据请求完场，关闭加载动画
        this.$nextTick(() => {
          loading.close()
        })
      }).catch(err => {
        // 错误处理待写
        console.error(err)
      })
    },
    components: {
      ZkRow,
      ZkCol
    }
  }
</script>

<style lang="less" scoped>
  .recommend-news {
    margin-bottom: 20px;
    @media screen and (max-width: 1200px) {
      margin: 1rem 0 0;
    }
    .image-container {
      height: 22.875rem;
      position: relative;
      @media screen and (max-width: 670px) {
        height: 18rem;
      }
      @media screen and (max-width: 520px) {
        height: 12rem;
      }
      a {
        height: 100%;
        width: 100%;
        display: inline-block;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
    .news-title-wrap {
      height: 22.875rem;
      cursor: pointer;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      overflow: hidden;
      z-index: 1;
      box-sizing: border-box;
      @media screen and (max-width: 991px) {
        height: 50%;
      }
      .news-title {
        height: 100%;
        .title {
          height: 50%;
          background-color: #ffffff60;
          &:nth-child(1) {
            border-bottom: solid 0.5px #66666640;
          }
          &:nth-child(2) {
            border-top: solid 0.5px #66666640;
          }
          @media screen and (max-width: 991px) {
            height: 3rem;
            overflow: hidden;
            &:nth-child(1) {
              border-bottom: none;
              border-right: solid 0.5px #66666640;
            }
            &:nth-child(2) {
              border-top: none;
              border-left: solid 0.5px #66666640;
            }
            a {
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
          div {
            height: 100%;
            a {
              width: 100%;
              height: 100%;
              box-sizing: border-box;
              display: inline-block;
              font-size: 1.125rem;
              color: #000;
              letter-spacing: 0;
              line-height: 100%;
              overflow: hidden;
              padding: 1rem;
              &:hover {
                background: #ffffff90;
              }
            }
          }
        }
      }
    }
  }
</style>