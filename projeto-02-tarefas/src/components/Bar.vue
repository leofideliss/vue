<template>
  <div class="bar">
    <div class="progress" :style="progressBar"></div>
  </div>
</template>

<script>
export default {
  props: ["tasks"],

  computed: {
    progressBar() {
      return {
        widht: this.fillBar + "px",
      };
    },
  },
  watch: {
    tasks() {},
  },
  methods: {
    fillBar() {
      let trues = 0;
      let falses = 0;
      let total = this.task.length;
      this.task.forEach((element) => {
        element.finish == false ? falses++ : trues++;
      });

      return (trues * 100) / total;
    },
  },
};
</script>

<style>
.bar {
  width: 500px;
  height: 30px;
  border: 1px solid #dcdcdc;
  margin: 15px;
}
.progress {
  background-color: green;
  width: 0%;
  height: 100%;
}
</style>