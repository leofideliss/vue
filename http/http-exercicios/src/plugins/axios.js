import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-942c8-default-rtdb.firebaseio.com/'
// Headers para ser usado nos filtros de api , para segurança ou alguma regra utilizada
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accpets'] = 'application/json'



Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios

        //serve para interceptar o metódo enviado para o servidor
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            return config
        }, error => Promise.reject(error))

        //serve para interceptar a resposta do servidor
        // Vue.prototype.$http.interceptors.response.use(res => {
        //     const array = []
        //     for (let chave in res.data) {
        //         array.push({ id: chave, ...res.data[chave] })
        //     }
        //     res.data = array
        //     return res
        // }, error => Promise.reject(error))
    }
})