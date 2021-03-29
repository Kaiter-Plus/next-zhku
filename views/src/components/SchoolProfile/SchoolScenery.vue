<template>
  <div class="school-scenery">
    <div class="gallery">
      <div class="gallery-item" v-for="i in 9" :key="i">
        <el-image class="image" :src="url" :preview-src-list="srcList">
          <div slot="placeholder" class="image-slot">
            <span class="tip">加载中...</span>
          </div>
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
        <div class="image-title">
          <span>{{i}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Incumbent',
    data() {
      return {
        url: 'https://www.zhku.edu.cn/images/pic1.jpg',
        srcList: ['https://www.zhku.edu.cn/images/pic1.jpg', '']
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
        margin-bottom: 1.5rem;
        box-sizing: content-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 2px solid #f2f2f2;
        border-radius: 4px;
        overflow: hidden;
        transition: all 0.3s;
        .image {
          height: auto;
          width: 100%;
          background-color: #f5f7fa;
          display: flex;
          justify-content: center;
          align-items: center;
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
        }
      }
    }
  }
</style>