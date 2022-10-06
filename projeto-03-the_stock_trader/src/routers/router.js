import Vue from "vue"
import Router from 'vue-router'
import Home from '@/components/Home'
import Acoes from '@/components/Acoes'
import Portfolio from '@/components/Portfolio'
import FormAcoes from '@/components/FormAcoes'




Vue.use(Router)


const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home , name: 'home' },
        { path: '/acoes', component: Acoes },
        { path: '/portfolio', component: Portfolio },
        {path: '/formAcoes', component: FormAcoes },
    ]
})

export default router