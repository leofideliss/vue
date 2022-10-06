<template>
  <nav class="header">
    <v-toolbar elevation="2">
      <v-toolbar-title class="mr-5">Stock <b>Trader</b></v-toolbar-title>

      <v-toolbar-items><v-btn to="/" text> Início </v-btn></v-toolbar-items>
      <v-toolbar-items
        ><v-btn to="/portfolio" text> Portfólio </v-btn></v-toolbar-items
      >
      <v-toolbar-items><v-btn to="/acoes" text> Ações </v-btn></v-toolbar-items>

      <v-spacer></v-spacer>
      <v-toolbar-items
        ><v-btn @click="finalizarDia" text>
          Finalizar Dia
        </v-btn></v-toolbar-items
      >

      <template>
        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on">
                Salvav/Carregar & Config.
              </v-btn>
            </template>
            <v-list>
              <v-list-item> Salvar Dados </v-list-item>
              <v-list-item> Carregar Dados </v-list-item>
              <v-list-item to="/formAcoes"> Add. Ações </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </template>
      <v-toolbar-items
        ><v-btn text>
          <span class="positivo" :class="{ negativo: statusSaldo }">
            Saldo: {{ moeda }}
          </span>
        </v-btn></v-toolbar-items
      >
    </v-toolbar>
  </nav>
</template>

<script>
export default {
 
  computed: {
    moeda() {
      return this.$store.getters.moeda;
    },
    statusSaldo() {
      return this.$store.getters.statusSaldo;
    },
  },
  methods: {
    finalizarDia() {
      this.$store.commit("finalizarDia");
    },
  },
};
</script>
  
  <style>
.list-item {
  cursor: pointer;
}

.positivo {
  color: green;
}

.negativo {
  text-decoration: underline;
  color: red;
}
</style>