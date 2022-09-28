export default {
    
    state: {
        quantidade: 0,
        preco: 0
    },

    mutations: {

        adicionarQuantidade(state, payload) {
            state.quantidade = payload
        },
        adicionarPreco(state, payload) {
            state.preco = payload
        }
    }

}