import Vue from 'vue'
import VueRouter from 'vue-router';
import router from './router'
// 引入vue-router
Vue.use(VueRouter);

var app = new Vue({
    // el: '#app',
    router
}).$mount('#app');