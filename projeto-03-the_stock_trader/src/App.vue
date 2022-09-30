<template>
  <v-app>
    <div>
      <Header />
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import Header from "@/components/template/Header.vue";
export default {
  components: { Header },
};
</script>

<style>
</style>