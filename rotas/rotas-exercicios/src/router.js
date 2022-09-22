import Vue from 'vue'
import Router from 'vue-router'
import Usuario from '@/components/usuario/Usuario'
import Inicio from '@/components/Inicio'
import UsuarioLista from '@/components/usuario/UsuarioLista'
import UsuarioDetalhe from '@/components/usuario/UsuarioDetalhe'
import UsuarioEditar from '@/components/usuario/UsuarioEditar'
import MenuVue from './components/template/Menu.vue';
import MenuAltVue from './components/template/MenuAlt.vue';



Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior(to) {
        if (to.hash) {
            return { selector: to.hash }
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
            { path: ':id', component: UsuarioDetalhe, props: true },
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


