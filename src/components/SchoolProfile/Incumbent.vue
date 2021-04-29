<template>
  <div class="incumbent">
    <div class="gallery">
      <div class="gallery-item" v-for="(img, index) in imgList" :key="img.id">
        <el-image class="image" :src="img.content" :preview-src-list="srcList">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
        <div class="image-title" @click="dialogVisible[index] = true">
          {{ img.title }}
        </div>
        <template slot-scope="{img}">
          <el-dialog :title="img.title" :visible.sync="dialogVisible[index]" width="80%">
            <h2>简介</h2>
            <div v-html="img.introduction"></div>
            <h2>成就</h2>
            <div v-html="img.achievement"></div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible[index] = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible[index] = false">确 定</el-button>
            </span>
          </el-dialog>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
// 请求
import { fetchIncumbent } from 'api/image'

export default {
  name: 'Incumbent',
  data() {
    return {
      imgList: null,
      dialogVisible: null,
      loading: false
    }
  },
  created() {
    // 加载动画
    this.loading = true
    fetchIncumbent().then(({ data }) => {
      this.imgList = data
      this.dialogVisible = data.map(() => false)
      // 数据请求完场，关闭加载动画
      this.loading = false
    })
  },
  computed: {
    srcList() {
      return this.imgList.map(v => v.content)
    }
  }
}
</script>

<style lang="less" scoped>
.incumbent {
  .gallery {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .gallery-item {
      width: 20%;
      margin: 1.5rem 0;
      box-sizing: content-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: 2px solid #f2f2f2;
      border-radius: 4px;
      overflow: hidden;
      transition: all 0.3s;
      display: flex;
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
        font-size: 1rem;
        line-height: 2rem;
        text-align: center;
        background-color: #fff;
        flex: 1;
      }
    }
  }
}
</style>