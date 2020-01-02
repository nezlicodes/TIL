/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import axios from 'axios';
import firebase from 'firebase/app';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)

Vue.prototype.$axios = axios;
Vue.config.productionTip = false


const firebaseConfig = {
    apiKey: "AIzaSyDORYT_LMUPK9uwn0zv1ICvb93DEkx4rkA",
    authDomain: "vue-fire-auth-3eb43.firebaseapp.com",
    databaseURL: "https://vue-fire-auth-3eb43.firebaseio.com",
    projectId: "vue-fire-auth-3eb43",
    storageBucket: "vue-fire-auth-3eb43.appspot.com",
    messagingSenderId: "729156555110",
    appId: "1:729156555110:web:fe0b682834f2ba86d0b8a7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
new Vue({
    render: h => h(App),
    router
}).$mount('#app')