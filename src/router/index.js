/* eslint-disable no-unused-vars */
import Vue from 'vue';
import VueRouter from 'vue-router';
import secretVue from '../components/secret'
import registerVue from '@/components/register.vue'
import loginVue from '@/components/login'
import about from '@/components/about.vue'
import * as firebase from 'firebase/app';
import 'firebase/auth'

Vue.use(VueRouter);


const routes = [{
        path: '/login',
        name: 'login',
        component: loginVue
    },
    {
        path: '/register',
        name: 'register',
        component: registerVue
    },
    {
        path: '/about',
        name: 'about',
        component: about
    }, {
        path: '/secret',
        name: 'secret',
        component: secretVue,
        meta: { requiresAuth: true }
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});


router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const isAuthenticated = firebase.auth().currentUser;
    if (requiresAuth && !isAuthenticated) {
        next('/login');
    } else {
        next()
    }
})
export default router;