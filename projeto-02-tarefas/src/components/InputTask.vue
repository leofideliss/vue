<template>
  <div class="input-task">
    <input
      @keyup.enter="addTask"
      type="text"
      placeholder="Nome da tarefa"
      id="nameTask"
    />
    <button @click="addTask">Adicionar</button>
  </div>
</template>
  
  <script>
import Barramento from "@/Barramento";
export default {
  methods: {
    addTask() {
      Barramento.setTask(document.querySelector("#nameTask").value);
      document.querySelector("#nameTask").value = "";
    },
  },
};
</script>
  
  <style>
#nameTask {
  padding: 5px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  outline: 0;
  margin-right: 10px;
  width: 200px;
  height: 35px;
}
.input-task {
  display: flex;
  flex-direction: row;
  margin: 15px;
}
.input-task button {
  background-color: rgba(37, 150, 241, 0.897);
  outline: 0;
  color: white;
  border: none;
  height: 47px;
  border-radius: 8px;
  font-size: 16px;
  padding: 8px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  cursor: pointer;
}
</style>