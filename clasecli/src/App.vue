<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
      <nav class="d-flex align-center justify-center">
        <v-img
          alt="Superquiz Logo"
          src="./assets/superquiz-logo.png"
          transition="scale-transition"
          width="40"
        />
      </nav>

      <!-- <v-spacer></v-spacer> -->
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
