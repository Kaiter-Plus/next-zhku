<template>
  <div class="school-scenery">
    <div class="gallery">
      <div class="gallery-item" v-for="img in imgList" :key="img.id">
        <zk-image class="image" :src="img.src" :preview-src-list="srcList">
          <div slot="placeholder" class="image-slot">
            <span class="tip">加载中...</span>
          </div>
          <div slot="error" class="image-slot">
            <i class="iconfont icon-xinwen"></i>
          </div>
        </zk-image>
        <div class="image-title">
          <span>{{ img.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 请求
  import require from 'network/index.js'

  // 组件
  import ZkImage from 'components/common/image/Imager.vue'

  export default {
    name: 'SchoolScenery',
    data() {
      return {
        imgList: null
      }
    },
    created() {
      // 加载动画
      const loading = this.$loading({
        target: '.school-scenery',
        fullscreen: false
      })
      require(`/schoolProfile/school-scenery`).then(res => {
        this.imgList = res
        // 数据请求完场，关闭加载动画
        this.$nextTick(() => {
          loading.close()
        })
      }).catch(err => {
        // 错误处理待写
        console.error(err)
      })
    },
    computed: {
      srcList() {
        const list = []
        for (const img of this.imgList) {
          list.push(img.src)
        }
        return list
      }
    },
    components: {
      ZkImage
    }
  }
</script>

<style lang="less" scoped>
  .school-scenery {
    .gallery {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .gallery-item {
        width: 30%;
        height: 100%;
        margin: 1.5rem 0;
        box-sizing: content-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 2px solid #f2f2f2;
        border-radius: 4px;
        overflow: hidden;
        transition: all 0.3s;
        @media screen and (max-width: 992px) {
          width: 80%;
        }
        .image {
          height: auto;
          width: 100%;
          background-color: #f5f7fa;
          font-size: 14px;
          color: #789ce2;
          vertical-align: middle;
          .image-slot {
            line-height: 13rem;
            width: 100%;
            text-align: center;
          }
        }
        &:hover {
          transform: translateY(-8px);
          box-shadow: 0 2px 10px 0 rgba(102, 102, 102, 0.1);
        }
        .image-title {
          color: rgb(120, 120, 120);
          font-size: 1.25rem;
          line-height: 2rem;
          text-align: center;
          background-color: #fff;
        }
      }
    }
  }
</style>