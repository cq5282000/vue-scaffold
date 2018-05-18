import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count ++;
        }
    },
    // computed: {
    //     computedCount() {
    //         return state.count ++;
    //     }
    // }
    getters: {
        computedCount: state => {
            return state.count + 1;
        }
    }
})
export default Vue;