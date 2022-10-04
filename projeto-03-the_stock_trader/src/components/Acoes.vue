<template>
  <v-container fluid>
    <v-row class="mt-2" justify="center">
      <div v-for="acao in acoesAdquiridas" :key="acao.nome">
        <BoxVue :cor="corBox">
          <template v-slot:nome>
            <span class="box-title" text small>{{
              acao.nome + " (Preço: R$" + acao.precoComprado + ")"
            }}</span>
          </template>
          <template v-slot:btn>
            <v-btn text small class="mr-2">Vender</v-btn>
          </template>
        </BoxVue>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import BoxVue from "./utilitarios/Box.vue";
export default {
  components: { BoxVue },

  comptued: {
    acoesAdquiridas(){
      return this.$store.state.acoesAdquiridas
    }
  },
  data() {
    return {
      corBox: "#2510a3",
    };
  },
};
</script>

<style>
</style>