<template>
  <v-app>
   <v-container v-for="card in cards" :key="card.id" :img="card.imagen" :val="card.value" :len="card.maxlength" :pista="card.pista" :respuesta="card.respuesta">
    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
    :src="getImgUrl(card.imagen)" 
      height="350px"
      width="350px"
    ></v-img>

    <v-card-title
    >
      <v-text-field
      :id="card.id"
      width="100px"
      height="50px"
      :maxlength="card.maxlength" 
      :value="card.value"
  ></v-text-field>
  
    <div>

    </div>

    </v-card-title>
<v-chip
      class="ma-2"
      color="red"
      @click="pista"
    >
      Pista
    </v-chip>
    <v-card-text
    v-if="pistashow">
     Pista: {{ card.pista }}
    </v-card-text>

    <v-btn block
    @click="comprobar(card.id, card.respuesta, card.maxlength)">
    Block Button
  </v-btn>
  </v-card>
  </v-container> 
  </v-app>
</template>

<style lang="scss">
  .boton{
    margin: 18px auto;
    width: 85%;
    background-color: #d4055f;
    border: 15px;
    border-radius: 15px;
    
  }
  .boton:hover{
    background-color: #E90064;
    color: white;
  }
  .start{
    color: white;
    text-decoration: none;
  }
  h1{
    padding: 40px;
    color: white;
  }
  input{
    text-transform: uppercase;
    text-align: center;
    font-weight: 800;
    font-size: 2.5rem;
    padding: 10px;
  }
  .divalertas{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .alerta{
    text-align: center;
    padding: 10px;
    background-color: rgb(216, 110, 110);
  }
</style>

<script>
// import { readonly } from 'vue';


  export default {
    name: 'MainCard',
    props: ['id', 'img'],
    data: () => ({
      show: false,
      pistashow: '',
      field: '',
      cards: [
        {
          id: '1',
          imagen: 'imagen1.png',
          maxlength: 7,
          value: 'F',
          pista: 'País de Europa',
          respuesta: 'FRANCIA'
        },
        {
          id: '2',
          imagen: 'imagen2.jpg',
          maxlength: 6,
          value: 'F',
          pista: 'Fácil de romper',
          respuesta: 'FRAGIL'
        },
        {
          id: '3',
          imagen: 'imagen3.png',
          maxlength: 5,
          value: 'A',
          pista: 'Material que se encuentra en las playas fácilmente',
          respuesta: 'ARENA'
        },
        {
          id: '4',
          imagen: 'imagen4.jpg',
          maxlength: 5,
          value: 'C',
          pista: 'Ir hacia abajo',
          respuesta: 'CAIDA'
        },
      ]
    }),
  methods: {
    getImgUrl: function (imagePath) {
      return require('@/assets/' + imagePath);
    },
    pista(){
      this.pistashow = true;
    },
    comprobar(cardId, cardR, len){
      this.field = document.getElementById(cardId);
      this.respuesta = this.field.value.toUpperCase();
      if(this.respuesta.length < len){ //Si la cantidad de letras es menor a la requerida 
        this.padre = this.field.parentElement;
        this.padre.parentElement.nextSibling.innerHTML = `<div class="divalertas"><p class="alerta">Faltan letras</p></div>`;
      }
      if(this.respuesta == cardR){
        console.log('bien', cardR);
        this.field.setAttribute("disabled", "");
        this.field.style.backgroundColor="lightgreen";
      }
    }
  }
  }
</script>
