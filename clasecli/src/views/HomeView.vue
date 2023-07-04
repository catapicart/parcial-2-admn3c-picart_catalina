<template>
  <div class="home">
    <div class="inicio">
      <h1>Bienvenido a 4 fotos 1 palabra</h1>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>

    <div class="info">
      <p>De los creadores de  <img src="../assets/superquiz-logo.png" alt="SuperQuiz"></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .home{
    background-color:rgb(62, 13, 90) !important;
    height: 100vh;
    padding: 20px;
  }
  .inicio{
    background-color: rgba(245, 245, 220, 0.671);
    padding: 5%;
    border: 15px;
    border-radius: 5px;
    width: 88%;
    margin: auto;
  }
  h1{
    font-size: 1.6rem;
    padding: 40px;
    color: rgb(26, 26, 26);
  }
  .info{
    margin-top: 40%;
  }
  img{
    width: 10%;
  }
  p{
    color: rgb(202, 201, 201);
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
