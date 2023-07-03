<template>
  <v-app>
   <v-container v-for="card in cards" :key="card.id" :img="card.imagen" :val="card.value" :len="card.length" :pista="card.pista">
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
      <v-otp-input
      width="100px"
      height="30px"
  :length="card.length" :value="card.value"
  ></v-otp-input>
  <v-chip
      class="ma-2"
      color="red"
      @click="pista"
    >
      Pista
    </v-chip>
    </v-card-title>

    <v-card-text
    
    v-if="pistashow">
     Pista: {{ card.pista }}
    </v-card-text>

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
</style>

<script>

  export default {
    name: 'MainCard',
    props: ['id', 'img'],
    data: () => ({
      show: false,
      pistashow: '',
      cards: [
        {
          id: 1,
          imagen: 'imagen1.png',
          length: 7,
          value: 'F',
          pista: 'País de Europa'
        },
        {
          id: 2,
          imagen: 'imagen2.jpg',
          length: 6,
          value: 'F',
          pista: 'Fácil de romper'
        },
        {
          id: 3,
          imagen: 'imagen3.png',
          length: 5,
          value: 'A',
          pista: 'Material que se encuentra en las playas fácilmente'
        },
        {
          id: 4,
          imagen: 'imagen4.jpg',
          length: 5,
          value: 'C',
          pista: 'Ir hacia abajo'
        },
      ]
    }),
  methods: {
    getImgUrl: function (imagePath) {
      return require('@/assets/' + imagePath);
    },
    pista(){
      this.pistashow = true;
    }
  }
  }
</script>
