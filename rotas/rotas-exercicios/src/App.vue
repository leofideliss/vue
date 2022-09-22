<template>
  <div id="app">
    <h1>Rotas com VueRouter</h1>
    <router-view name="Menu" />
    <transition
      enter-active-class="animate__animated animate__backInUp"
      leave-active-class="animate__animated animate__backOutUp"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
