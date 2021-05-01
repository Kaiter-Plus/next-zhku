<template>
  <div class="school-scenery" v-loading="loading">
    <div class="gallery">
      <div class="gallery-item" v-for="img in imgList" :key="img.id">
        <el-image class="image" :src="img.content" :preview-src-list="srcList">
          <div slot="placeholder" class="image-slot">
            <span class="tip">加载中...</span>
          </div>
          <div slot="error" class="image-slot">
            <i class="iconfont icon-xinwen"></i>
          </div>
        </el-image>
        <div class="image-title">
          <span>{{ img.title }}</span>
        </div>
      </div>
    </div>
    <pagination v-show="total>0" :total="total" :page.sync="pageQuery.page" :limit.sync="pageQuery.limit"
      @pagination="getSchoolScenery" style="background: transparent;" :pager-count="5" :small="true"
      layout="total, prev, pager, next" />
  </div>
</template>

<script>
// 请求
import { fetchSchoolScenery } from 'api/image'

// 组件
import Pagination from 'components/common/Pagination/index.vue'

export default {
  name: 'SchoolScenery',
  components: { Pagination },
  data() {
    return {
      imgList: null,
      total: 0,
      pageQuery: {
        page: 1,
        limit: 9
      },
      loading: false
    }
  },
  created() {
    this.getSchoolScenery()
  },
  computed: {
    srcList() {
      return this.imgList.map(v => v.content)
    }
  },
  methods: {
    getSchoolScenery() {
      // 加载动画
      this.loading = true
      fetchSchoolScenery(this.pageQuery).then(({ data }) => {
        this.imgList = data.item
        this.total = data.total
        // 数据请求完场，关闭加载动画
        this.loading = false
      })
    }
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
  ::v-deep .el-pagination {
    text-align: center;
  }
}
</style>