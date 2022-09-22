<template>
  <div class="usuario-detalhe">
    <h1>Usuario detalhe</h1>
    <hr>
    <span>Código: {{id}}</span>
    <!-- :to="`/usuario/${id}/editar`" -->
    <router-link :to="{name:'editarUsuario' , params:{id} , 
    query: {completo:false , lingua: 'en'}, hash: '#rodape' }" tag="button" primario>Editar</router-link>
    <hr>
  </div>
</template>

<script>
import { Hash } from 'crypto';

export default {props:['id']};
</script>

<style>

</style>