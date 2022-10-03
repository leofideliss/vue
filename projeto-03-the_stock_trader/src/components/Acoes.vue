<template>
  <v-container fluid>
    <v-row class="mt-2">
    <BoxVue :cor="corBox">
      <template v-slot:preco>
          <v-btn text small>preco</v-btn>
        </template>
        <template v-slot:btn>
          <v-btn text small>Vender</v-btn>
        </template>
    </BoxVue>

    </v-row>
  </v-container>
</template>

<script>
import BoxVue from "./utilitarios/Box.vue";
export default {
  data() {
    return {
      corBox: "#2510a3",
    };
  },
  components: { BoxVue },
};
</script>

<style>
</style>