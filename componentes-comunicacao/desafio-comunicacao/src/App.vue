<template>
  <div id="app">
    <appList :list="list"></appList>
    <appInfo></appInfo>
  </div>
</template>

<script>
import appInfo from "@/App-info.vue";
import appList from "@/App-list.vue";
export default {
  components: {
    appInfo,
    appList,
  },
  data() {
    return {
      list: [
        { nome: "Ana", idade: 35, id: 1 },
        { nome: "Pedro", idade: 22, id: 2 },
        { nome: "Luiza", idade: 24, id: 3 },
        { nome: "Leonardo", idade: 25, id: 4 },
        { nome: "Diana", idade: 22, id: 5 },
      ],
    };
  },
};
</script>

<style>
#app{
  display: flex;
  flex-direction: row;
}
</style>