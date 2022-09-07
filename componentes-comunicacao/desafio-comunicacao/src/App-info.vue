<template>
  <div class="info">
    <p>ID: {{ item.id }}</p>
    <p>Nome:{{ item.nome }}</p>
    <p>Idade: {{ item.idade }}</p>
  </div>
</template>

<script>
import barramento from "./barramento";
export default {
  data() {
    return {
      item: null,
    };
  },
  created() {
    barramento.onUsuario((usuario) => {
      this.item = usuario;
    });
  },
};
</script>

<style>
    .info{
        widows: 50%;
    }
</style>