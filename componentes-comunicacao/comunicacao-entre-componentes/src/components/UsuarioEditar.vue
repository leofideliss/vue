<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>Idade do usuário: {{ idade }}</p>
    <button @click="alterarIdade">Alterar idade</button>
  </div>
</template>

<script>
    import barramento from "@/barramento.js"
export default {
  props: ["idade"],
  methods: {
    alterarIdade() {
      this.idade ++;
      barramento.$emit("idadeMudou", this.idade);
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
