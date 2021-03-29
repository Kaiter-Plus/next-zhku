<template>
  <div class="management-org">
    <link-container :links="links" />
  </div>
</template>

<script>
  import LinkContainer from 'components/content/LinkContainer.vue'



  export default {
    name: 'ManegementOrg',
    data() {
      return {
        links: [
          {
            title: '党政办公室（白云校区办公室）',
            href: 'javascript:void(0)'
          },
          {
            title: '组织部（党校办公室）',
            href: 'javascript:void(0)'
          },
          {
            title: '党委宣传部',
            href: 'javascript:void(0)'
          },
          {
            title: '纪检监察室',
            href: 'javascript:void(0)'
          },
          {
            title: '党委学生工作部（武装部）、学生处',
            href: 'javascript:void(0)'
          },
          {
            title: '离退休工作处',
            href: 'javascript:void(0)'
          },
          {
            title: '发展规划处',
            href: 'javascript:void(0)'
          },
          {
            title: '人事处',
            href: 'javascript:void(0)'
          },
          {
            title: '教务处',
            href: 'javascript:void(0)'
          },
          {
            title: '科技处',
            href: 'javascript:void(0)'
          },
          {
            title: '外事处(港澳台事务办公室）',
            href: 'javascript:void(0)'
          },
          {
            title: '财务处',
            href: 'javascript:void(0)'
          },
          {
            title: '审计处',
            href: 'javascript:void(0)'
          },
          {
            title: '基建处',
            href: 'javascript:void(0)'
          },
          {
            title: '后勤与资产管理处',
            href: 'javascript:void(0)'
          },
          {
            title: '实验室与设备管理处',
            href: 'javascript:void(0)'
          },
          {
            title: '招投标办公室',
            href: 'javascript:void(0)'
          },
          {
            title: '保卫处',
            href: 'javascript:void(0)'
          },
          {
            title: '工会',
            href: 'javascript:void(0)'
          },
          {
            title: '团委',
            href: 'javascript:void(0)'
          }
        ]
      }
    },
    components: {
      LinkContainer
    }
  }
</script>