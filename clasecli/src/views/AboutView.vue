<template>
  <div>
    <h1>Jugando</h1>
    <MainCard/>
  </div>
</template>

<style lang="scss" scoped>
  .home{
    background-color: grey !important;
    height: 100vh;
  }
  h1{
    color: black;
    padding: 40px;
  }
</style>

<script>
// @ is an alias to /src
import MainCard from '@/components/MainCard.vue'

export default {
  name: 'main-card',
  components: {
    MainCard
  }
}
</script>