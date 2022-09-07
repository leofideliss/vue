import Vue from 'vue'
export default new Vue({
    methods:{
    setUsuario(usuario){
        this.$emit("UsuarioSelecionado",usuario)
    },

    onUsuario(callback){
        this.$on("UsuarioSelecionado",callback)
    }
}
})
