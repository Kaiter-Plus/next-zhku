<template>
  <div class="school-constitution">
    <pdf :page="pageNum" :src="url" @progress="loadedRatio = $event" @num-pages="pageTotalNum=$event"></pdf>
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left" size="mini" @click="prePage">上一页</el-button>
      <el-button type="primary" size="mini" @click="nextPage">下一页<i class="el-icon-arrow-right el-icon--right"></i>
      </el-button>
    </el-button-group>
    <div style="marginTop: 10px; color: #409EFF">{{ pageNum }} / {{ pageTotalNum }}</div>
  </div>
</template>

<script>
  import pdf from 'vue-pdf'
  export default {
    data() {
      return {
        url: './zc.pdf',
        pageNum: 1,
        pageTotalNum: 1,
        loadedRatio: 0
      }
    },
    mounted() {
      this.getNumPages()
    },
    methods: {
      // 上一页
      prePage() {
        let page = this.pageNum
        page = page > 1 ? page - 1 : this.pageTotalNum
        this.pageNum = page
      },

      // 下一页
      nextPage() {
        let page = this.pageNum
        page = page < this.pageTotalNum ? page + 1 : 1
        this.pageNum = page
      },
      getNumPages() {
        let loadingTask = pdf.createLoadingTask(this.url)
        loadingTask.promise.then(pdf => {
          this.numPages = pdf.numPages
          // console.log(this.numPages);
        }).catch(err => {
          console.error('pdf 加载失败', err);
        })
      }
    },
    components: {
      pdf
    }
  }
</script>

<style lang="less" scoped>
  .school-constitution {
    text-align: center;
  }
</style>