<template>
  <div id="app">
    <h1>Filtros & Mixins (Desafio)</h1>
    <!-- Exercício 1 -->
    <!-- Construir um filtro local que troca espaços por vírgula -->
    <h3>{{ info | filtro }}</h3>
    <!-- Exercício 2 -->
    <!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
    <!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
    <h3>{{ info | conta }}</h3>
    <!-- Exercício 3 -->
    <!-- Implementar os exercicios 1 e 2 com propriedade computada -->
    <h3>{{ filtroTroca }}</h3>
    <h3>{{ filtroConta }}</h3>

    <!-- Exercício 4 -->
    <!-- Compartilhe a propriedade computada via mixin -->
    <h3>{{ filtroTrocaMixin }}</h3>
    <h3>{{ filtroContaMixin }}</h3>
  </div>
</template>

<script>
  import FiltrosMixin from '@/filtrosMixin.js'
export default {
  mixins:[FiltrosMixin],
  filters: {
    filtro(valor) {
      const newValue = valor.replaceAll(" ", ",");
      return newValue;
    },
  },
  data() {
    return {
      info: "Testando Filtros Vue",
      infoComputed: "Testando Filtros Computados",
      infoMixin:"Testando Filtros Mixin",
    };
  },
  computed: {
    filtroTroca() {
      let newArray = this.infoComputed.replaceAll(" ", ",");
      return newArray;
    },
    filtroConta() {
    
        const arr =  this.infoComputed.split(" ");
        let newArray = "";
        arr.forEach((element) => {
          newArray += element + " (" + element.length + ") ";
        });

        return newArray;

    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
