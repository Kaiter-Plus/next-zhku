<template>
  <div class="school-constitution" v-if="pdf" v-loading="loading">
    <vue-pdf :page="pageNum" :src="pdf.content" @progress="loadedRatio=$event" @num-pages="total=$event" />
    <pagination v-if="total>0" :total="total" :page.sync="page" @pagination="currentPage" layout="prev, pager, next"
      :limit="1" />
  </div>
</template>

<script>
// 请求
import { fetchSchoolConstitution } from 'api/image'

// 导入组件
import Pagination from 'components/common/Pagination/index.vue'
import VuePdf from 'vue-pdf'
export default {
  name: 'SchoolConstitution',
  components: { VuePdf, Pagination },
  data() {
    return {
      // 开发时使用
      pdf: null,
      pageNum: 1,
      total: 0,
      loadedRatio: 0,
      page: 1,
      loading: false
    }
  },
  created() {
    this.loading = true
    fetchSchoolConstitution().then(({ data }) => {
      this.pdf = data
      this.loading = false
      this.getNumPages()
    })
  },
  methods: {
    // 当前页
    currentPage({ page }) {
      this.pageNum = page
    },
    // 获取所有页数
    getNumPages() {
      let loadingTask = VuePdf.createLoadingTask(this.pdf.content)
      loadingTask.promise.then(pdf => {
        this.numPages = pdf.numPages
      }).catch(err => {
        console.error('pdf 加载失败', err);
      })
    }
  },
}
</script>

<style lang="less" scoped>
.school-constitution {
  text-align: center;
  .page {
    margin: 0.875rem 0;
  }
}
</style>