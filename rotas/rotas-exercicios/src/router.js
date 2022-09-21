import Vue from 'vue'
import Router from 'vue-router'
import Usuario from '@/components/usuario/Usuario'
import Inicio from '@/components/Inicio'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path:'/',
        component: Inicio
    },{
        path:'/usuario/:id',
        component: Usuario
    }]
})


