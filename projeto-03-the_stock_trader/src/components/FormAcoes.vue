<template >
  <v-container >
    <v-row justify="center" >
      <v-col class="col-md-10 mt-10 form" >
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="nome"
            :counter="10"
            label="Nome da Ação"
            required
          ></v-text-field>

          <v-text-field
          v-model="preco"
          type="number"
            label="Preço"
            required
          ></v-text-field>

      

          <v-btn color="success" class="mr-4" > Salvar </v-btn>

          <v-btn color="orange" class="mr-4" @click="inicio"> Cancelar </v-btn>


        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    methods:{
        inicio(){
            this.$router.push({ name: 'home'});
        }
    }
};
</script>

<style>
    .form{
        background-color: white;
        border-radius: 5px;
        padding-right: 10px;
    }
</style>