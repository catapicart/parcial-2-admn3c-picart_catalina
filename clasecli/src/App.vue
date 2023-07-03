<template>
  <div id="app">
    <nav>
      <img src="./assets/4f1p_logo.png" alt="Logo de 4 fotos 1 palabra" id="logo">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logo{
  width: 10%;
  margin: 15px;
}
nav {
  height: 90px;
  background-color: rgb(39, 4, 71);
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  p{
    font-size: 1rem;
    color: white;
    font-weight: 800;
  }
}
</style>
