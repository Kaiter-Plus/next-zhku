<template>
  <el-row class="link-content" v-loading="loading">
    <el-col class="link-item" v-for="link in links" :key="link.id">
      <a :href="link.link">
        <span :title="link.title">{{link.title}}</span>
      </a>
    </el-col>
  </el-row>
</template>

<script>
// 请求
import { fetchLinks } from 'api/link'

export default {
  name: 'LinkContent',
  props: {
    category: {
      type: Number,
      require: true
    }
  },
  data() {
    return {
      links: null,
      loading: false
    }
  },
  created() {
    this.loading = true
    fetchLinks(this.category).then(({ data }) => {
      this.links = data
      this.loading = false
    })
  }
}
</script>

<style lang="less" scoped>
.link-content {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .link-item {
    width: auto;
    margin-right: 1rem;
  }
  a {
    align-items: center;
    text-decoration: none;
    color: #555666;
    display: inline-block;
    border: 1px solid #b5e7cb;
    padding: 0 2.2rem;
    border-radius: 0.25rem;
    font-size: 0.9375rem;
    margin-bottom: 0.3125rem;
    @media screen and (max-width: 1430px) {
      padding: 0 1.7rem;
    }
    @media screen and (max-width: 1300px) {
      padding: 0 1.5rem;
    }
    @media screen and (max-width: 540px) {
      padding: 0px 1.2rem;
    }
    @media screen and (max-width: 490px) {
      padding: 0px 0.2rem;
      font-size: 14px;
    }
    &:link,
    &:visited {
      color: #555666;
    }
    &:hover,
    &:active {
      border: 1px solid rgba(39, 174, 96, 0.11);
    }
    span {
      display: inline-block;
      line-height: 2rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>