new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor2: ''
    },
    methods: {
    exibeAlerta(){
        alert("Alertando!")
    },
    armazenaValor(event){
        this.valor = event.target.value
    },
    armazenaValor2(event){
        this.valor2 = event.target.value
    }
    },
})