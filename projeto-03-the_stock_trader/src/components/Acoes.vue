<template>
  <v-container fluid>
    <v-row class="mt-2" justify="center">
      <div v-for="acao in acoesAdquiridas" :key="acao">
        <BoxVue :cor="corBox">
          <template v-slot:nome>
            <span class="box-title" text small>{{
              acao.nome + " (Preço: R$" + acao.preco + ")"
            }}</span>
          </template>
          <template v-slot:btn>
            <v-text-field label="Quantidade" type="number" v-model="acao.qtdComprada">
            </v-text-field>
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
  data() {
    return {
      corBox: "#2510a3",
    };
  },
  computed:{
    acoesAdquiridas(){
      return this.$store.state.acoesAdquiridas
    }
  }
  
};
</script>

<style>
</style>