<template>
  <div class="special-wrap">
    <div class="special-container">
      <div class="special-title">
        <div class="title-wrap">
          <div class="special-icon"></div>
          <em class="title">{{ title }}</em>
        </div>
      </div>
      <el-row class="special-item" v-loading="loading">
        <el-col class="special-item-wrap" :span="24">
          <el-row class="item-list">
            <el-col class="item" :span="11" :xs="{span: 22}" v-for="special in specialList" :key="special.id">
              <router-link :to="{path:`/show/${type}/${special.title}`,query:{id:special.id}}" :title="special.title">
                <p>{{special.title}}</p>
                <p>{{special.publishTime | formatDateFilter}}</p>
              </router-link>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <pagination style="background: transparent;text-align:center" v-if="total>0" :total="total"
      :page.sync="pageQuery.page" :limit.sync="pageQuery.limit" @pagination="getData" layout="prev, pager, next"
      :pager-count="5" :small="true" />
  </div>
</template>

<script>
// 请求
import { getSpecial } from 'api/special'

// 分页组件
import Pagination from 'components/common/Pagination/index.vue'

export default {
  name: 'MoreSpecial',
  components: { Pagination },
  filters: {
    formatDateFilter(date) {
      return new Date(date).toLocaleDateString()
    }
  },
  data() {
    return {
      title: null,
      categoryId: null,
      specialList: null,
      // 加载状态
      loading: false,
      total: 0,
      pageQuery: {
        page: 1,
        limit: 30
      },
      type: 'special'
    }
  },
  created() {
    this.title = this.$route.params.title
    this.categoryId = this.$route.query.id
    this.getData()
  },
  methods: {
    getData() {
      getSpecial(this.categoryId, this.pageQuery).then(({ data }) => {
        this.specialList = data.list
        this.total = data.total
      })
    }
  },
  // 防止组件复用不更新数据
  activated() {
    this.title = this.$route.params.title
    this.categoryId = this.$route.query.id
    this.getData()
  }
}
</script>

<style lang="less" scoped>
.special-wrap {
  position: relative;
  .special-container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 2rem auto;
    overflow: hidden;
    width: 98%;
    .special-title {
      margin-bottom: 0.375rem;
      display: flex;
      justify-content: flex-start;
      line-height: 2rem;
      .title-wrap {
        margin-left: 1rem;
        .special-icon {
          display: inline-block;
          width: 1.25rem;
          height: 1.25rem;
          vertical-align: middle;
          background: url(~assets/img/icon/hongqi.png) no-repeat;
          background-size: contain;
        }
        .title {
          color: #20232c;
          font-size: 1.125rem;
          margin-left: 0.3125rem;
          font-weight: bolder;
          vertical-align: middle;
          font-style: normal;
        }
      }
    }
    .special-item-wrap {
      flex: 1;
      overflow: hidden;
      .item-list {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-content: flex-start;
        width: 100%;
        .item {
          display: flex;
          height: 2.5rem;
          margin: 0.25rem 0.625rem 0.5rem;
          background: #ffffff90;
          box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
          border-radius: 0.25rem;
          a {
            display: flex;
            text-decoration: none;
            width: 100%;
            height: 100%;
            justify-content: space-between;
            p {
              display: block;
              font-size: 14px;
              font-weight: 400;
              line-height: 2.5rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              &:nth-child(1) {
                flex: 1;
                margin-left: 0.625rem;
              }
              &:nth-child(2) {
                width: 4.5rem;
                margin-right: 0.625rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>