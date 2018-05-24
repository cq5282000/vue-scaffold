import fetchApi from '../../api/detailContainerApi';
export default {
    state: {
        count: 0,
        listData: {}
    }, 
    getters: {
        getterCount: state => {
            return state.count + 3;
        }
    },
    mutations: {
        increasement: state => {
            state.count ++;
        },
        declinable: state => {
            state.count --;
        },
        fetchListData: (state, listData) => {
            state.listData = listData;
        }
    },
    actions: {
        increase: (context) => {
            context.commit('increasement');
        },
        decline: ({ commit }) => {
            commit('declinable');
        },
        fetchInfo: async(context) => {
            context.commit('fetchListData', await fetchApi.fetchListData());
        }
    }
}