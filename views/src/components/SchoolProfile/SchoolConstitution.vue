<template>
  <div class="school-constitution">
    <pdf :page="pageNum" :src="url" @progress="loadedRatio=$event" @num-pages="pageTotalNum=$event"></pdf>
    <el-pagination small :page-size="1" class="page" @prev-click="prePage" @next-click="nextPage"
      @current-change="currentPage($event)" :current-page.sync="current" background layout="prev, pager, next"
      :total="pageTotalNum">
    </el-pagination>
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
        loadedRatio: 0,
        current: 1
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
      // 当前页
      currentPage(page) {
        this.pageNum = page
      },
      // 获取所有页数
      getNumPages() {
        let loadingTask = pdf.createLoadingTask(this.url)
        loadingTask.promise.then(pdf => {
          this.numPages = pdf.numPages
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
    .page {
      margin-bottom: 1rem;
    }
    /deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
      background-color: #27ae60;
    }
  }
</style>