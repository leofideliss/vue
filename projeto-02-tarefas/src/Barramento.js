import Vue from 'vue'
export default new Vue({
    methods:{
        setTask(task){
            this.$emit("taskAdd",task)
        }
        ,
        onTask(callback){
            this.$on("taskAdd",callback)
        }
    }
})