<template>
  <v-container fluid>
    <v-row class="mt-2" justify="center">
      <div v-for="acao in arrayAcoes" :key="acao.id">
        <BoxVue :cor="corBox">
          <template v-slot:nome>
            <span class="box-title" text small>{{
              acao.nome + " (Preço: R$" + acao.preco + ")"
            }}</span>
          </template>
          <template v-slot:btn>
            <v-text-field label="Quantidade" type="number" v-model="acao.qtd">
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
import axios from "axios";
export default {
  components: { BoxVue },
  data() {
    return {
      corBox: "#2510a3",
      arrayAcoes: [],
    };
  },
  computed:{
   
  },
  methods: {
    loadAcoes() {
      const url = "http://localhost:3000/comprar/acao";
      axios.get(url).then((res) => {
        this.arrayAcoes = res.data;
        console.log(this.arrayAcoes);
      });
    },
  },
  mounted(){
    this.loadAcoes()
  }
  
};
</script>

<style>
</style>