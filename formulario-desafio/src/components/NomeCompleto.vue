<template>
  <div>
    <Rotulo nome="Nome">
      <input type="text" :value="value.nome" @input="alterarNome" />
    </Rotulo>
    <Rotulo nome="SobreNome">
      <input
        type="text"
        :value="value.sobrenome"
        @input="alterarSobrenome"
      />
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from "./Rotulo.vue";

export default {
  components: { Rotulo },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  methods: {
    alterarNome(event) {
      this.$emit("input", {
        nome: event.target.value,
        sobrenome: this.value.nome,
      });
    },
    alterarSobrenome(event) {
      this.$emit("input", {
        nome: this.value.sobrenome,
        sobrenome: event.target.value,
      });
    },
  },
};
</script>

<style>
</style>