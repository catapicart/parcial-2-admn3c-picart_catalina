<template>
  <div class="home">
    <h1>Bienvenido a 4 fotos 1 palabra</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<style lang="scss" scoped>
  .home{
    background-color:rgb(62, 13, 90) !important;
    height: 100vh;
  }
  h1{
    padding: 40px;
  }
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
