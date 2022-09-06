<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Nome do usúario: <strong>{{alterarNome()}}</strong></p>
        <p>Idade do usuário: {{idade}}</p>
        <button @click="reiniciar"> Alterar</button>
        <button @click="reiniciarFn">Alterando a partir do pai</button>
        <p>Vários detalhes...</p>
    </div>
</template>

<script>
    import barramento from '@/barramento.js'
export default {

    props:{
        nome :{
            typeof: String,
            default: "Disney"
            // required: true,
            // default: ()=>{
            //     return "Disney 2"
            // }
        },
        reiniciarFn: Function,
        idade:Number
    },
    methods:{
        alterarNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciar(){
            this.nome = "Alterado no filho"
            this.$emit("nomeMudou",this.nome)
        }
    },
    created(){
barramento.$on("idadeMudou",idade=>{
    this.idade = idade
})
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
