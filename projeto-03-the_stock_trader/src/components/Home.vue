<template>
  <v-container id="inicio">
    <p class="mt-4">Negocio & Consulte suas ações</p>
    <v-alert type="info">
      Você pode Salvar & Carregar os Dados
    </v-alert>
    <v-alert type="info" color="green">
      Clique em 'Finalizar Dia' para iniciar um novo dia!
    </v-alert>
    <hr>
    <p class="mt-4">Seu saldo: {{moeda}}</p>
  </v-container>
</template>

<script>
export default {
  computed:{
    moeda(){
      return this.$store.getters.moeda
    }
  }
};
</script>

<style>
#inicio p {
  font-size: 18pt;
}
</style>