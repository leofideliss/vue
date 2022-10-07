<template >
  <v-container>
    <v-row justify="center">
      <v-col class="col-md-10 mt-10 form">
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="acao.nome"
            :counter="10"
            label="Nome da Ação"
            required
          ></v-text-field>

          <v-text-field
            v-model="acao.preco"
            type="number"
            label="Preço"
            required
          ></v-text-field>

          <v-btn color="success" class="mr-4" @click="salvar"> Salvar </v-btn>

          <v-btn color="red darken-3" class="mr-4" @click="inicio"
            >Cancelar
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { showError } from "@/global.js";
export default {
  data() {
    return {
      acao: {},
    };
  },
  methods: {
    inicio() {
      this.$router.push({ name: "home" });
    },
    salvar() {
      const url = "http://localhost:3000/acoes";
      this.acao.qtd = 0;
      axios
        .post(url, this.acao)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.$router.push({ name: "home" });
        })
        .catch(showError);
    },
  },
};
</script>

<style>
.form {
  background-color: white;
  border-radius: 5px;
  padding-right: 10px;
}
</style>