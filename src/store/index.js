import { createStore } from 'vuex'

export default createStore({
  state: {
    nombre: '',
    apellido: '',
    edad: '',
    personas: [{
      "nombre": "Juan",
      "apellido": "Carlos",
      "edad": "emerito"
    }],
    busqueda: '',
    resultado: []
  },
  getters: {
  },
  mutations: {
    addPersonVuex( state ){
      state.personas.push({
        nombre: state.nombre,
        apellido: state.apellido,
        edad: state.edad
      })
      state.nombre = ''
      state.apellido = ''
      state.edad = ''
      localStorage.setItem('Personas', JSON.stringify(state.personas))
      console.log(state.personas)
    },
    searchPersonVuex( state ){
      state.resultado = state.personas.filter( elemento => elemento.nombre == state.busqueda || elemento.apellido == state.busqueda || elemento.edad == state.busqueda )
      console.log(state.resultado[0].nombre)
      state.busqueda = ''
    }
  },
  actions: {
    accionAddPerson( context ){
      context.commit('addPersonVuex')
    },
    accionSearchPerson( context ){
      context.commit('searchPersonVuex')
    }
  },
  modules: {
  }
})
