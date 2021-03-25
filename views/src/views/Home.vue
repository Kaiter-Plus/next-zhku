<template>
  <div class="home">
    <!-- <vue-header :images="images"></vue-header> -->
    <main-container />
  </div>
</template>

<script>
  import MainContainer from 'components/MainContainer/MainContainer.vue'

  export default {
    name: 'Home',
    // props: {
    //   images: Array
    // },
    components: {
      MainContainer
    }
  }
</script>
