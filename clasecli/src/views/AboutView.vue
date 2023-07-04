<template>
  <div class="container">
    <div class="inicio">
      <h1>4 fotos 1 palabra</h1>
      <p class="texto">¡Bien, <span id="nombre"></span> ! Es hora de jugar, mira atentamente las imágenes y descubre qué palabra es. Aprieta chequear palabra cuando estés listo. ¡No olvides que tenes 3 pistas!</p>
    </div>
    <MainCard/>
  </div>
</template>

<style lang="scss" scoped>
  .container{
    background-color:rgb(62, 13, 90) !important;
    height: 100%;
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
    color: black;
    margin: 0;
    padding: 0;
  }
  .texto{
    padding: 20px;
    color: rgb(0, 0, 0);
  }
</style>

<script>
// @ is an alias to /src
import MainCard from '@/components/MainCard.vue'

export default {
  name: 'main-card',
  components: {
    MainCard
  },
  mounted() {
        var datoGuardado = localStorage.getItem("usuario");
        var nombreMay = datoGuardado[0].toUpperCase() + datoGuardado.substring(1);
        var nombre = document.getElementById('nombre');
        nombre.innerHTML = `${nombreMay}`
    }
}
</script>