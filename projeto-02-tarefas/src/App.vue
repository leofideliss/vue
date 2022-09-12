<template>
  <div id="app">
    <h1>Tarefas</h1>
    <Bar :progress="calcProgress"></Bar>
    <InputTask></InputTask>
    <Tasks :tasks="tasks"></Tasks>
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
import InputTask from "@/components/InputTask.vue";
import Tasks from "@/components/Tasks.vue";

export default {
  components: { Bar, InputTask, Tasks },
  data() {
    return {
      tasks: [],
      progress: 0,
    };
  },
  // watch: {
  //   tasks() {
  //     let total = calcProgress(this.tasks)
  //     this.progress = total
  //   },
  // },
  computed: {
    calcProgress() {
      let trues = 0;
      let falses = 0;
      let result = 0;
      this.tasks.forEach((element) => {
        if (element.finish == false) falses++;
        else trues++;
      });

      result = (trues * 100) / this.tasks.length;
      // console.log(result,trues);
      return Math.round(result) || 0;
    },
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
