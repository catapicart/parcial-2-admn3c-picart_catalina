<template>
  <div class="home">
    <div class="inicio">
      <h1>Bienvenido a 4 fotos 1 palabra</h1>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>

    <TableResults />
  </div>
</template>

<style lang="scss" scoped>
  .home{
    background-color:rgb(62, 13, 90) !important;
    height: 100vh;
    padding: 20px;
    width: 100%;
  }
  .inicio{
    padding: 5%;
    border: 15px;
    border-radius: 5px;
    width: 88%;
    margin: auto;
  }
  h1{
    font-size: 1.6rem;
    padding: 40px;
    color: rgb(255, 255, 255);
  }
  img{
    width: 10%;
  }
  p{
    color: rgb(202, 201, 201);
    background-color:rgb(62, 13, 90) !important;

  }
  @media screen and (min-width: 520px ) {
  .inicio{
    width: 80%;
  }
}
@media screen and (min-width: 920px ) {
  .inicio{
    width: 50%;
  }
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import TableResults from '@/components/TableResults.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TableResults
  }
}
</script>
