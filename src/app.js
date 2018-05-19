import Vue, { store } from './store/index'
import VueRouter from 'vue-router';
import router from './router';
import App from './App.vue';
// 引入vue-router
Vue.use(VueRouter);

var app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});