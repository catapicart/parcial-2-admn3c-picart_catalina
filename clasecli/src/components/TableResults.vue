<template>
     <div>
      <h2>Última vez jugado</h2>
      <v-simple-table>
        <thead>
          <th>Usuario</th>
          <th>Fecha</th>
          <th>Correctas</th>
          <th>Incorrectas</th>
        </thead>
        <tr>
          <td>{{ this.usuario }}</td>
          <td>{{this.fecha }}</td>
          <td>{{ this.correctas }}</td>
          <td>{{ this.incorrectas }}</td>
        </tr>
      </v-simple-table>
    </div>
</template>

<style lang="scss" scoped>
div{
    background-color: rgba(240, 248, 255, 0.733);
    margin: 4% auto;
}
h2{
    text-align: center;
    color: rgb(24, 24, 24);
    font-size: 1.1rem;
    padding: 20px;
}
div.v-data-table{
    margin: 0;
    background-color: rgba(240, 248, 255, 0.562);
}
td , th{
    padding: 5px;
}
th{
    background-color: rgba(101, 0, 141, 0.521);
}

@media screen and (min-width: 520px ) {
  div{
    width: 70%;
    margin: 10% auto;
  }
  div.v-data-table{
    width:100%;
  }
}
@media screen and (min-width: 920px ) {
    div{
    width: 40%;
    margin: 10% auto;
  }
  div.v-data-table{
    width:100%;
  }
}
</style>


<script>
    export default{
        name: 'TableResults',
        data: () => ({
            usuario: localStorage.getItem('usuario') != 'null' ? localStorage.getItem('usuario') : '-',
            fecha: localStorage.getItem('fecha') != 'null' ? localStorage.getItem('fecha') : '-',
            correctas: localStorage.getItem('correctas') != 'null' ? localStorage.getItem('correctas') : '-',
            incorrectas: localStorage.getItem('incorrectas') != 'null' ? localStorage.getItem('incorrectas') : '-',
        }) 
    }
</script>