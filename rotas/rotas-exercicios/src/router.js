import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
import MenuVue from './components/template/Menu.vue';
import MenuAltVue from './components/template/MenuAlt.vue';
// import Usuario from '@/components/usuario/Usuario'
// import UsuarioLista from '@/components/usuario/UsuarioLista'
// import UsuarioDetalhe from '@/components/usuario/UsuarioDetalhe'
// import UsuarioEditar from '@/components/usuario/UsuarioEditar'



Vue.use(Router)

// /* webpackChunkName: "usuario" */ serve para agrupar os componentes em um único arquivo para ser carregado em partes na aplicação 
const Usuario = () => import(/* webpackChunkName: "usuario" */'@/components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'@/components/usuario/UsuarioLista')
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */'@/components/usuario/UsuarioDetalhe')
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */'@/components/usuario/UsuarioEditar')

const router = new Router({
    mode: 'history',
    // move a pagina até determinado #id
    scrollBehavior(to) {
        if (to.hash) {
            // return { selector: to.hash }
        }
    },
    routes: [{
        name: 'inicio',
        path: '/',
        // component: Inicio
        components: {
            default: Inicio,
            Menu: MenuVue
        }
    }, {
        path: '/usuario',
        // component: Usuario,
        components: {
            default: Usuario,
            Menu: MenuAltVue
        },
        props: true,
        children: [
            { path: '', component: UsuarioLista },
            {
                path: ':id', component: UsuarioDetalhe, props: true, beforeEnter: (to, from, next) => {
                    console.log("Antes da rota -> usuario detalhe")
                    next()
                }
            },
            { path: ':id/editar', component: UsuarioEditar, props: true, name: "editarUsuario" },
        ]
    },
    {
        path: '/redirecionar',
        redirect: '/usuario'
    },
    {
        path: '*',
        redirect: '/'
    }]
})

router.beforeEach((to, from, next) => {
    console.log("Antes das rotas -> global")
    next()
})
export default router