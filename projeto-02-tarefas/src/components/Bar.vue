<template>
  <div class="bar">
    <div class="progress" :style="{width: progress +`%`}"></div>
    <p>{{ progress + "%"}}</p>
  </div>
</template>

<script>
export default {
  props: ["progress"],

  computed: {},
  watch: {},
};
</script>

<style>
.bar {
  width: 500px;
  height: 30px;
  border: 1px solid #dcdcdc;
  margin: 15px;
  text-align: center;
  margin-bottom: 30px;
}
.progress {
  background-color: green;

  height: 100%;
}
</style>