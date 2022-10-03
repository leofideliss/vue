<template>
  <div class="box">
    <v-container>
      <v-card>
        <v-card-title :style="corBox">
          <v-row class="ml-n1 box-title"> Nome da ação </v-row>
          <slot name="preco"></slot>
        </v-card-title>
        <v-card-text class="mt-4 ml-2">
          <v-row align="center">
            <v-text-field label="Quantidade" value="0" type="number">
            </v-text-field>
            <slot name="btn"></slot>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["cor"],
  computed: {
    corBox() {
      return {
        backgroundColor: this.cor,
      };
    },
  },
};
</script>

<style>
.box {
  width: 25%;
  height: 20%;
}
.box-title {
  color: white;
  font-weight: 400;
}
</style>