<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 v-for="(item, index) in tareasState" :key="index">{{item}}</h2>
    <h3>{{contador}}</h3>
    <h3>{{titulo}}</h3>
    <button @click="aumentarContador(1)">+</button>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("tareas", ["tareasState"]),
    ...mapState("contador", ["contador"]),
    //titulo no podemos ponerlo en el mismo arrar en donde esta tareasState, por que al principio especificamos
    //que ese mapState pertenece al module tareas

    ...mapState(["titulo"])

    //el primer argumento es el nombre que se puso dentro de los modules en el state
    // el segundo argumento es el array que tenemos dentro del state en nuestro archivo de tarea
  },
  methods: {
    ...mapMutations("contador", ["aumentarContador"])
  }
};
</script>
