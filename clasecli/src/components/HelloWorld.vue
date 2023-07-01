<template>
   <v-container>
    <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card ref="form">
        <v-card-text>
          <v-text-field
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
            color="primary"
            text
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
    >
    <router-link to="/about" class="start">Comenzar el juego</router-link>
  </v-container>

     <!-- <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
      
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>-->
  </v-container> 
</template>

<style lang="scss">
  .boton{
    margin: 18px auto;
    background-color: rgb(87, 52, 6);
    
  }
  .start{
    color: white;
    text-decoration: none;
  }
  h1{
    padding: 40px;
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
