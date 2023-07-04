<template>
  <v-app>
    <v-btn
    elevation="2"
    fab
    text
    tile
    width="fit-content"
    disabled
    id="pista-alert"
    color="white"
  >{{ this.pistas }} pistas</v-btn>

   <v-container v-for="card in cards" :key="card.id" :img="card.imagen" :val="card.value" :len="card.maxlength" :pista="card.pista" :respuesta="card.respuesta" class="componente" :pistaid="card.pistaid" :pistash="card.pistashow" :bid="card.btnid">
    <v-card
    class="mx-auto"
    max-width="344"
    dark
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
<v-btn
      class="ma-2 pista-btn"
      color="yellow"
      light
      :id="card.btnid"
      @click="pista(card.pistaid, card.btnid)"
    >
      Pista
    </v-btn>
    <v-card-text
    class="d-none"
    :id="card.pistaid">
     Pista: {{ card.pista }}
    </v-card-text>

    <v-btn block
    color="green"
    height="50px"
    @click="comprobar(card.id, card.respuesta, card.maxlength)">
    CHEQUEAR PALABRA
  </v-btn>
  </v-card>
  </v-container> 
  </v-app>
</template>

<style lang="scss">
  .container{
    background-color:rgb(62, 13, 90);
    border: none;
    outline: none;
  }
  div.v-card{
    background-color: black;
  }
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
    color: black;
    word-break: keep-all;
  }
  .componente{
    z-index: 1;
  }
  #pista-alert{
    position: fixed;
    margin: 75% 75%;
    z-index: 2;
    background-color: #b3165a;
    color: white !important;
    text-align: center;
    padding: 3px;
  }

</style>

<script>
// import { readonly } from 'vue';


  export default {
    name: 'MainCard',
    props: ['id', 'img'],
    data: () => ({
      show: false,
      field: '',
      pistas: 3,
      cards: [
        {
          id: '1',
          pistaid : 'p1',
          btnid : 'b1',
          imagen: 'imagen1.png',
          maxlength: 7,
          value: 'F',
          pista: 'País de Europa',
          respuesta: 'FRANCIA',
          pistashow: false
        },
        {
          id: '2',
          pistaid : 'p2',
          btnid : 'b2',
          imagen: 'imagen2.jpg',
          maxlength: 6,
          value: 'F',
          pista: 'Fácil de romper',
          respuesta: 'FRAGIL',
          pistashow: false
        },
        {
          id: '3',
          pistaid : 'p3',
          btnid : 'b3',
          imagen: 'imagen3.png',
          maxlength: 5,
          value: 'A',
          pista: 'Material que se encuentra en las playas fácilmente',
          respuesta: 'ARENA',
          pistashow: false
        },
        {
          id: '4',
          pistaid : 'p4',
          btnid : 'b4',
          imagen: 'imagen4.jpg',
          maxlength: 5,
          value: 'C',
          pista: 'Ir hacia abajo',
          respuesta: 'CAIDA',
          pistashow: false
        },
      ]
    }),
  methods: {
    getImgUrl: function (imagePath) {
      return require('@/assets/' + imagePath);
    },
    pista(pistaid, btnid){
      this.pistas--;
      document.getElementById(pistaid).classList.remove("d-none");
      document.getElementById(btnid).setAttribute("disabled", "");
      console.log(this.pistas);
      this.pistashow = true;
      if(this.pistas == 0){
        document.getElementById('pista-alert').innerText = 'SIN PISTAS';
        document.getElementById('b1').setAttribute("disabled", "");
        document.getElementById('b2').setAttribute("disabled", "");
        document.getElementById('b3').setAttribute("disabled", "");
        document.getElementById('b4').setAttribute("disabled", "");

      }
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
        this.field.style.backgroundColor="green";
        this.padre = this.field.parentElement;
        this.padre.parentElement.nextSibling.innerHTML = `<div class="divalertas"><p class="alerta green">¡Correcto!</p></div>`;
      }else{
        this.padre = this.field.parentElement;
        this.padre.parentElement.nextSibling.innerHTML = `<div class="divalertas"><p class="alerta">Palabra incorrecta. Vuelve a intentarlo</p></div>`;
        // this.field.value = '';
      }
    }
  }
  }
</script>
