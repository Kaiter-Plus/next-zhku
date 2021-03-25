<template>
  <div class="home">
    <!-- <vue-header :images="images"></vue-header> -->
    <vue-header></vue-header>
  </div>
</template>

<script>
  import VueHeader from 'components/Home/VueHeader.vue'

  export default {
    name: 'Home',
    // props: {
    //   images: Array
    // },
    components: {
      VueHeader
    }
  }
</script>
