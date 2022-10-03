<template>
  <v-container fluid>
    <v-row class="mt-2">
      <BoxVue :cor="corBox">
        <template v-slot:btn>
          <v-btn text small>Comprar</v-btn>
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
      corBox: "green",
    };
  },
  components: { BoxVue },
};
</script>

<style>
</style>