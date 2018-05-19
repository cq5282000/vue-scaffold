import Vuex from 'vuex';
import Vue from 'vue';
import modulesAll from './modules';
Vue.use(Vuex);
export const store = new Vuex.Store({
    ...modulesAll
})
export default Vue;