<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form class="painel" v-if="!enviado">
        <div class="cabecalho">Formulário</div>

        <!-- Exercicio 01 -->
        <!-- Criar uma formulário de registro -->
        <!-- Nome completo (Nome e Sobrenome) -->
        <!-- Email -->
        <!-- Senha -->
        <!-- Armazenar Dados? (Sim/Não) -->
        <NomeCompleto  v-model="nomeCompleto"> </NomeCompleto>
        <Rotulo nome="Email">
          <input type="email" name="" id="email" v-model="email" />
        </Rotulo>
        <Rotulo nome="Senha">
          <input type="password" name="" id="pass" v-model="senha" />
        </Rotulo>
        <Rotulo nome="Armazenar Dados?">
          <input
            type="radio"
            name=""
            id="sim"
            value="Sim"
            v-model="armazenar"
          />
          <label for="sim">Sim</label>
          <input
            type="radio"
            name=""
            id="nao"
            value="Não"
            v-model="armazenar"
          />
          <label for="nao">Não</label>
        </Rotulo>
        <button @click.prevent="enviar">Enviar</button>

        <!-- Exercicio 02 -->
        <!-- Só mostrar o fomulário de não tiver sido submetido -->
        <!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->

        <!-- Exercicio 03 -->
        <!-- Crie um componente personalizado NomeCompleto -->
        <!-- Esse componente deve receber Nome e Sobrenome -->
      </form>
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
        <Rotulo nome="nome">
          {{ nomeCompleto.nome }}
        </Rotulo>
        <Rotulo nome="sobrenome">
          {{ nomeCompleto.sobrenome }}
        </Rotulo>
        <Rotulo nome="email">
          {{ email }}
        </Rotulo>
        <Rotulo nome="senha">
          {{ senha }}
        </Rotulo>
        <Rotulo nome="armazenar">
          {{ armazenar }}
        </Rotulo>

      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import NomeCompleto from "./components/NomeCompleto.vue";
export default {
  name: "app",
  components: { Rotulo, NomeCompleto },
  data() {
    return {
      email: "",
      senha: "",
      armazenar: true,
      enviado: false,
      nomeCompleto: {
        nome: '',
        sobrenome: '',
      },
    };
  },
  methods: {
    enviar() {
      this.enviado = true;
    },
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
