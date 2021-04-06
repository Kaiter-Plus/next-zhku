<template>
  <div class="school-profile">
    <page-cli :sideBarList="schoolProfileList" :title="title" />
  </div>
</template>

<script>
  import PageCli from 'components/content/PageCli.vue'

  export default {
    name: 'SchoolProfile',
    data() {
      return {
        title: '学校概况',
        schoolProfileList: [
          {
            title: '学校介绍',
            path: 'school-introduce'
          },
          {
            title: '现任领导',
            path: 'incumbent'
          },
          {
            title: '领导关怀',
            path: 'leader-care'
          },
          {
            title: '校园风光',
            path: 'school-scenery'
          },
          {
            title: '学校章程',
            path: 'school-constitution'
          },
        ]
      }
    },
    beforeRouteLeave(to, from, next) {
      this.$store.commit('setSideBarIndex', 0)
      next()
    },
    components: {
      PageCli
    }
  }
</script>