Vue.component('primer-componente',{
    template: `
    <div class=card>
        <p class=card-body>Este es mi primer componente, sin interpolaciones ni metodos, solo HtML</p>
    </div>`
})

Vue.component('segundo-componente',{
    data: function(){
        return{
            mensaje: 'Este componente tiene data e interpolacion'
        }
    },
    template: `
    <div class=card>
        <p class=card-body>{{mensaje}}</p>
    </div>`
})

Vue.component('tercer-componente',{
    data: function(){
        return{
            mensajeData: 'Este componente tiene data e interpolacion'
        }
    },
    props: ['mensajeProp'],
    template: `
    <div class="card">
        <p class="card-body">{{mensajeData}}</p>
        <p class="card-body">{{mensajeProp}}</p>
    </div>`
})


Vue.component('cuarto-componente',{
    data: function(){
        return{
            mensajeData: 'Este componente tiene props e iteracion'
        }
    },
    props: ['nombre', 'apellido'],
    template: `
    <div class="card">
        <p class="card-body">{{nombre}}</p>
        <p class="card-body">{{apellido}}</p>
        <p class="card-body">{{mensajeData}}</p>
    </div>`
})


  Vue.component('pregunta-quiz',{
      props: ['id', 'pregunta', 'respuesta', 'valorCorrecto', 'categoria', 'icono', 'alt'],
      template: `
          <div :id='id'>
              <div>
                  <h3>{{pregunta}}</h3>
                  <img v-bind:src='icono' :alt='alt'>
              </div>
              <div>
              <label><input type="radio" value="verdadero" :name='id' v-model="respuesta" class="btn-check" >Verdadero</label>
              <label><input type="radio" value="falso" :name='id' v-model="respuesta" class="btn-check" >Falso</label>
              </div>
          </div>`
  })
let app = new Vue({

    el: '#contenedor',
    data: {
        mensaje: 'Hola mundo',
        mostrar: true,
        codigo: "<h2>Codigo escrito en js insertado mediante v-html</h2>",
        color: "text-success",
        booleano: true,
        logeado: false,
        valor: 9,
        array: [
            'elemento 1',
            'elemento 2',
            'elemento 3'
        ],
        objs: [
            {nombre: 'Catalina', apellido: 'Picart'},
            {nombre: 'Maria', apellido: 'Perez'},
            {nombre: 'Juan', apellido: 'Mendez'}
        ],
        preguntas: [
            {
                id: 1,
                pregunta: 'Thomas Edison descubrió la gravedad',
                respuesta: 'Isaac Newton descubrió la gravedad cuando vio caer una manzana mientras pensaba en las fuerzas de la naturaleza.',
                valorCorrecto: 'falso',
                categoria: 'ciencia',
                icono: 'icons/ciencia.png',
                alt: 'Pregunta de ciencia'
            },
            {
                id: 2,
                pregunta: '"El titanic se hundió en el Océano Pacífico"',
                respuesta: 'Se hundió en el Océano Atlántico Norte',
                valorCorrecto: 'falso',
                categoria: 'cultura',
                icono: 'icons/cultura.png',
                alt: 'Pregunta de cultura'
            },
            {
                id: 3,
                pregunta: 'JavaScript es Case Sensitive',
                respuesta: 'JavaScript es Case Sensitive, es decir, diferencia entre mayúsculas y minúsculas',
                valorCorrecto: 'verdadero',
                categoria: 'programacion',
                icono: 'icons/programacion.png',
                alt: 'Pregunta de programación'
            },
            {
                id: 4,
                pregunta: '"La Gran Muralla de China se puede ver desde el espacio"',
                respuesta: 'No puede verse desde el espacio y, en tal caso, solo se vería como una autopista normal',
                valorCorrecto: 'falso',
                categoria: 'cultura',
                icono: 'icons/cultura.png',
                alt: 'Pregunta de cultura'
            },
            {
                id: 5,
                pregunta: 'El intestino delgado mide unas tres veces y media la longitud de tu cuerpo',
                respuesta: 'Es la sección más larga del tubo digestivo, que mide unos siete metros de media',
                valorCorrecto: 'verdadero',
                categoria: 'ciencia',
                icono: 'icons/ciencia.png',
                alt: 'Pregunta de ciencia'
            },
            {
                id: 6,
                pregunta: 'En vue.js, los componentes son instancias reutilizables que tienen su propio contenido HTML, CSS y lógica',
                respuesta: 'Cada vez que usamos un componente se crea una nueva instancia de este, independiente de los otros. Por ejemplo, estas preguntas eran un componente',
                valorCorrecto: 'verdadero',
                categoria: 'programacion',
                icono: 'icons/programacion.png',
                alt: 'Pregunta de programación'
            }
        ]
    },
    methods: {
        cambiar: function(){
            this.mensaje = 'Cambio el mensaje';
        },
        iniciarSesion(){
            this.logeado = true;
        },
        cerrarSesion(){
            this.logeado = false;
        },
        nameInput(){
            console.log('se envio la info');
        },
        probandoTeclas(){
            alert('presione la tecla enter');
        },
        agregarPersona(){
            this.objs.push({nombre: 'Carlos', apellido: 'Perez'})
        },
        cambiarEstado(){
            this.logeado = !this.logeado; //va a cambiar el valor actual de logeado
        },
        guardarDato(){
            var nombre = document.querySelector("#nombre").value;
            localStorage.setItem("nombre", nombre);
            var saludo = document.getElementById("saludo");
            var datoGuardado = localStorage.getItem("nombre");
            saludo.innerHTML = `Hola ${datoGuardado}!`;
        }
    }





})