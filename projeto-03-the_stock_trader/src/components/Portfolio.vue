<template>
  <v-container fluid>
    <v-row class="mt-2" justify="center">
      <div v-for="acao in acoes" :key="acao.nome">
        <BoxVue :cor="corBox">
             <template v-slot:nome>
            <span class="box-title" text small>{{ 
              acao.nome + " (Preço: R$" + acao.precoAtual+ ")" 
            }}</span>
          </template>
          <template v-slot:btn>
            <v-btn text small class="mr-2" @click="comprarAcao">Comprar</v-btn>
          </template>
        </BoxVue>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import BoxVue from "./utilitarios/Box.vue";

export default {
  data() {
    return {
      corBox: "green",
    };
  },
  components: { BoxVue },
  computed:{
    acoes(){
      return this.$store.state.acoes
    },
  
  },
  methods:{
  comprarAcao(){
    let acao = { nome: "Asus", precoAtual: 99 }
       this.$store.commit("comprarAcoes",acao );
    }
  }
};
</script>

<style>
</style>