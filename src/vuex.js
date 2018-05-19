import Vuex from 'vuex';
import Vue from 'vue';
import modulesAll from './modules';
Vue.use(Vuex);
export const store = new Vuex.Store({
    modules: {
        ...modulesAll
    }
})
export default Vue;