export default {
  namespaced: true, //cuando colocamos  namespaced podemos llamar correctamente el arreglo de tareas dentro de los modules
  state: {
    contador: 0
  },
  mutations: {
    aumentarContador(state, payload) {
      state.contador = state.contador + payload
    }
  },
  actions: {

  },
  getters: {

  }
}