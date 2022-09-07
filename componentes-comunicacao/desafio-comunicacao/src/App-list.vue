<template>
  <ul class="list">
    <li v-for="item in list" :key="item.id" @click="itemSelected(item)">
      ID:{{ item.id }} - Nome: {{ item.nome }} - Idade: {{ item.idade }}
    </li>
  </ul>
</template>

<script>
import barramento from "./barramento";
export default {
  props: ["list"],
  methods: {
    itemSelected(item) {
      barramento.setUsuario(item)
    },
  },
};
</script>

<style>
ul {
  list-style: none;
}
.list{
    width: 50%;
}

.list li{
    margin: 15px;
    text-decoration: underline;
}

.list li:hover{
    color: blueviolet;
    cursor: pointer;
}
</style>