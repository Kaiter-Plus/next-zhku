<template>
  <div class="organization-setup">
    <page-cli :sideBarList="organizationSetupList" :title="title" :classList="['iconfont', 'icon-jigou']" />
  </div>
</template>

<script>
  import PageCli from 'components/content/PageCli.vue'

  export default {
    name: 'OrganizationSetup',
    data() {
      return {
        title: '机构设置',
        organizationSetupList: [
          {
            title: '管理机构',
            path: 'management-org'
          },
          {
            title: '教学及教辅机构',
            path: 'teaching-and-auxiliary-org'
          },
          {
            title: '研究机构',
            path: 'research-org'
          }
        ]
      }
    },
    components: {
      PageCli
    }
  }
</script>