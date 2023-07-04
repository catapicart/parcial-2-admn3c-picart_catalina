<template>
   <v-container>
    <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card ref="form"
      dark>
        <v-card-text>
          <v-text-field
          class="name"
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'Por favor, ingresa tu nombre']"
            :error-messages="errorMessages"
            label="Nombre"
            placeholder="Juan"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green"
            @click="guardar"
          >
           Guardar
          </v-btn> 
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

  <v-container 
  class="boton"
  v-if="guardado"
    >
    <router-link to="/about" class="start">COMENZAR EL JUEGO</router-link>
  </v-container>

  </v-container> 
</template>

<style lang="scss">
  button.v-btn{
    background-color: #8d0d45 !important;

  }
  .boton{
    margin: 18px auto;
    width: 85%;
    padding: 18px;
    background-color: #b80754;
    border: 15px;
    border-radius: 5px;
    
  }
  .boton:hover{
    background-color: #E90064;
    color: white;
  }
  .start{
    color: white;
    text-decoration: none;
  }
  .name{
    font-size: 1rem;
  }
  
</style>

<script>
  export default {
    name: 'HelloWorld',
    data: () => ({
      name: null,
      guardado: false,
      errorMessages: '',
      formHasErrors: false,
    }),

    computed: {
      form () {
        return {
          name: this.name,
        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    methods: {
      guardar () {
        this.formHasErrors = false

    Object.keys(this.form).forEach(f => {
      if (!this.form[f]) this.formHasErrors = true
    this.$refs[f].validate(true)
      })
        localStorage.setItem("usuario", this.name);
        this.guardado = true;
        return true
      },
    },
  }
</script>
