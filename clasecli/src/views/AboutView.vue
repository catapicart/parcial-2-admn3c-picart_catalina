<template>
  <div class="home">
    <h1>Jugando</h1>
    <p>holaa</p>
    <MainCard/>
  </div>
</template>

<style lang="scss">
  .home{
    background-color: rgb(43,40,187); 
    background: linear-gradient(180deg, rgba(43,40,187,1) 0%, rgba(117,19,210,1) 100%);
    background-repeat: no-repeat;
    height: 100vh;
  }
  h1{
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