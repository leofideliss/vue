<template>
  <div id="app">
    <h1>{{ value }}</h1>
    <button @click="somar">+</button>
    <button @click="sub">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    somar() {
      this.value++;
    },
    sub() {
      this.value--;
    },
  },
};
</script>

<style scoped>

#app h1 {
  font-family: "Courier New", Courier, monospace;
}

 button {
  background-color: dodgerblue;
  color: white;
  outline: none;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-left: 10px;
  border: none;
}
</style>