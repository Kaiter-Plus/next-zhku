<template>
  <div class="friend-link">
    <div class="friend-link-wrap">
      <div class="link-title">
        <span class="icon">🌹</span>
        <em class="title">{{linkTitle}}</em>
      </div>
      <div class="link-content">
        <a href="javascript:void 0">友情链接</a>
        <a href="javascript:void 0">友情链接</a>
        <a href="javascript:void 0">友情链接</a>
        <a href="javascript:void 0">友情链接</a>
        <a href="javascript:void 0">友情链接</a>
        <a href="javascript:void 0">友情链接</a>
        <a href="javascript:void 0">友情链接</a>
        <a href="javascript:void 0">友情链接</a>
        <a href="javascript:void 0">友情链接</a>
        <a href="javascript:void 0">友情链接</a>
        <a href="javascript:void 0">友情链接</a>
        <a href="javascript:void 0">友情链接</a>
        <a href="javascript:void 0">友情链接</a>
        <a href="javascript:void 0">友情链接</a>
        <a href="javascript:void 0">友情链接</a>
        <a href="javascript:void 0">友情链接</a>
        <a href="javascript:void 0">友情链接</a>
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
        a {
          text-decoration: none;
          color: #555666;
          display: inline-block;
          border: 1px solid #e8e8ed;
          padding: 0 2rem;
          line-height: 2.5rem;
          border-radius: 0.25rem;
          margin-right: 1rem;
          font-size: 0.9375rem;
          margin-bottom: 0.3125rem;
          &:link,
          &:visited {
            color: #555666;
          }
          &:hover,
          &:active {
            border: 1px solid rgba(39, 174, 96, 0.11);
          }
        }
      }
    }
  }
</style>