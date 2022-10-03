<template>
  <div class="box">
    <v-container>
      <v-row class="ml-n1 box-title" align="center" justify="center">
        <v-col>
          <v-card class="">
            <v-card-title :style="corBox">
              <slot name="nome"></slot>
            </v-card-title>
            <v-card-text class="mt-4 ml-2">
              <v-row align="center">
                <v-text-field label="Quantidade" value="0" type="number">
                </v-text-field>

                <slot name="btn"></slot>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
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
</style>