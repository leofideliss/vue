<template>
  <div class="tasks">
    <div
      @click="item.finish = !item.finish"
      class="box-task not-done"
      v-for="item in tasks"
      :key="item.name"
      :class="[{ done: item.finish }]"
    >
      <p>{{ item.name }}</p>
      <button class="remove-task" @click="removeTask(item.name)">x</button>
    </div>
  </div>
</template>

<script>
import Barramento from "@/Barramento";
import { runInThisContext } from "vm";
export default {
  props: ["tasks"],
  created() {
    Barramento.onTask((task) => {
      let i = 0;
      this.tasks.forEach((element) => {
        element.name == task ? i++ : i;
      });
      if (task != "" && task != null && i == 0)
        this.tasks.push({
          name: task,
          finish: false,
        });
    });
  },
  methods:{
    removeTask(id){
      
      let indice =this.tasks.indexOf(id)
      this.tasks.splice(indice,1)
    }
  }
};
</script>

<style>
.tasks {
  border-top: 1px solid #dcdcdc;
  width: 80%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
}
.box-task {
  height: 50px;
  width: 100px;
  padding: 10px;
  margin: 15px;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: 15px;
  border: 1px solid #dcdcdc;
  position:relative;

}
.not-done {
  background-color: rgba(255, 0, 0, 0.644);
}
.done {
  background-color: green !important;
  text-decoration: line-through;
}
.remove-task{
position: absolute;
top: 0;
right: 0;
border-radius: 50%;
border: none;
color: white;
cursor: pointer;
font-size: 12px;
background-color: rgba(255, 0, 0, 0.178);
margin: 4px;
}
</style>