<template>
  <v-container fluid>
    <v-row class="mt-2" justify="center">
      <div v-for="acao in acoes" :key="acao.id">
        <BoxVue :cor="corBox">
          <template v-slot:nome>
            <span class="box-title" text small>{{ acao.nome }}</span>
          </template>
          <template v-slot:btn>
            <v-btn text small class="mr-2">Comprar</v-btn>
          </template>
        </BoxVue>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import BoxVue from "./utilitarios/Box.vue";
import acoes from "@/mixins/acoes";

export default {
  mixins: [acoes],
  data() {
    return {
      corBox: "green",
    };
  },
  components: { BoxVue },
};
</script>

<style>
</style>