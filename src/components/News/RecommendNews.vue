<template>
  <el-row class="recommend-news" ref="recommendNews">
    <el-col class="image-container" :span="24" :md="15" :xl="12">
      <router-link v-for="(item, index) in recommendNews" :key="item.id" v-show="currentIndex === index"
        :to="`/news/${item.href}`" :title="item.title">
        <img :src="item.imgSrc" :alt="item.title">
      </router-link>
    </el-col>
    <el-col class="news-title-wrap" :span="24" :md="9" :xl="12">
      <el-row class="news-title">
        <el-col :span="24" class="title">
          <div>
            <router-link v-for="(item, index) in recommendNews" :key="item.id" :to="`/news/${item.href}`"
              :title="item.title" @mouseover.native="currentIndex = index">
              {{ item.title }}
            </router-link>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
// 请求
import require from 'network/index.js'

export default {
  name: 'RecommendNews',
  data() {
    return {
      currentIndex: 0,
      recommendNews: null
    }
  },
  created() {
    // 加载动画
    const loading = this.$loading({
      target: this.$refs.recommendNews,
      fullscreen: false
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
        height: 100%;
        background-color: #ffffff60;
        @media screen and (max-width: 991px) {
          height: 3rem;
          overflow: hidden;
          a {
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        div {
          height: 100%;
          display: flex;
          flex-direction: column;
          @media screen and (max-width: 991px) {
            flex-direction: row;
          }
          a {
            width: 100%;
            height: 50%;
            box-sizing: border-box;
            display: inline-block;
            font-size: 1.125rem;
            color: #000;
            letter-spacing: 0;
            line-height: 100%;
            overflow: hidden;
            padding: 1rem;
            &:nth-child(1) {
              border-bottom: solid 0.5px #66666640;
            }
            &:nth-child(2) {
              border-top: solid 0.5px #66666640;
            }
            &:hover {
              background: #ffffff90;
            }
            @media screen and (max-width: 991px) {
              height: 100%;
              &:nth-child(1) {
                border-bottom: none;
                border-right: solid 0.5px #66666640;
              }
              &:nth-child(2) {
                border-top: none;
                border-left: solid 0.5px #66666640;
              }
            }
          }
        }
      }
    }
  }
}
</style>