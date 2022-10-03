<template>
  <v-app>
    <div id="app">
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
#app {
  width: 100%;
  height: 100%;
  background-color: #dcdcdc;
}
</style>