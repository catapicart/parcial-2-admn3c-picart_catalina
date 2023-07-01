<template>
  <div class="home">
    <h1>Bienvenido a 4 fotos 1 palabra</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-link to="/about">Comenzar el juego</router-link>
  </div>
</template>

<style lang="scss">
  .home{
    background-color: burlywood;
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
