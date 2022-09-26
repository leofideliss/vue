<template>
  <div class="usuario-editar">
    <h1>Usuario editar</h1>
    <span>Código: {{ id }}</span>
    <p>Completo: {{ $route.query.completo }}</p>

    <p>Lingua: {{ $route.query.lingua }}</p>
    <hr />
    <button primario @click="confirm = !confirm">Confirmar</button>
    <div id="rodape">
      <h3>Curso Vue</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      confirm: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirm) {
      next();
    } else {
      if (confirm("Tem certeza?")) {
        next();
      } else {
        next(false);
      }
    }
  },
};
</script>

<style>
#rodape {
  margin-top: 1000px;
}
</style>