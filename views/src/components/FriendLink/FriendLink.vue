<template>
  <div class="friend-link">
    <div class="friend-link-wrap">
      <div class="link-title">
        <span class="icon">🌹</span>
        <em class="title">{{linkTitle}}</em>
      </div>
      <div class="link-content">
        <el-row>
          <el-col :xs="{span: 6}" :sm="{span: 4}" :md="{span: 3}">
            <a href="javascript:void(0)">
              <span>友情链接</span>
            </a>
          </el-col>
          <el-col :xs="{span: 6}" :sm="{span: 4}" :md="{span: 3}">
            <a href="javascript:void(0)">
              <span>友情链接友情链接</span>
            </a>
          </el-col>
          <el-col :xs="{span: 6}" :sm="{span: 4}" :md="{span: 3}">
            <a href="javascript:void(0)">
              <span>友情链接</span>
            </a>
          </el-col>
          <el-col :xs="{span: 6}" :sm="{span: 4}" :md="{span: 3}">
            <a href="javascript:void(0)">
              <span>友情链接</span>
            </a>
          </el-col>
          <el-col :xs="{span: 6}" :sm="{span: 4}" :md="{span: 3}">
            <a href="javascript:void(0)">
              <span>友情链接</span>
            </a>
          </el-col>
          <el-col :xs="{span: 6}" :sm="{span: 4}" :md="{span: 3}">
            <a href="javascript:void(0)">
              <span>友情链接</span>
            </a>
          </el-col>
          <el-col :xs="{span: 6}" :sm="{span: 4}" :md="{span: 3}">
            <a href="javascript:void(0)">
              <span>友情链接</span>
            </a>
          </el-col>
          <el-col :xs="{span: 6}" :sm="{span: 4}" :md="{span: 3}">
            <a href="javascript:void(0)">
              <span>友情链接</span>
            </a>
          </el-col>
          <el-col :xs="{span: 6}" :sm="{span: 4}" :md="{span: 3}">
            <a href="javascript:void(0)">
              <span>友情链接</span>
            </a>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FriendLink',
    props: {
      linkTitle: Array
    }
  }
</script>

<style lang="less" scoped>
  .friend-link {
    position: relative;
    .friend-link-wrap {
      margin: 1rem auto 0;
      width: 98%;
      .link-title {
        margin-bottom: 0.375rem;
        display: flex;
        justify-content: flex-start;
        line-height: 2rem;
        padding: 0.3rem 0 0 1rem;
        .icon {
          width: 32px;
          height: 32px;
          display: inline-block;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          text-align: center;
        }
        .title {
          color: #20232c;
          font-size: 18px;
          margin-left: 5px;
          font-weight: bolder;
          vertical-align: middle;
          font-style: normal;
        }
      }
      .link-content {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        a {
          align-items: center;
          text-decoration: none;
          color: #555666;
          display: inline-block;
          border: 1px solid #e8e8ed;
          padding: 0 2.5rem;
          border-radius: 0.25rem;
          font-size: 0.9375rem;
          margin-bottom: 0.3125rem;
          @media screen and (max-width: 1430px) {
            padding: 0 2rem;
          }
          @media screen and (max-width: 1300px) {
            padding: 0 1.5rem;
          }
          @media screen and (max-width: 490px) {
            padding: 0 0.5rem;
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
            width: 3.75rem;
            line-height: 2rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
</style>