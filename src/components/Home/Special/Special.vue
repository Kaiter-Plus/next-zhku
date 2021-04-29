<template>
  <div class="special" v-loading="loading">
    <div class="special-wrap">
      <div class="special-title">
        <div class="special-icon"></div>
        <em class="title">专题</em>
      </div>
      <el-row class="special-content">
        <special-item :specialCategories="specialCategories" />
      </el-row>
    </div>
  </div>
</template>

<script>
  // 导入请求
  import { getHomeSpecialCategoies } from 'api/special'

  // 组件
  import SpecialItem from 'components/Home/Special/SpecialItem.vue'

  export default {
    name: 'Special',
    components: { SpecialItem },
    data() {
      return {
        specialCategories: null,
        loading: false
      }
    },
    created() {
      this.loading = true
      getHomeSpecialCategoies().then(({ data }) => {
        this.specialCategories = data
        // 如果已经渠道数据，关闭加载动画
        this.loading = false
      })
    }
  }
</script>

<style lang="less" scoped>
  .special {
    position: relative;
    .special-wrap {
      margin: 1rem auto 0;
      width: 98%;
      .special-title {
        margin-bottom: 0.375rem;
        line-height: 2rem;
        padding-left: 1rem;
        .special-icon {
          display: inline-block;
          width: 1.25rem;
          height: 1.25rem;
          vertical-align: middle;
          background: url(~assets/img/icon/zhuanti.png) no-repeat;
          background-size: contain;
        }
        .title {
          color: #20232c;
          font-size: 1.125rem;
          margin-left: 5px;
          font-weight: bolder;
          vertical-align: middle;
          font-style: normal;
        }
      }
      .special-content {
        overflow: hidden;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-content: flex-start;
        padding: 0 0.75rem;
      }
    }
  }
</style>