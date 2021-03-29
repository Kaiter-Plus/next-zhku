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
            title: '现代农业研究院',
            href: 'javascript:void(0)'
          },
          {
            title: '仲恺文化研究所',
            href: 'javascript:void(0)'
          },
          {
            title: '廖承志与池田大作研究中心',
            href: 'javascript:void(0)'
          },
        ]
      }
    },
    components: {
      LinkContainer
    }
  }
</script>