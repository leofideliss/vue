<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-alert
      show
      :variant="mensagem.tipo"
      dismissible
      v-for="mensagem in mensagens"
      :key="mensagem.texto"
    >
      {{ mensagem.texto }}
    </b-alert>

    <b-card>
      <b-form-group label="Nome:">
        <b-form-input
          type="text"
          size="lg"
          v-model="usuario.nome"
          placeholder="INFORME SEU NOME"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group label="Email:">
        <b-form-input
          type="email"
          size="lg"
          v-model="usuario.email"
          placeholder="INFORME SEU EMAIL"
        >
        </b-form-input>
      </b-form-group>
      <hr />
      <b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
      <b-button class="ml-2" @click="obterDados" size="lg" variant="success"
        >Obter Dados</b-button
      >
      <hr />
      <b-list-group>
        <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
          <p><strong>ID:</strong>{{ id }}</p>
          <p><strong>NOME:</strong>{{ usuario.nome }}</p>
          <p><strong>EMAIL:</strong>{{ usuario.email }}</p>
          <br />
          <b-button variant="warning" size="lg" @click="carregar(id)"
            >Carregar</b-button
          >
          <b-button class="ml-2" variant="danger" size="lg" @click="excluir(id)"
            >Excluir</b-button
          >
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [],
      mensagens: [],
      id: null,
      usuario: {
        nome: "",
        email: "",
      },
    };
  },
  methods: {
    limpar() {
      this.usuario.nome = "";
      this.usuario.email = "";
      this.id = null;
      this.mensagens = [];
    },
    salvar() {
      const metodo = this.id ? "patch" : "post";
      const finalUrl = this.id ? `/${this.id}.json` : ".json";
      const msgAlert = this.id
        ? "Alterado com sucesso !"
        : "Inserido com sucesso!";
      const tipoAlert = this.id ? "success" : "success";
      this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
        .then(() => {
          this.limpar();
          this.mensagens.push({
            texto: msgAlert,
            tipo: tipoAlert,
          });
          this.obterDados();
        })
        .catch(() => {
          this.mensagens.push({
            texto: "Erro ao executar a operação",
            tipo: "danger",
          });
        });
    },
    carregar(id) {
      this.id = id;
      this.usuario = { ...this.usuarios[id] };
    },
    excluir(id) {
      this.$http
        .delete(`/usuarios/${id}.json`)
        .then(() => {
          this.limpar();
          this.mensagens.push({
            texto: "Excluido com sucesso !",
            tipo: "success",
          });
          this.obterDados();
        })
        .catch(() => {
          this.mensagens.push({
            texto: "Erro ao executar a operação",
            tipo: "danger",
          });
        });
    },
    obterDados() {
      this.$http("usuarios.json").then((res) => {
        this.usuarios = res.data;
      });
    },
  },
  //   created() {
  //     this.$http
  //       .post("usuarios.json", {
  //         nome: "Leonardo",
  //         email: "Leo@gmail.com",
  //       })
  //       .then((res) => console.log(res));
  //   },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
