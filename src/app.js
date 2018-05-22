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

if (module.hot) {
    const api = require('vue-hot-reload-api');
    api.install(Vue);

    // compatibility can be checked via api.compatible after installation
    if (!api.compatible) {
        throw new Error('vue-hot-reload-api is not compatible with the version of Vue you are using.')
    }
    module.hot.accept();
    if (!module.hot.data) {
        api.createRecord('very-unique-id', App);
    } else {
        api.rerender('very-unique-id', App);
        api.reload('very-unique-id', App);
    }
}