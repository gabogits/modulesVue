import Vue from 'vue'
import Vuex from 'vuex'
import tareas from './../modules/tareas';
import contador from './../modules/contador';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    titulo: 'Desde el store.js'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tareas, //de este modo podemos modularizar esta tienda, y de paso tener un state global  titulo: 'Desde el store.js'
    contador
  }
})
