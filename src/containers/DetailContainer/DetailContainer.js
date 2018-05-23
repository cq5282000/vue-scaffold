import ComponentA from '../../components/ComponentA/index.vue';
import ComponentB from '../../components/ComponentB/index.vue';
export default {
    data: function() {
        return {
            name: 'DetailContainer',
            sendProps: 'parent'
        };
    },
    components: {
        ComponentA,
        ComponentB
    },
    methods: {
        onChangeProps: function() {
            this.sendProps = 'son';
        },
        onComponentBClick: function() {
            console.log('componetB parent')
        }
    }
}
