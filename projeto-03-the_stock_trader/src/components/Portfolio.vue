<template>
  <v-container fluid>
    <v-row class="mt-2" justify="center">
      <div v-for="acaoPortifolio in acoes" :key="acaoPortifolio.nome">
        <BoxVue :cor="corBox">
          <template v-slot:nome>
            <span class="box-title" text small>{{
              acaoPortifolio.nome + " (Preço: R$" + acaoPortifolio.preco + ")"
            }}</span>
          </template>
          <template v-slot:btn>
            <v-text-field
              label="Quantidade"
              type="number"
              v-model="acaoPortifolio.qtd"
            >
            </v-text-field>
            <v-btn text small class="mr-2" @click="comprarAcao(acaoPortifolio)"
              >Comprar</v-btn
            >
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
  computed: {
    acoes() {
      return this.$store.state.acoes;
    },
  },
  methods: {
    comprarAcao(acao) {
      let acaoNova = {
        qtdComprada: acao.qtd,
        nome: acao.nome,
        preco: acao.preco,
      };
      this.$store.commit("comprarAcoes", acaoNova);
      acao.qtd = 0;
    },
    
  },
};
</script>

<style>
</style>