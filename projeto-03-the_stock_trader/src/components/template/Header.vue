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
      <v-toolbar-items><v-btn text> Finalizar Dia </v-btn></v-toolbar-items>

      <template>
        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on"> Salvar & Carregar </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title class="list-item">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </template>
      <v-toolbar-items 
        ><v-btn text > <span class="positivo" :class={negativo:statusSaldo}> Saldo: {{ moeda }} </span> </v-btn></v-toolbar-items
      >
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data: () => ({
    items: [{ title: "Salvar Dados" }, { title: "Carregar Dados" }],
  }),
  computed: {
    saldo() {
      return this.$store.state.saldo;
    },
    moeda() {
      let tamArraySaldo = this.saldo.toString().length;
      const arr = this.saldo.toString().split("");

      switch (tamArraySaldo) {
        case 4:
          arr.splice(1, 0, ".");
          break;
        case 5:
          arr.splice(2, 0, ".");
          break;
        case 6:
          arr.splice(3, 0, ".");
          break;
        case 7:
          arr.splice(4, 0, ".");
          arr.splice(1, 0, ".");

          break;
        case 8:
          arr.splice(5, 0, ".");
          arr.splice(2, 0, ".");

          break;
        case 9:
          arr.splice(6, 0, ".");
          arr.splice(3, 0, ".");

          break;
        case 10:
          arr.splice(7, 0, ".");
          arr.splice(4, 0, ".");
          arr.splice(1, 0, ".");
          break;
        case 11:
          arr.splice(8, 0, ".");
          arr.splice(5, 0, ".");
          arr.splice(2, 0, ".");

          break;
        case 12:
          arr.splice(9, 0, ".");
          arr.splice(6, 0, ".");
          arr.splice(3, 0, ".");
          break;
      }

      arr.splice(arr.length, 0, ",00"); // adiciona ,00 no final
      arr.splice(0, 0, "R$ "); // adiciona o simbolo da moeda no inicio

      return arr.join("");
    },
    statusSaldo() {
      if (this.saldo > 0) return false;

      return true;
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