import Vuex from 'vuex';
import Vue from 'vue';
import modulesAll from './modules';
Vue.use(Vuex);
export const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', // 开启严格模式，发布环境下关闭
    modules: {
        ...modulesAll
    }
});
export default Vue;

if (module.hot) {
    module.hot.accept(['./modules/index.js'], () => {
        const newModulesAll = require('./modules/index.js').default;
        store.hotUpdate({
            modules: newModulesAll
        })
    })
}