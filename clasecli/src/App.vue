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
  font-family:  Verdana, Geneva, Tahoma, sans-serif, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
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
  }
  p{
    font-size: 1rem;
    color: white;
    font-weight: 800;
  }
}

@media screen and (min-width: 520px ) {
  #logo{
    width: 5%;
  }

  
}

@media screen and (min-width: 920px ) {
  #logo{
    width: 3%;
  }

  
}
</style>
