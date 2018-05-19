import { store } from '../../vuex';
const { count } = store.state;
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    data: function() {
        return {
            text: 'hello world',
        }
    },
    mounted() {
        console.log(this.$route);
    },
    computed: {
        username() {
            return this.$route.params.username
        },
        // count() {
        //     return this.$store.state.count
        // },
        ...mapState({
            count: state => state.count,
        }),
        localhostCount() {
            return this.$store.getters.computedCount;
        }
    },
    watch: {
        '$route' (to, from) {
            console.log('1231232131231231231231231231231');
        }
    },
    beforeRouteUpdate: function(to, from, next) {
        console.log('to:', to);
        console.log('from:', from);
        console.log('next:', next);
        next();
    },
    methods: {
        // ...mapMutations({
        //     jumpToNewUrl: 'increment'
        // }),
        ...mapActions({
            jumpToNewUrl: 'increment'
        }),
    }
}