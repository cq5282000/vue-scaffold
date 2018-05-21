import Vuex from 'vuex';
import Vue from 'vue';
import modulesAll from './modules';
Vue.use(Vuex);
export const store = new Vuex.Store({
    strict: true, // 开启严格模式
    modules: {
        ...modulesAll
    }
})
export default Vue;