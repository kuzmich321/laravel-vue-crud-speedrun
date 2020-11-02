import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

import Home from '../components/HomeComponent'
import Login from '../components/LoginComponent'
import Register from '../components/RegisterComponent'
import Create from '../components/CreateComponent'
import Edit from '../components/EditComponent'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home,
            beforeEnter: (to, from, next) => {
                if (store.getters['auth/authenticated']) {
                    next()
                } else {
                    next({name: 'login'})
                }
            }
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'register',
            path: '/register',
            component: Register
        },
        {
            name: 'create',
            path: '/users/create',
            component: Create,
            beforeEnter: (to, from, next) => {
                if (store.getters['auth/authenticated']) {
                    next()
                } else {
                    next({name: 'login'})
                }
            }
        },
        {
            name: 'edit',
            path: '/users/edit/:id',
            component: Edit,
            beforeEnter: (to, from, next) => {
                if (store.getters['auth/authenticated']) {
                    next()
                } else {
                    next({name: 'login'})
                }
            }
        }
    ],

    mode: 'history'
})
