<template>
  <v-app
  class="contenedor">
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

   <v-container v-for="card in cards" :key="card.id" :img="card.imagen" :val="card.value" :len="card.maxlength" :pista="card.pista" :respuesta="card.respuesta" class="componente" :pistaid="card.pistaid" :pistash="card.pistashow" :bid="card.btnid" :cid="card.checkid">
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
      :color="card.pistashow == false ? 'yellow': 'green' "
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
    :id="card.checkid"
    @click="comprobar(card.id, card.respuesta, card.maxlength, card.checkid)">
    CHEQUEAR PALABRA
  </v-btn>
  </v-card>
  </v-container> 


  <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card
      dark>
        <v-card-title class="text-h5">
          ¡Felicitaciones!
        </v-card-title>

        <v-card-text>
          ¡Genial, {{ this.usuario }}! Has completado el juego. Estos son tus resultados:
          <ul>
            <li>Correctas: {{ this.contadorCorrectas }}</li>
            <li>Intentos fallidos: {{ this.contadorIncorrectas }}</li>
          </ul>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-container 
            class="boton"
            dark
              >
        <router-link to="/" class="start">Volver al inicio</router-link>
        </v-container>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<style lang="scss">
  .contenedor{
    background-color:rgb(62, 13, 90) !important;
    border: none;
    outline: none;
    width: 100%;
    margin: 0;
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
    color: white;
    
  }
  .boton:hover{
    background-color: #E90064;
    color: white;
  }
  .start.router-link-active{
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
    margin: 65% 75%;
    z-index: 2;
    background-color: #b3165a;
    color: white !important;
    text-align: center;
    padding: 3px;
  }
  @media screen and (min-width: 520px ) {
    #pista-alert{
      margin: 65% 80%;
  }
}
@media screen and (min-width: 920px ) {
    #pista-alert{
      margin: 5% 80%;
  }
}
</style>

<script>


  export default {
    name: 'MainCard',
    props: ['id', 'img'],
    data: () => ({
      show: false,
      field: '',
      pistas: 3,
      contadorIncorrectas : 0,
      contadorCorrectas : 0,
      dialog: false,
      usuario: localStorage.getItem("usuario"),
      cards: [
        {
          id: '1',
          pistaid : 'p1',
          btnid : 'b1',
          checkid: 'c1',
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
          checkid: 'c2',
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
          checkid: 'c3',
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
          checkid: 'c4',
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
      this.pistashow = true;
      if(this.pistas < 0){
        document.getElementById('pista-alert').innerText = 'SIN PISTAS';
        document.getElementById(pistaid).innerHTML= `Sin pistas`;
        document.getElementById(pistaid).classList.remove("d-none");

      }
    },
    comprobar(cardId, cardR, len, checkid){
      this.field = document.getElementById(cardId);
      this.respuesta = this.field.value.toUpperCase();
      if(this.respuesta.length < len){ //Si la cantidad de letras es menor a la requerida 
        this.padre = this.field.parentElement;
        this.padre.parentElement.nextSibling.innerHTML = `<div class="divalertas"><p class="alerta">Faltan letras</p></div>`;
      }else{

        if(this.respuesta == cardR){ //si es correcta
        this.field.setAttribute("disabled", "");
        this.field.style.backgroundColor="green";
        this.padre = this.field.parentElement;
        this.padre.parentElement.nextSibling.innerHTML = `<div class="divalertas"><p class="alerta green">¡Correcto!</p></div>`;
        document.getElementById(checkid).setAttribute("disabled", "");

        this.contadorCorrectas++;
        if(this.contadorCorrectas == 4){
          this.dialog = true;
        }

      }else{//si es incorrecta
        this.padre = this.field.parentElement;
        this.padre.parentElement.nextSibling.innerHTML = `<div class="divalertas"><p class="alerta">Palabra incorrecta. Vuelve a intentarlo</p></div>`;
        this.contadorIncorrectas++;
      }
      }

    }
  }
  }
</script>
