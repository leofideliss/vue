import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        saldo: 10000,
        acoes: [
            { qtd: 0, nome: "AUDI", preco: 100 },
            { qtd: 0, nome: "BMW", preco: 120 },
            { qtd: 0, nome: "Mercedes", preco: 69 },
            { qtd: 0, nome: "Honda", preco: 184 },
            { qtd: 0, nome: "IBM", preco: 25 },
            { qtd: 0, nome: "Multilaser", preco: 157 },
            { qtd: 0, nome: "Logitech", preco: 155 },
            { qtd: 0, nome: "Asus", preco: 99 },
        ],
        acoesAdquiridas: [
        ],
    },
    /** É NECESSÁRIO PASSAR O STATE PARA OS GETTERS --- NÃO É POSSÍVEL ACESSAR USANDO 'this' AQUI */
    getters: {
        saldo(state) {
            return state.saldo
        },
        moeda(state) {
            let tamArraySaldo = state.saldo.toString().length;
            const arr = state.saldo.toString().split("");

            switch (tamArraySaldo) {
                case 4:
                    arr.splice(1, 0, ".");
                    break;
                case 5:
                    arr.splice(2, 0, ".");
                    break;
                case 6:
                    arr.splice(3, 0, ".");
                    break;
                case 7:
                    arr.splice(4, 0, ".");
                    arr.splice(1, 0, ".");

                    break;
                case 8:
                    arr.splice(5, 0, ".");
                    arr.splice(2, 0, ".");

                    break;
                case 9:
                    arr.splice(6, 0, ".");
                    arr.splice(3, 0, ".");

                    break;
                case 10:
                    arr.splice(7, 0, ".");
                    arr.splice(4, 0, ".");
                    arr.splice(1, 0, ".");
                    break;
                case 11:
                    arr.splice(8, 0, ".");
                    arr.splice(5, 0, ".");
                    arr.splice(2, 0, ".");

                    break;
                case 12:
                    arr.splice(9, 0, ".");
                    arr.splice(6, 0, ".");
                    arr.splice(3, 0, ".");
                    break;
            }

            arr.splice(arr.length, 0, ",00"); // adiciona ,00 no final
            arr.splice(0, 0, "R$ "); // adiciona o simbolo da moeda no inicio

            return arr.join("");
        },
        statusSaldo(state) {
            if (state.saldo > 0) return false;

            return true;
        },


    },
    mutations: {
        comprarAcoes(state, acao) {
            if (state.saldo - acao.preco >= 0) {
                state.saldo -= acao.preco
                state.acoesAdquiridas.push(acao)
            }
        },
        finalizarDia(state) {
            state.acoes.forEach(element => {
                let variacao = Math.round(Math.random() * 10)
                let operacao = Math.round(Math.random() * 1)

                if (operacao == 1)
                    element.preco += variacao
                else
                    element.preco -= variacao
            });
        }

    }
})