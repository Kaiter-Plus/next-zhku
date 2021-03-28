<template>
  <div class="side-bar-container">
    <el-menu>
      <el-menu-item v-for="(spItem, index) in schoolProfileList" :index="index" :key="index"
        @click="switchPanel(spItem.path)">
        <i class="el-icon-location"></i>
        <span slot="title">{{spItem.title}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'SideBar',
    props: {
      schoolProfileList: Array
    },
    methods: {
      switchPanel(path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="less" scoped>
  .side-bar-container {
    margin-left: 1rem;
  }
  /deep/ .el-menu-item:focus,
  .el-menu-item:hover {
    color: #5cc989;
    outline: 0;
    background-color: rgba(31, 145, 78, 0.11);
  }
  /deep/ .el-menu-item.is-active {
    color: #5cc989;
    &::after {
      display: block;
      content: '';
      width: 0.125rem;
      height: 100%;
      background: #27ae60;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
</style>