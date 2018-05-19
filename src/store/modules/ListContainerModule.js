export default {
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
    },
    actions: {
        increment (context) {
            context.commit('increment')
        }
    }
}