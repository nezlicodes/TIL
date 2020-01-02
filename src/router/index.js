import Vue from 'vue';
import VueRouter from 'vue-router';
import secretVue from '../components/secret'
import registerVue from '@/components/register.vue'
import loginVue from '@/components/login'
import about from '@/components/about.vue'
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
        component: secretVue
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;