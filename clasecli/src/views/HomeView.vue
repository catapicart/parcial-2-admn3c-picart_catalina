<template>
  <div class="home">
    <h1>Bienvenido a 4 fotos 1 palabra</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<style lang="scss" scoped>
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
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
